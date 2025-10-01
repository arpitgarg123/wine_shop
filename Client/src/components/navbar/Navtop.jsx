import React, { useEffect, useMemo, useState } from "react";
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

const NavItem = ({ name, href,navTextColor  }) => {

  
  return (
    <motion.div
      className="relative group z-50" // Added z-50 here
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <a
        href={href}
       className={`px-2 py-1 font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#722F37] rounded ${navTextColor} group-hover:text-[#722F37]`}
      >
        {name}
      </a>

     
    </motion.div>
  );
};

const Navtop = () => {
    const location = useLocation();
     const isHeroPage = location.pathname === '/';
 const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    // const [showUserMenu, setShowUserMenu] = useState(false);
  // const isNavActive = Boolean(hovered);
  //  const [hovered, setHovered] = useState(null);
  const [hovered, setHovered] = useState(null);
  // const [showUserMenu, setShowUserMenu] = useState(false);
  // const isNavActive = Boolean(hovered);
  const [lastScrollY, setLastScrollY] = useState(0);
 

  // Mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

    useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);


  const navTextColor = useMemo(
    () => (isHeroPage && !scrolled ? "text-white" : "text-black"),
    [isHeroPage, scrolled]
  );
 const navbarClass = `navbar hidden md:block mt-6  transition-transform duration-300 ease-out ${
    isHidden ? '-translate-y-48' : 'translate-y-0'
  } ${navTextColor} ${scrolled || !isHeroPage  ? 'bg-white' : 'bg-transparent'}
  } ${isHeroPage ? 'bg-transparent' : 'bg-white'}`;

   const navWrapper =
    `fixed top-0 inset-x-0 z-50 border-b border-gray-500 transition-transform duration-300 ease-out ` +
    `${isHidden ? "-translate-y-24" : "translate-y-0"}`;

  const navSurface =
    (scrolled || !isHeroPage)
      ? "bg-white/90 backdrop-blur  supports-[backdrop-filter]:backdrop-blur border-b border-black/5"
      : "bg-transparent";
  return (
    <nav   className={navWrapper} role="navigation" aria-label="Main navigation">
          <div className={`mx-auto w-full py-7 flex items-center justify-between px-4 sm:px-6 lg:px-8 ${navSurface}`}>
      {/* Left links */}
      <div className="flex gap-6 px-8  ">
        {navLinksLeft.map((link, idx) => (
          <NavItem key={idx} {...link} navTextColor={navTextColor} />
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
       className="ml-20"
       
      >
        <img src={lightLogo} alt="Logo" className="h-10 mix-blend-difference" />
        {/* <img src={burgundy} alt="Logo" className="h-10 ml-52 " /> */}
        {/* <img src={darkLogo} alt="Logo" className="h-10 ml-52 " /> */}
      </motion.div>

      {/* Right links */}
      <div className="flex gap-6 px-4 ">
        {navLinksRight.map((link, idx) => (
          <NavItem key={idx} {...link} navTextColor={navTextColor} />
        ))}
      </div>
      </div>
    </nav>
  );
};

export default Navtop;
