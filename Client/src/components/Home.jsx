// components/Home.jsx
import React from "react";
import back from "../assets/t2.jpg";
import sport from "../assets/logo2.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={sport} 
                alt="FSNL Tennis Logo" 
                className="w-10 h-10 object-cover rounded-full border-2 border-blue-100"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                  FSNL Tennis
                </span>
                <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                  Professional Tournaments
                </span>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-1 group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>

            {/* Contact Info */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                <i className="fas fa-phone text-blue-600 text-sm"></i>
                <span className="text-blue-800 font-semibold text-sm lg:text-base tracking-wide">
                  6266970108
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden bg-white border-t border-gray-200 py-2 hidden">
            {['Home', 'About', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-5">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${back})`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 lg:py-20">
       {/* Tournament Badge */}
<div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 backdrop-blur-sm border border-purple-400 rounded-full px-6 py-3 mb-6 lg:mb-8 shadow-2xl hover:scale-105 transition-transform duration-300">
  <svg 
    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-3 animate-bounce" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest">
    FSNL - KONOIKE INVITATIONAL
  </span>
</div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            Tennis Tournament{' '}
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-blue-200 mb-6 lg:mb-8">
            Baseline of Hope
          </h2>

          {/* Date and Location */}
  <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 mb-8 lg:mb-12 max-w-2xl mx-auto">
  {/* Date Card with Pulse Animation */}
  <div className="flex-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border-l-4 border-blue-400 rounded-r-xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    <div className="flex items-center space-x-3 relative z-10">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
        <svg 
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
          TOURNAMENT DATE
        </div>
        <div className="text-white font-bold text-xl group-hover:text-blue-100 transition-colors duration-300">
          20 - 21 DEC 2025
        </div>
      </div>
    </div>
  </div>
  
  {/* Venue Card with Bounce Animation */}
  <div className="flex-1 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border-l-4 border-green-400 rounded-r-xl p-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    <div className="flex items-center space-x-3 relative z-10">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 shadow-lg">
        <svg 
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="text-green-200 text-sm font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
          CHAMPIONSHIP VENUE
        </div>
        <div className="text-white font-bold text-xl group-hover:text-green-100 transition-colors duration-300">
          Bhilai Tennis Complex, Sector-7, Bhilai
        </div>
      </div>
    </div>
  </div>
</div>
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 lg:mb-12 px-4">
            Join the most prestigious amateur tennis tournament in Japan. 
            Showcase your skills, compete with the best, and experience 
            world-class facilities in this premier sporting event.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-12 lg:mb-16">
            <button className="group w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-2 lg:space-x-3">
              <i className="fas fa-user-plus group-hover:scale-110 transition-transform duration-300 text-sm lg:text-base"></i>
              <span className="text-sm lg:text-base">Register Now & Claim Your Spot</span>
            </button>
       
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4">
            {[
              { number: '64', label: 'Players' },
              { number: '¥500K', label: 'Prize Pool' },
              { number: '2', label: 'Days' },
              { number: '4', label: 'Courts' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-300 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-white/60 text-xl sm:text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <div className="bg-white">
        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About the Tournament
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                The 5th annual FSNL-Konoike Invitational brings together the finest amateur tennis talent 
                for a weekend of competitive excellence and sportsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: 'fas fa-trophy',
                  title: 'Prestigious Event',
                  description: 'Join the 5th annual tournament featuring top amateur talent from across Japan.'
                },
                {
                  icon: 'fas fa-users',
                  title: 'Community Focus',
                  description: 'Building connections and promoting tennis at the grassroots level.'
                },
                {
                  icon: 'fas fa-star',
                  title: 'Elite Facilities',
                  description: 'Play on professional-grade courts with official tournament equipment.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <i className={`${item.icon} text-white text-lg sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tournament Schedule
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Two days of intense competition and sportsmanship
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line - Hidden on mobile, visible on medium+ */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

              {/* Timeline Items */}
              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    date: 'December 20, 2025',
                    title: 'Day 1: Preliminary Rounds',
                    events: [
                      '8:00 AM - Registration & Warm-up',
                      '9:00 AM - Round of 64',
                      '1:00 PM - Round of 32',
                      '5:00 PM - Round of 16'
                    ]
                  },
                  {
                    date: 'December 21, 2025',
                    title: 'Day 2: Finals',
                    events: [
                      '9:00 AM - Quarter Finals',
                      '1:00 PM - Semi Finals',
                      '4:00 PM - Championship Match',
                      '6:00 PM - Awards Ceremony'
                    ]
                  }
                ].map((day, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot - Hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className="md:w-10/12 lg:w-5/12 mx-auto md:mx-0 md:float-left md:pr-8 md:text-right first:md:float-right first:md:pl-8 first:md:text-left">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">
                          {day.date}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                          {day.title}
                        </h4>
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                          {day.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="flex items-start space-x-2">
                              <i className="fas fa-circle text-blue-400 text-xs mt-1.5 flex-shrink-0"></i>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="clear-both"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Sponsors
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Proudly supported by industry leaders
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {['KONOIKE', 'FSNL', 'Tennis Pro', 'Sports Japan'].map((sponsor, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-xl">{sponsor.charAt(0)}</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{sponsor}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                Get in touch for more information about the tournament
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tournament Director</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-user text-blue-600"></i>
                    <span className="text-gray-700">John Smith</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone text-blue-600"></i>
                    <span className="text-gray-700">6266970108</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-blue-600"></i>
                    <span className="text-gray-700">info@fsnltennis.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6">
              {['fab fa-facebook', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube'].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <i className={`${icon} text-white text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 FSNL - KONOIKE Invitational Tennis Tournament. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;




































// components/Home.jsx


// import React from "react";
// import back from "../assets/foot2.jpg"; // Adjust path as needed
// import { Play, Trophy, Users, Zap, ArrowRight, Star,Shield } from "lucide-react";

// const Home = () => {
//   return (
//     <>
//       <section className="w-full min-h-screen relative">
//   <div 
//     className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden"
//     style={{
//       backgroundImage: `url(${back})`
//     }}
//   >
//     {/* Enhanced Multi-layer Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-black/90"></div>
    
//     {/* Animated Gradient Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 animate-pulse"></div>
    
//     {/* Subtle Pattern Overlay */}
//     <div 
//       className="absolute inset-0 opacity-10"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//       }}
//     ></div>

//     {/* Floating Particles Effect */}
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${15 + Math.random() * 10}s`
//           }}
//         ></div>
//       ))}
//     </div>

//     {/* Main Content Container */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 py-20">
      
//       {/* Premium Badge */}
//       <div className="mb-6 flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
//         <Trophy className="w-5 h-5 text-yellow-400" />
//         <span className="text-sm font-semibold uppercase tracking-widest text-white drop-shadow-md">
//           Season 2024 Championship
//         </span>
//         <Star className="w-4 h-4 text-yellow-400 fill-current" />
//       </div>

//       {/* Main Headline with Gradient Text */}
//       <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
//         <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
//           BATTLEGROUND
//         </span>
//         <br />
//         <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
//           BLITZ
//         </span>
//       </h1>

//       {/* Subtitle with Enhanced Styling */}
//       <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-200 font-light max-w-4xl drop-shadow-2xl leading-relaxed">
//         Enter the arena where legends are forged. Dominate the competition, 
//         <span className="text-blue-300 font-semibold"> showcase your skills</span>, and claim 
//         <span className="text-yellow-300 font-semibold"> eternal glory</span>.
//       </p>

//       {/* Stats Section */}
//       <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
//         {[
//           { icon: Users, number: "50K+", label: "Active Players" },
//           { icon: Trophy, number: "$500K", label: "Prize Pool" },
//           { icon: Zap, number: "24/7", label: "Live Matches" }
//         ].map((stat, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center mb-3 shadow-lg">
//               <stat.icon className="w-8 h-8 text-blue-400" />
//             </div>
//             <div className="text-2xl font-bold text-white drop-shadow-lg">{stat.number}</div>
//             <div className="text-sm text-gray-300 font-medium uppercase tracking-widest">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center">
//         {/* Primary CTA */}
//         <button className="group relative px-12 py-5 rounded-2xl text-lg font-bold text-white 
//           bg-gradient-to-r from-blue-600 to-purple-600 
//           hover:from-blue-700 hover:to-purple-700 
//           shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-purple-500/40
//           transition-all duration-300 ease-out transform hover:scale-105 
//           focus:outline-none focus:ring-4 focus:ring-blue-500/50
//           border border-white/20 overflow-hidden">
          
//           {/* Shine effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
//           <span className="flex items-center gap-3 relative z-10">
//             Register Now 
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </span>
//         </button>

//         {/* Secondary CTA */}
//         <button className="group flex items-center gap-3 px-8 py-5 rounded-2xl text-lg font-semibold 
//           text-white bg-white/10 backdrop-blur-lg border border-white/20 
//           hover:bg-white/20 hover:border-white/30 
//           transition-all duration-300 ease-out transform hover:scale-105 
//           shadow-lg hover:shadow-xl">
//           <Play className="w-5 h-5" />
//           Watch Trailer
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* Additional Sections for Better Scrolling Experience */}
  
//   {/* Features Section */}
//   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4">
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Why Choose <span className="text-blue-400">Battleground Blitz</span>?
//         </h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Experience the ultimate gaming platform with cutting-edge features designed for champions.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {[
//           {
//             icon: Trophy,
//             title: "Massive Prize Pools",
//             description: "Compete for life-changing rewards in our weekly tournaments with guaranteed prize money."
//           },
//           {
//             icon: Users,
//             title: "Global Community",
//             description: "Join thousands of players worldwide and make your mark in the esports arena."
//           },
//           {
//             icon: Zap,
//             title: "Instant Matchmaking",
//             description: "Get into action within seconds with our advanced matchmaking system."
//           },
//           {
//             icon: Star,
//             title: "Pro Ranking System",
//             description: "Climb the leaderboards and prove your skills against the best players."
//           },
//           {
//             icon: Play,
//             title: "Live Streaming",
//             description: "Stream your gameplay to millions of fans and build your personal brand."
//           },
//           {
//             icon: Shield,
//             title: "Fair Play Guaranteed",
//             description: "Advanced anti-cheat systems ensure a level playing field for all competitors."
//           }
//         ].map((feature, index) => (
//           <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
//             <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
//               <feature.icon className="w-8 h-8 text-blue-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
//             <p className="text-gray-300 leading-relaxed">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Tournament Schedule Section */}
//   <div className="min-h-screen bg-gradient-to-br from-blue-900/20 to-purple-900/20 py-20 px-4">
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Upcoming <span className="text-yellow-400">Tournaments</span>
//         </h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//           Don't miss your chance to compete in these epic battles. Register now and secure your spot!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {[
//           {
//             name: "Championship Finals",
//             prize: "$250,000",
//             date: "December 15, 2024",
//             participants: "512 Teams",
//             status: "Registration Open"
//           },
//           {
//             name: "Pro League Season 8",
//             prize: "$100,000",
//             date: "January 5, 2025",
//             participants: "256 Teams",
//             status: "Coming Soon"
//           },
//           {
//             name: "Weekly Showdown",
//             prize: "$25,000",
//             date: "Every Saturday",
//             participants: "128 Teams",
//             status: "Ongoing"
//           },
//           {
//             name: "Rookie Tournament",
//             prize: "$50,000",
//             date: "November 30, 2024",
//             participants: "1024 Teams",
//             status: "Registration Open"
//           }
//         ].map((tournament, index) => (
//           <div key={index} className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-2xl font-bold text-white">{tournament.name}</h3>
//               <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
//                 {tournament.status}
//               </span>
//             </div>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-gray-300">Prize Pool</span>
//                 <span className="text-yellow-400 font-bold text-lg">{tournament.prize}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-300">Date</span>
//                 <span className="text-white font-semibold">{tournament.date}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-300">Participants</span>
//                 <span className="text-blue-400 font-semibold">{tournament.participants}</span>
//               </div>
//             </div>
//             <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
//               Register Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* CSS for floating animation */}
//   <style jsx>{`
//     @keyframes float {
//       0%, 100% { transform: translateY(0) rotate(0deg); }
//       50% { transform: translateY(-20px) rotate(180deg); }
//     }
//     .animate-float {
//       animation: float linear infinite;
//     }
//   `}</style>
// </section>
//     </>
//   );
// };

// export default Home;