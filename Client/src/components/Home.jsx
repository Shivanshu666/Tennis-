// components/Home.jsx
import back from "../assets/home3.jpg";
import sport from "../assets/logo2.jpeg";
import { useRef, useEffect, useState } from "react";
import fsnl from "../assets/partner/FSNL.jpeg";
import konoike from "../assets/partner/konoke.png";
import sail from "../assets/partner/sail.png";
import Kaado from "../assets/partner/Kaadoo.png";
import sportsmanshipIcon from "../assets/core/sport.jpeg";
import respectIcon from "../assets/core/sport.jpeg";
import integrityIcon from "../assets/core/sport.jpeg";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';
import gsap from "gsap";

// Gallery 
import gallery1 from "../assets/gallery/gallery1.jpeg"

const Home = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: gallery1, title: "Championship Match", category: "Finals", height: "h-64" },
    { src: gallery1, title: "Player Celebration", category: "Moments", height: "h-80" },
    { src: gallery1, title: "Award Ceremony", category: "Ceremony", height: "h-72" },
    { src: gallery1, title: "Intense Rally", category: "Action", height: "h-96" },
    { src: gallery1, title: "Young Talents", category: "Juniors", height: "h-60" },
    { src: gallery1, title: "Doubles Action", category: "Team Play", height: "h-84" },
    { src: gallery1, title: "Victory Pose", category: "Celebration", height: "h-76" },
    { src: gallery1, title: "Court Action", category: "Match", height: "h-68" }
  ];


  useEffect(() => {
    const sections = ['home', 'about', 'categories', 'schedule', 'sponsors', 'gallery' ,'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // 20% from top, 70% from bottom
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // console.log(`🎯 Section in view: ${sectionId}`);
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);
    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        // console.log(`👀 Observing section: ${sectionId}`);
        observer.observe(element);
      } else {
        // console.warn(`❌ Section not found: ${sectionId}`);
      }
    });

    // Cleanup
    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  ///
  const entryFeeRef = useRef(null);
  const cashPrizeRef = useRef(null);

  useEffect(() => {
    // Entry Fee floating animation
    gsap.to(entryFeeRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Cash Prize floating animation with delay
    gsap.to(cashPrizeRef.current, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5
    });

    // Additional rotation effects on hover
    const entryFeeElement = entryFeeRef.current;
    const cashPrizeElement = cashPrizeRef.current;

    const handleEntryFeeHover = () => {
      gsap.to(entryFeeElement, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleEntryFeeLeave = () => {
      gsap.to(entryFeeElement, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleCashPrizeHover = () => {
      gsap.to(cashPrizeElement, {
        scale: 1.08,
        rotation: -3,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleCashPrizeLeave = () => {
      gsap.to(cashPrizeElement, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    // Add event listeners
    if (entryFeeElement) {
      entryFeeElement.addEventListener('mouseenter', handleEntryFeeHover);
      entryFeeElement.addEventListener('mouseleave', handleEntryFeeLeave);
    }

    if (cashPrizeElement) {
      cashPrizeElement.addEventListener('mouseenter', handleCashPrizeHover);
      cashPrizeElement.addEventListener('mouseleave', handleCashPrizeLeave);
    }

    // Cleanup
    return () => {
      if (entryFeeElement) {
        entryFeeElement.removeEventListener('mouseenter', handleEntryFeeHover);
        entryFeeElement.removeEventListener('mouseleave', handleEntryFeeLeave);
      }
      if (cashPrizeElement) {
        cashPrizeElement.removeEventListener('mouseenter', handleCashPrizeHover);
        cashPrizeElement.removeEventListener('mouseleave', handleCashPrizeLeave);
      }
    };
  }, []);


  // schedule 

       const schedule = [
         {
      date: "FRIDAY 19 DECEMBER 2025",
      items: [
        { time: "15:00 - 17:00", event: "Distribution of participating T-shirt, Tournament Handbook" },
        { time: "17:30", event: "Pre-Event Press Conference" },
        { time: "18:30", event: "Draw Ceremony" },
      ],
    },
    {
      date: "SATURDAY 20 DECEMBER 2025",
      items: [
        { time: "06:30+", event: "Players Arrive" },
        {
          time: "07:00",
          event: "Welcome Announcement and National Anthem",
        },
        { time: "07:30", event: "First Match Commence" },
        {
          time: "10:00-10:30",
          event:
            "Snacks Available for Players & Coaches",
        },
        {
          time: "13:00-14:00",
          event:
            "Lunch Available for Players & Coaches (staggered as per coupons)",
        },
        { time: "17:00-17:30", event: "Evening Snacks For Players & Coaches" },
        {
          time: "20:00",
          event:
            "Day-1: Last Match/es Commence",
        },
      ],
    },
    {
      date: "SUNDAY 21 DECEMBER 2025",
      items: [
        { time: "06:30+", event: "Players arrive" },
        { time: "07:00", event: "First Match Commence" },
        {
          time: "10:00-10:30",
          event:
            "Snacks Available for Players & Coaches",
        },
        {
          time: "13:00-14:00",
          event:
            "Lunch Available for Players & Coaches (staggered as per coupons)",
        },
            {
          time: "14:30",
          event:
            "Final Match/es Commence",
        },
            {
          time: "16:00-17:00",
          event:
            "Master Class Tennis Clinic 'The Winning Mindset' by xxxxxxx",
        },
         {
          time: "17:00-17:30",
          event:
            "Hit Out & Rally Challenge",
        },
         {
          time: "17:40-18:00",
          event:
            "Networking & Dedicated Photo Session with xxxxxxxx",
        },
         {
          time: "18:00-18:30",
          event:
            "Fireside Chat",
        },
         {
          time: "18:45",
          event:
            "Awards Ceremony",
        },
      ],
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
 
     {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 shadow-2xl border-b border-gray-200/60">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo with Premium Styling */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="relative">
                <img
                  src={sport}
                  alt="FSNL Tennis Logo"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full border-2 border-blue-100 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FSNL-KONOIKE OPEN
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links with Improved Click Handling */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {['Home', 'About', 'Categories', 'Schedule', 'Sponsors', 'Gallery', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(e) => handleNavClick(e, sectionId)}
                    className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span className="text-lg tracking-wide relative z-10">
                      {item}
                    </span>
                    {/* Active Underline */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                      isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    {/* Active Dot */}
                    {isActive && (
                      <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-800 font-bold text-sm tracking-wide">9303537600</span>
                  <span className="text-blue-600 text-xs">Call Now</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu with Improved Click Handling */}
          <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}>
            <div className="space-y-1 px-4">
              {['Home', 'About', 'Categories', 'Schedule', 'Sponsors', 'Gallery', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(e) => handleNavClick(e, sectionId)}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-xl font-semibold transition-all duration-300 group ${
                      isActive
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r from-blue-50 to-purple-50'
                    }`}
                  >
                    {/* Active Dot */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-blue-500 scale-125' : 'bg-blue-500 opacity-0 group-hover:opacity-100'
                    }`}></div>
                    <span className="text-base flex-1">{item}</span>
                    {/* Active Checkmark */}
                    {isActive && (
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {/* Chevron for inactive items */}
                    {!isActive && (
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}

      <section id="home" className="relative min-h-screen flex items-center justify-center p-7 md:pt-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${back})`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]"></div>
        </div>

        {/* Floating Entry Fee Box - Desktop Only */}
        <div
          ref={entryFeeRef}
          className="hidden md:block absolute top-30 right-4 lg:right-8 z-20 cursor-pointer"
        >
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-yellow-300">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-bold text-lg sm:text-xl">₹100</span>
              </div>
              <div className="text-white text-xs font-semibold uppercase tracking-wide bg-black/20 rounded-full px-2 py-1 transition-colors">
                Entry Fee
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating Cash Prize Box - Desktop Only */}
        <div
          ref={cashPrizeRef}
          className="hidden md:block absolute top-42 left-4 lg:left-8 z-20 cursor-pointer"
        >
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-green-300">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-white font-bold text-lg sm:text-xl">1.5 LAKHS</span>
              </div>
              <div className="text-yellow-100 text-xs font-semibold uppercase tracking-wide">
                Cash Prize
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 lg:py-20">
          {/* Tournament Badge */}

          <div>TWO DAYS OF ONGOING TENNIS MATCHES AT BHILAI, CHHATTISGARH</div>  // high light karo 

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
              THE FSNL - KONOIKE INVITATIONAL Tennis Tournament  2025 <br /> <span className="mt-1">"Baseline of Hope"</span>
            </span>
          </div>

          {/* Date and Location */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 mb-8 lg:mb-12 max-w-2xl mx-auto">
            {/* Date Card */}
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

                <div className="flex-1">
                  <div className="text-green-200 text-sm font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                     VENUE
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
            Join the one of the biggest tennis tournament of bhilai.

          </p>
          {/* Action Buttons with Mobile Entry Fee Card */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-12 lg:mb-16">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Mobile Only Entry Fee Card - Register button ke upar */}
              <div className="md:hidden bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 shadow-lg border-2 border-yellow-300 animate-pulse">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-bold text-base">Only ₹100 Entry Fee</span>
                  </div>
                  <div className="text-yellow-100 text-xs font-semibold uppercase mt-1">
                    Register Now!
                  </div>
                </div>
              </div>

              <button className="group w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-2 lg:space-x-3">
                <i className="fas fa-user-plus group-hover:scale-110 transition-transform duration-300 text-sm lg:text-base"></i>
                <span className="text-sm lg:text-base">Register Now & Claim Your Spot</span>
              </button>
            </div>
          </div>


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
        <section id="about" className="py-20 md:py-24 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About the Tournament
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className=" rounded-2xl p-8 md:p-12 border-2 border-blue-100">
              <div className="space-y-8">
                {/* First Paragraph */}
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m4 6 8 4 8-4" />
                      <path d="m4 6 8 4 8-4" />
                      <path d="m20 12-8 4-8-4" />
                      <path d="m4 18 8 4 8-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      <span className=" text-gray-900">
                        The <span className="text-black font-bold">FSNL–KONOIKE Invitational Tennis Tournament 2025</span> is scheduled to take place on <span className="text-black font-bold">20–21 December 2025</span> , in partnership with the <span className="text-black font-bold">District Durg Bhilai Tennis Association – Smriti Nagar Tennis Academy, Bhilai.</span> 
                      </span>
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      <span className="font-semibold text-gray-900">
                        This tournament aims to showcase emerging talent, celebrate the culture of tennis in the region, and unite tennis communities under the powerful theme:
                      </span>
                    </p>
                    <p className="text-blue-700 font-semibold text-lg mb-4">"The Power of Sport to Fuel Social Development."</p>
                    <p className="text-gray-900 text-lg leading-relaxed mb-6">
                      FSNL–KONOIKE is proud to bring together <span className="text-black font-bold">tennis academies, tennis schools, and tennis clubs from across Chhattisgarh</span>, making this one of the largest academy- and club-based tennis tournaments in the region. The tournament provides players with an excellent platform to challenge themselves and compete in a high-quality, professionally organized environment.
                    </p>
                    <p className="text-gray-900 text-lg leading-relaxed mb-4">
                      Beyond competition, our vision is to ensure that <span className="text-black font-bold">every player, parent, and coach serves as an ambassador</span>  for their academy or club. Regardless of victory or defeat, we uphold the values of <span>respect, sportsmanship, and fair play</span>—qualities that define not just athletes, but responsible members of the community.
                    </p>
                  </div>
                </div>

                {/* Core Values Section */}
                <div className="mt-12">
                  <h3 className="text-3xl font-bold text-black text-center mb-8">Our Core Values</h3>
                  <p className="text-gray-00 text-lg leading-relaxed text-center mb-10">
                    This tournament is more than just competition — it is a celebration of <span className="text-black font-bold">Resilience, Leadership, Teamwork, and Sportsmanship.</span>  These values shape not only the athletes we become, but the people we aspire to be.
                  </p>

                  {/* Three Icon Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* First Value */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={sportsmanshipIcon}
                          alt="Sportsmanship Icon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Sportsmanship & Fair Play
                      </h4>
                      <p className="text-gray-700">
                        We strive to compete with integrity, humility, and respect for the spirit of the game.
                      </p>
                    </div>

                    {/* Second Value */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={respectIcon}
                          alt="Respect Icon"
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Respect
                      </h4>
                      <p className="text-gray-700">
                        Respect for oneself, opponents, officials and the game's legacy.
                      </p>
                    </div>

                    {/* Third Value */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={integrityIcon}
                          alt="Integrity Icon"
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Honesty & Integrity
                      </h4>
                      <p className="text-gray-700">
                        Do the right thing, even when no one’s watching. Always be honest and show integrity.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

                {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6 lg:gap-8">
              {/* Entry Fees */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Entry Fees</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">₹100</div>
                <p className="text-gray-600">Per Event</p>
                <div className="mt-3 text-xs text-blue-500 font-medium flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Affordable Participation
                </div>
              </div>

              {/* Registration Deadline */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Registration Deadline</h4>
                <div className="text-2xl font-bold text-green-600 mb-2">15th Dec 2025</div>
                <p className="text-gray-600 mb-3">Submit via Google Form or Direct Message</p>
                <div className="flex justify-center space-x-2 text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Google Form
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Direct Message
                  </span>
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Cash Prizes & Trophies</h4>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>Winner & Finalist</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3rd & 4th Place</span>
                  </div>
                </div>
           
              </div>
            </div>

<div className={`relative overflow-hidden rounded-2xl mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-300 rounded-full blur-lg opacity-25"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-200 rounded-full opacity-40 animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 
        rounded-2xl p-6 sm:p-8 text-center 
        shadow-2xl scale-[1.02] shadow-3xl
        relative overflow-hidden
        border-2 border-yellow-300
        animate-pulse
      ">
        
       
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent -skew-x-12 animate-shine"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          
         
          <div className="relative">
            <div className="bg-yellow-300/20 rounded-full p-4 sm:p-5 backdrop-blur-sm border-2 border-yellow-300/50 shadow-lg animate-bounce">
              <div className="text-white text-3xl sm:text-4xl scale-110">
                🏆
              </div>
            </div>
            
            <div className="absolute -top-2 -right-2 animate-spin">✨</div>
            <div className="absolute -bottom-2 -left-2 animate-ping">⭐</div>
          </div>

 
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
              <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                CASH PRIZE UPTO{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 animate-pulse text-yellow-100">1.5 LAKHS</span>
                  <span className="absolute inset-0 bg-yellow-300/30 blur-lg rounded-lg"></span>
                </span>
              </span>
            </h3>
            
            <div className="space-y-2">
              <p className="text-yellow-100 text-lg sm:text-xl font-semibold leading-relaxed">
                <span className="bg-yellow-500/20 px-3 py-2 rounded-lg backdrop-blur-sm inline-block scale-105 border border-yellow-300/30">
                  🎁 Plus Gifts • 👕 Participation T-shirt • 🧢 Cap
                </span>
              </p>
              <p className="text-yellow-100 text-lg sm:text-xl font-semibold leading-relaxed">
                <span className="bg-yellow-500/20 px-3 py-2 rounded-lg backdrop-blur-sm inline-block scale-105 border border-yellow-300/30">
                  🏆 Trophies & 📜 Certificates for all participants
                </span>
              </p>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4">
              <button className="
                bg-yellow-100 text-yellow-700 px-8 py-3 rounded-full 
                font-bold text-lg shadow-2xl
                scale-110
                border-2 border-yellow-300
                relative overflow-hidden
                animate-pulse
              ">
                <span className="flex items-center space-x-2 relative z-10">
                  <span className="scale-125">🎯</span>
                  <span>Register Now!</span>
                </span>
        
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent -skew-x-12 animate-shine"></div>
              </button>
            </div> */}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-100 scale-x-100"></div>
      </div>

      {/* Floating Confetti */}
      <>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-yellow-200 rounded-sm opacity-60 animate-bounce`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${10 + (i % 2) * 80}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          ></div>
        ))}
      </>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
            </div>

          
          </div>
        </section>


        {/* Categories Section */}
        <section id="categories" className="py-18  min-h-screen md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tournament Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Compete across multiple age groups and skill levels
              </p>
            </div>



            {/* Categories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {/* Red Series */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-red-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Tiny Todds (Red Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-child text-red-500 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 8</span>
                </div>
                <p className="text-gray-600 mb-4">Boys & Girls Combined Draw</p>
              </div>

              {/* Orange Series */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-orange-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Next Generation (Orange Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-running text-orange-500 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 10</span>
                </div>
                <p className="text-gray-600 mb-4">Boys & Girls Combined Draw</p>
              </div>

              {/* Green Series */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Green Arrows (Green Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-bullseye text-green-500 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 12</span>
                </div>
                <p className="text-gray-600 mb-4">Separate draws for Boys Singles & Girls Singles</p>
              </div>

              {/* Yellow Series - Junior Performance */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Junior Performance (Yellow Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-chart-line text-yellow-500 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 14</span>
                </div>
                <p className="text-gray-600 mb-4">Separate draws for Boys Singles & Girls Singles</p>
              </div>

              {/* Yellow Series - Elite */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-yellow-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-yellow-600 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Elite (Yellow Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-crown text-yellow-600 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 16</span>
                </div>
                <p className="text-gray-600 mb-4">Separate draws for Boys Singles & Girls Singles</p>
              </div>

              {/* Yellow Series - Challengers */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-yellow-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-yellow-700 rounded-full"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Challengers (Yellow Series)</h3>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fas fa-fire text-yellow-700 text-lg"></i>
                  <span className="text-lg font-semibold text-gray-700">Under 18</span>
                </div>
                <p className="text-gray-600 mb-4">Separate draws for Boys Singles & Girls Singles</p>
              </div>
            </div>


          </div>

          {/* Prize Pool Banner */}

        </section>

        {/* // Schedule section  */}

         <section
      id="schedule"
      className="py-18 min-h-screen md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Tournament Schedule
          </h1>

          {schedule.map((day, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                {day.date}
              </h2>

              <div className="space-y-3">
                {day.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start bg-gray-50 p-4 rounded-xl shadow-sm"
                  >
                    <span className="font-semibold w-32">{item.time}</span>
                    <span className="w-full pl-4 text-gray-700">
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


        {/* Sponsors Section */}
       <section id="sponsors" className="py-20 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-gray-900 mb-4">
        <span className="text-5xl mt-9">Our Sponsors</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 px-4">

      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
      {[
        { name: 'KONOIKE', logo: konoike, link: 'https://www.konoike.co.jp/english/' },
        { name: 'FSNL', logo: fsnl, link: 'https://www.fsnl.co.in/' },
        { name: 'BSP', logo: sail, link: 'https://sail.co.in/' },
        { name: 'DDBTA', link: '#' },
        { name: 'KAADO', logo: Kaado, link: '#' }
      ].map((sponsor, index) => (
        <a
          key={index}
          href={sponsor.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {sponsor.logo && (
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              {sponsor.name}
            </div>
          </div>
        </a>
      ))}
    </div>

  </div>
</section>


  {/* Gallery Section */}
  <section id="gallery" className="max-w-[1400px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tournament <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Capturing the intensity, passion, and glory of every match
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <i className="fas fa-expand text-white text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-blue-300 transition-colors duration-200"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-blue-300 transition-colors duration-200 z-10"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <span className="text-blue-300 font-semibold">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}



        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-16 lg:py-20 bg-gray-50">
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

                <div className="grid grid-cols-1 gap-4">
                  {/* Rachna Sharma */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Rachna Sharma</p>
                        <p className="font-medium text-gray-900">DDBTA-Smriti Nagar Tennis Academy, Bhilai</p>

                        <p className="text-sm text-gray-600">9303537600</p>
                      </div>
                    </div>
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
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Tournament Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img
                  src={sport}
                  alt="FSNL Tennis Logo"
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-400"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FSNL Tennis
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Professional Tennis Tournaments bringing together the finest amateur talent for competitive excellence.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bhilai Tennis Complex, Sector-7, Bhilai</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Categories', 'Sponsors', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>6266970108</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@fsnltennis.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Media Icons with Lucide */}
              <div className="flex justify-center space-x-4">
                {[
                  {
                    icon: <Facebook className="w-5 h-5" />,
                    color: 'hover:bg-blue-600',
                    label: 'Facebook'
                  },
                  {
                    icon: <Twitter className="w-5 h-5" />,
                    color: 'hover:bg-blue-400',
                    label: 'Twitter'
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    color: 'hover:bg-pink-600',
                    label: 'Instagram'
                  },
                  {
                    icon: <Youtube className="w-5 h-5" />,
                    color: 'hover:bg-red-600',
                    label: 'YouTube'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by FSNL Tennis
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  © 2025 FSNL - KONOIKE Invitational Tennis Tournament
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Organized by DDBTA – Smriti Nagar Tennis Academy, Bhilai
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
