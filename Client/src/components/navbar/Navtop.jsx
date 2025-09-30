import React from "react";
import { motion } from "framer-motion";
import lightLogo from "../../assets/lightLogo.png";
import burgundy from "../../assets/burgundy.png";
import darkLogo from "../../assets/darkLogo.png";

const navLinksLeft = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
];

const navLinksRight = [
  { name: "Wine Shop Marketplace", href: "/wins" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const NavItem = ({ name, href }) => {
  return (
    <motion.div
      className="relative group z-50" // Added z-50 here
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <a
        href={href}
        className="px-2 py-1 text-[#f0f0f0] hover:text-[#722F37] font-semibold transition-colors duration-300"
      >
        {name}
      </a>

     
    </motion.div>
  );
};

const Navtop = () => {
  return (
    <div className="flex items-center w-full  fixed top-0 left-0 px-12  justify-between h-20 border-b  border-[#8b8b8b] ">
      {/* Left links */}
      <div className="flex gap-6 px-8  ">
        {navLinksLeft.map((link, idx) => (
          <NavItem key={idx} {...link} />
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
       className="ml-20"
       
      >
        <img src={lightLogo} alt="Logo" className="h-10" />
        {/* <img src={burgundy} alt="Logo" className="h-10 ml-52 " /> */}
        {/* <img src={darkLogo} alt="Logo" className="h-10 ml-52 " /> */}
      </motion.div>

      {/* Right links */}
      <div className="flex gap-6 px-4 ">
        {navLinksRight.map((link, idx) => (
          <NavItem key={idx} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Navtop;
