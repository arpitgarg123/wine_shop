import React from 'react'
import { motion } from 'framer-motion'
import Navtop from '../components/navbar/Navtop'
import HeroText from '../components/heroPage/HeroText'
import heroImg from '../assets/hero1.jpg'


const Hero = () => {
  return (
    <div className='hero-container relative flex flex-col items-center justify-end overflow-hidden'>
      <div className='absolute inset-0'>
        <Navtop />
      </div>
      
      <div className='flex h-screen w-full items-center flex-col justify-center relative mt-10 '>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='w-full  h-[50vh] xs:h-[55vh] max-sm:h-[80vh] sm:h-[80vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[42vw] flex justify-center relative'
        >
          <img 
            src={heroImg} 
            alt="Hero" 
            className='w-full h-full object-cover ' 
          />
          <div className="absolute inset-0 bg-black/30 "></div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Hero