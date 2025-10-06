import React from 'react'
import { motion } from 'framer-motion'
import noble2 from '../assets/noble2.jpg' // Using existing image

const Page4 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-start bg-[#F4F3F2]">
       {/* Right Image Section */}  
      <div className="relative w-full lg:w-[50%] overflow-hidden min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-screen">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          <img 
            src={noble2} 
            alt="Borgo San Felice Resort" 
            className="w-full h-full object-cover"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
       
        </motion.div>
      </div>
      {/* Left Content Section */}
      <div className="flex w-full lg:w-[50%] text-center flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 ">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8  md:mb-7 lg:mb-8"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[ninna] font-light text-[#873942] leading-none tracking-tight">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="block mb-2 sm:mb-3 md:mb-4"
            >
              From the very 
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="block"
            >
beginning            </motion.span>
           
          </h1>
        </motion.div>

        {/* Discover More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 md:mb-5 lg:mb-6 h-10"
        >
          <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
          >
            DISCOVER MORE
          </motion.button>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <p className="xs:text-xs  md:text-md lg:text-xl text-center text-gray-700 font-medium  sm:leading-7 md:leading-6">
Our vision was clear:* To make quality wines accessible, enjoyable, and meaningful.* Over the years, we’ve built strong partnerships with trusted vineyards and winemakers, ensuring that every bottle we offer reflects tradition, craftsmanship, and authenticity.          </p>
        </motion.div>
      </div>

    
    </div>
  )
}

export default Page4