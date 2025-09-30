import React from "react";
import { motion } from "framer-motion";
// import img from "../../assets/slider-3.jpg";
import img from "../../assets/image.png";

const HeroText = () => {
  return (
    <div className=" flex flex-col h-screen items-center justify-end w-full ">
    <div className="absolute top-44 left-1/3 flex flex-col  items-center justify-center leading-tight gap-4    text-center text-[#fef8ef] px-6 pointer-events-none">
      {/* Top Big Word */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-8xl mb-2  text-shadow-lg font-light font-[ninna]  "
      >
        ELEGANT 
      </motion.h1>

      {/* Middle Big Word */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-7xl  text-shadow-lg font-light font-[ninna]  "
      >
        WINE
      </motion.h1>


      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y:20, }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 1.2 }}
        className="max-w-lg px-5   md:text-lg font-semibold leading-relaxed"
      >
        Celebrate the art of fine wine. From vineyards to your glass,
        discover a journey of taste, tradition, and timeless elegance.
      </motion.p>

      {/* Bottom Big Word */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="mt-8 text-6xl md:text-7xl  text-shadow-lg  font-light font-[ninna]  "
      >
        HERITAGE
      </motion.h1>
    </div>
            {/* <img className='w-[60%] h-[45vh] object-cover ' src={img} alt="" /> */}

    </div>
  );
};

export default HeroText;
