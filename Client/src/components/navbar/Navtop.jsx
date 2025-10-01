import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import lightLogo from "../../assets/lightLogo.png";
import burgundy from "../../assets/burgundy.png";
import darkLogo from "../../assets/darkLogo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinksLeft = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
];

const navLinksRight = [
  { name: "Wine Shop Marketplace", href: "/wins" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const NavItem = ({ name, href, mobile = false, onClick }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <a
        href={href}
        onClick={onClick}
        className={`font-medium transition-colors duration-200 rounded whitespace-nowrap ${
          mobile 
            ? "block px-4 py-3 text-lg text-white hover:text-[#8B2C34] hover:bg-white/10" 
            : "px-2 sm:px-3 py-1 sm:py-2 text-[#8B2C34] hover:text-black"
        }`}
      >
        {name}
      </a>
    </motion.div>
  );
};

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#8B2C34] block"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#8B2C34] block"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-[#8B2C34] block"
      />
    </button>
  );
};

const Navtop = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const navWrapper = `fixed top-0 inset-x-0 z-50 transition-transform duration-300 ease-out ${
    isHidden ? "-translate-y-24" : "translate-y-0"
  }`;

  const navSurface = "bg-[#F4F3F2] backdrop-blur border-b border-gray-200";
  return (
    <>
      <nav className={navWrapper} role="navigation" aria-label="Main navigation">
        <div className={`mx-auto w-full py-4 md:py-6 flex items-center justify-between px-4 sm:px-6 lg:px-8 ${navSurface}`}>
          {/* Left links - Hidden on mobile */}
          <div className="hidden lg:flex gap-2 xl:gap-4">
            {navLinksLeft.map((link, idx) => (
              <NavItem key={idx} {...link} />
            ))}
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <HamburgerIcon isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <img src={burgundy} alt="Logo" className="h-8 sm:h-10" />
          </motion.div>

          {/* Right links - Desktop only */}
          <div className="hidden lg:flex gap-2 xl:gap-4">
            {navLinksRight.map((link, idx) => (
              <NavItem key={idx} {...link} />
            ))}
          </div>

          {/* Mobile menu spacer */}
          <div className="lg:hidden w-8"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#8B2C34] to-[#6B1E23] z-50 lg:hidden"
      >
        <div className="flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <img src={burgundy} alt="Logo" className="h-8 filter brightness-0 invert" />
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-4 py-6 space-y-2">
            {navLinksLeft.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <NavItem {...link} mobile onClick={toggleMobileMenu} />
              </motion.div>
            ))}
            
            {navLinksRight.map((link, idx) => (
              <motion.div
                key={idx + navLinksLeft.length}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: (idx + navLinksLeft.length) * 0.1 }}
              >
                <NavItem {...link} mobile onClick={toggleMobileMenu} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navtop;
