const contactModel = require("../Model/contact.model");
const nodemailer = require("nodemailer");

// Util: Basic email format checker
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const insertUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation - Only name, email, and message are required
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        msg: "All fields are required: name, email, and message" 
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false,
        msg: "Invalid email format." 
      });
    }

    // Save to DB
    const contactUser = new contactModel({
      name,
      email,
      message,
      submittedAt: new Date()
    });

   contactUser.save();

    // Nodemailer Setup
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.MY_EMAIL, 
        pass: process.env.MY_PASS, 
      },
    });

    // Email to Admin (Tournament Organizers)
    const adminMailOptions = {
      from: email,
      to: "fsnlkonoiketennis@gmail.com",
      subject: `New Contact Form Submission - FSNL Tennis Tournament`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-bottom: 15px;">Contact Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; line-height: 1.5;">
                  ${message.replace(/\n/g, '<br>')}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full', 
                timeStyle: 'long' 
              })}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              This email was sent from the FSNL-KONOIKE Tennis Tournament contact form.
            </p>
          </div>
        </div>
      `
    };

    // Email to User (Confirmation)
    const userMailOptions = {
      from: "fsnlkonoiketennis@gmail.com",
      to: email,
      subject: `Thank You for Contacting FSNL-KONOIKE Tennis Tournament`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #2563eb; margin-bottom: 10px;">
              Thank You for Your Message!
            </h2>
            <p style="color: #64748b; font-size: 16px;">
              We've received your inquiry and will get back to you shortly.
            </p>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-bottom: 15px;">Your Message Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #475569; width: 80px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 8px 0; color: #1e293b; line-height: 1.5;">
                  ${message.replace(/\n/g, '<br>')}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #dcfce7; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h4 style="color: #166534; margin-bottom: 10px;">What's Next?</h4>
            <ul style="color: #15803d; margin: 0; padding-left: 20px;">
              <li>Our team will review your message within 24 hours</li>
              <li>We'll respond to your email address: ${email}</li>
              <li>For urgent matters, call: +91 9303537600</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #1e293b; border-radius: 8px; text-align: center;">
            <p style="color: #cbd5e1; margin: 0; font-size: 14px;">
              <strong>FSNL-KONOIKE Invitational Tennis Tournament 2025</strong><br>
              Bhilai Tennis Complex, Sector-7, Bhilai<br>
              Email: fsnlkonoiketennis@gmail.com | Phone: 9303537600
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // Response
    res.status(200).json({ 
      success: true,
      msg: "Thank you for your message! We have received it and will get back to you soon."
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ 
      success: false,
      msg: "Sorry, there was an error sending your message. Please try again later or contact us directly at fsnlkonoiketennis@gmail.com" 
    });
  }
};

module.exports = { insertUser };