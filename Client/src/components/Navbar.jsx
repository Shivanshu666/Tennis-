// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import sport from "../assets/logo2.jpeg";
import { Menu, X, ChevronDown, User, LogIn, UserPlus, Star } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // State management for various navbar behaviors
  const [open, setOpen] = useState(false); // Mobile menu open/close state
  const [scrolled, setScrolled] = useState(false); // Track if page is scrolled
  const [userDropdown, setUserDropdown] = useState(false); // User menu dropdown state
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const location = useLocation(); // Get current route location
  const navigate = useNavigate(); // Programmatic navigation

  // Mock user state - replace with your actual auth state
  const [user, setUser] = useState(null);

  // Navigation links array
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll effects - handles navbar behavior on page scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background effect - add background when scrolled past 10px
      const isScrolled = currentScrollY > 10;
      setScrolled(isScrolled);

      // Hide/show navbar on scroll - hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Set navbar height as CSS variable for other components to use
  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-height', '70px'); // Reduced from 80px to 70px
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setUserDropdown(false);
  }, [location]);

  // Handle demo login functionality
  const handleDemoLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
    setUserDropdown(false);
  };

  // Handle logout functionality
  const handleLogout = () => {
    setUser(null);
    setUserDropdown(false);
    navigate("/");
  };

  return (
    // Main navbar container with fixed positioning and smooth transitions
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full" // Hide/show animation
      }`}
    >
      {/* Glassmorphism Background - main visual layer */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-2xl shadow-2xl shadow-black/5" 
            : "bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl"
        } border-b ${
          scrolled ? "border-white/30" : "border-white/20" // Border intensity changes on scroll
        }`}
        style={{
          WebkitBackdropFilter: 'blur(20px)', // Safari support
          backdropFilter: 'blur(20px)' // Modern browsers
        }}
      />
      
      {/* Animated Glass Layers - secondary visual layer for depth */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          scrolled ? 'opacity-100' : 'opacity-70'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(120, 119, 198, 0.1) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(99, 102, 241, 0.1) 100%)',
          WebkitBackdropFilter: 'blur(10px)',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      {/* Subtle Grain Texture - adds premium texture effect */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content container with reduced padding for smaller height */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className="relative">
         
            {/* Logo container with glass morphism */}
        <div className="relative p-1 shadow-2xl">
  <img
    src={sport}
    alt="logo"
    className="w-12 h-12 rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
  />
</div>

          </div>
          {/* Logo text with gradient effect */}
          <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
          FSNL - KONOIKE OPEN
          </span>
        </Link>
    
        {/* User Actions - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            // User is logged in - show user dropdown
            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/15 hover:bg-white/25 transition-all duration-300 border border-white/30 backdrop-blur-xl hover:backdrop-blur-2xl shadow-lg hover:shadow-xl"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-white to-blue-200 rounded-full flex items-center justify-center shadow-inner">
                  <User className="w-3 h-3 text-blue-700" />
                </div>
                <span className="text-white font-medium text-sm">John</span>
                <ChevronDown className={`w-3 h-3 text-white/80 transition-transform duration-300 ${userDropdown ? "rotate-180" : ""}`} />
              </button>

           
            </div>
          ) : (
            // User is not logged in - show auth buttons
            <div className="flex items-center gap-2">
              
              <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-br from-white to-blue-100 text-blue-700 font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border border-white/40">
                <Star className="w-4 h-4" />
                6266970108
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button - only visible on mobile */}
        <button
          className="md:hidden p-2 rounded-2xl text-white/90 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20 shadow-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - slides down when opened */}
      <div 
        className={`md:hidden relative z-20 border-t border-white/30 transition-all duration-500 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 100%)',
          WebkitBackdropFilter: 'blur(25px)',
          backdropFilter: 'blur(25px)',
          borderTop: '1px solid rgba(255,255,255,0.3)'
        }}
      >
        <div className="p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-base font-medium py-2 px-3 rounded-2xl transition-all duration-300 backdrop-blur-lg border ${
                location.pathname === link.path
                  ? "text-white bg-white/25 border-white/40 shadow-lg"
                  : "text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border-white/25"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="pt-3 border-t border-white/30 space-y-2">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-white to-blue-200 rounded-full flex items-center justify-center shadow-inner">
                    <User className="w-4 h-4 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">John Doe</p>
                    <p className="text-xs text-white/70">john@example.com</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-red-300 font-medium rounded-2xl hover:bg-red-500/20 transition-all duration-300 backdrop-blur-lg border border-white/20"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleDemoLogin}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-white/90 font-medium rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/30 backdrop-blur-lg"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-br from-white to-blue-100 text-blue-700 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 backdrop-blur-lg border border-white/40">
                  <UserPlus className="w-4 h-4" />
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;