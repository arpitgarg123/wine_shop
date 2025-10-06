import React from "react";
import { motion } from "framer-motion";
// import img from "../../assets/slider-3.jpg";
import img from "../../assets/image.png";

const HeroText = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full z-10 pt-16 sm:pt-20 md:pt-24">
      
      <div className="relative flex flex-col items-center justify-center leading-tight gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 pointer-events-none max-w-7xl w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-2xl max-md:text-6xl max-sm:text-[3rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl  font-[nexa] text-white  drop-shadow-2xl leading-none"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.5)'
        }}
      >
        ELEGANT 
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="text-3xl xs:text-4xl max-md:text-6xl max-sm:text-[3rem]  sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-7xl  font-[nexa] text-white drop-shadow-2xl leading-none"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.5)'
        }}
      >
        WINE
      </motion.h1>


      {/* Supporting Text */}
      <motion.div
        initial={{ opacity: 0, y:20, }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 1.2, delay: 2.1 }}
        className="max-w-[280px] max-md:w-[60vw] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl px-3 xs:px-4 sm:px-6 max-md:px-0 md:px-8 py-2 xs:py-3 sm:py-4"
      >
        <p className="text-xs xs:text-sm max-md:text-lg max-sm:text-sm  sm:text-base md:text-lg lg:text-xl xl:text-lg font-[bembo] leading-relaxed text-white text-center"
           style={{
             textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
           }}>
          Celebrate the art of fine wine. From vineyards to your glass,
          discover a journey of taste, tradition, and timeless elegance.
        </p>
      </motion.div>

      {/* Bottom Big Word */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 2.4 }}
        className=" text-2xl xs:text-3xl max-md:text-6xl max-sm:text-[3rem]  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-light font-[nexa] text-white drop-shadow-2xl leading-none"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 20px rgba(0,0,0,0.5)'
        }}
      >
        HERITAGE
      </motion.h1>
    </div>
            {/* <img className='w-[60%] h-[45vh] object-cover ' src={img} alt="" /> */}

    </div>
  );
};

export default HeroText;
