import React from 'react'
import { motion } from 'framer-motion'
import Navtop from '../components/navbar/Navtop'
import HeroText from '../components/heroPage/HeroText'
import heroImg from '../assets/hero.jpg'


const Hero = () => {
  return (
    <div className='hero-container relative overflow-hidden'>
      <div className='absolute inset-0'>
        <Navtop />
      </div>
      
      <div className='flex h-screen w-full items-center flex-col justify-center relative px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24'>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '95%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='w-full max-w-6xl h-[50vh] xs:h-[55vh] max-sm:h-[80vh] sm:h-[80vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[35vw] flex justify-center relative'
        >
          <img 
            src={heroImg} 
            alt="Hero" 
            className='w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-2xl' 
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px] rounded-xl sm:rounded-2xl"></div>
        </motion.div>
        
        <HeroText />
      </div>
    </div>
  )
}

export default Hero