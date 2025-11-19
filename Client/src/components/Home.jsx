// components/Home.jsx
import React from "react";
import back from "../assets/t2.jpg";
import sport from "../assets/logo2.jpeg";
import { useRef,useEffect,useState } from "react";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';
import gsap from "gsap";

const Home = () => {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const sections = ['home', 'about', 'categories', 'sponsors', 'contact'];
  
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
     <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 shadow-2xl border-b border-gray-200/60">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FSNL Tennis
          </span>
          <span className="text-xs text-gray-500 -mt-1 hidden sm:block font-medium">
            Professional Tournaments
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links with Active State */}
      <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
        {['Home',  'Categories', 'About', 'Sponsors', 'Contact'].map((item) => {
          const sectionId = item.toLowerCase();
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={item}
              href={`#${sectionId}`}
              className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span className="text-sm xl:text-base tracking-wide relative z-10">
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
            <span className="text-blue-800 font-bold text-sm tracking-wide">6266970108</span>
            <span className="text-blue-600 text-xs">Call Now</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button with Hamburger Icon */}
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

    {/* Mobile Navigation Menu with Active States */}
    <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 transition-all duration-500 ease-in-out overflow-hidden ${
      isMobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
    }`}>
      <div className="space-y-1 px-4">
        {['Home', 'About', 'Categories', 'Sponsors', 'Contact'].map((item) => {
          const sectionId = item.toLowerCase();
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={item}
              href={`#${sectionId}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center space-x-3 py-3 px-4 rounded-xl font-semibold transition-all duration-300 group ${
                isActive
                  ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r from-blue-50 to-purple-50'
              }`}
            >
              {/* Active Dot */}
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-blue-500 opacity-0 group-hover:opacity-100'
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
        </div>
      </div>
      
      {/* Venue Card */}
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
            Join the most prestigious amateur tennis tournament in Bhilai. 
            Showcase your skills, compete with the best, and experience 
            world-class facilities in this premier sporting event.
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

                {/* Categories Section */}
<section id="categories" className="py-18  min-h-screen md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Tournament Categories
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        Compete across multiple age groups and skill levels with separate draws for boys and girls
      </p>
    </div>

    {/* Prize Pool Banner */}
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 text-center mb-12 lg:mb-16 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="bg-white/20 rounded-full p-3 sm:p-4 backdrop-blur-sm">
          <i className="fas fa-trophy text-white text-2xl sm:text-3xl"></i>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            CASH PRIZE UPTO 1.5 LAKHS
          </h3>
          <p className="text-yellow-100 text-lg sm:text-xl font-semibold">
            Plus Gifts, T-shirt, Cap & Certificates for all participants
          </p>
        </div>
      </div>
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
        <p className="text-gray-600 mb-4">Boys & Girls combined category for our youngest champions</p>
        <div className="bg-red-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-red-700">
            <i className="fas fa-tennis-ball text-red-500"></i>
            <span className="font-medium">Red Ball Series - Perfect for beginners</span>
          </div>
        </div>
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
        <p className="text-gray-600 mb-4">Boys & Girls developing their skills in competitive environment</p>
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-orange-700">
            <i className="fas fa-tennis-ball text-orange-500"></i>
            <span className="font-medium">Orange Ball Series - Intermediate level</span>
          </div>
        </div>
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
        <div className="bg-green-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-green-700">
            <i className="fas fa-tennis-ball text-green-500"></i>
            <span className="font-medium">Green Ball Series - Advanced junior level</span>
          </div>
        </div>
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
        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-yellow-700">
            <i className="fas fa-tennis-ball text-yellow-500"></i>
            <span className="font-medium">Yellow Ball Series - Standard competition balls</span>
          </div>
        </div>
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
        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-yellow-700">
            <i className="fas fa-medal text-yellow-600"></i>
            <span className="font-medium">Top-tier junior competition</span>
          </div>
        </div>
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
        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-yellow-700">
            <i className="fas fa-star text-yellow-700"></i>
            <span className="font-medium">Elite senior junior category</span>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Information */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
    <h4 className="text-xl font-bold text-gray-900 mb-2">Awards & Trophies</h4>
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
    <div className="bg-purple-50 rounded-lg p-3 mt-3">
      <p className="text-sm text-purple-700 font-medium flex items-center justify-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        Gifts, T-shirt, Cap & Certificates for all
      </p>
    </div>
  </div>
</div>
  </div>
</section>
        {/* About Section */}
        <section id="about" className="py-20 md:py-16 lg:py-20">
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




        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 md:py-16 lg:py-20">
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
  <h3 className="text-xl font-bold text-gray-900 mb-4">Tournament Directors</h3>
  
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
          <p className="text-sm text-gray-600">9303537600</p>
        </div>
      </div>
    </div>

    {/* Rajesh Patil */}
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="font-medium text-gray-900">Rajesh Patil</p>
          <p className="text-sm text-gray-600">9893166755</p>
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
