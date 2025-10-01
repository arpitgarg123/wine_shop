import React from 'react'
import { motion } from 'framer-motion'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'


const Page5 = () => {
  return (
    <div className="min-h-screen w-full  overflow-hidden relative flex items-center justify-center">
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-[#873942]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#873942]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Left Wine Bottle */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -15 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-0 sm:left-8 md:left-10  lg:left-16 bottom-10 transform -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <img 
              src={product2} 
              alt="Noble Hill Wine" 
              className="w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-60 lg:w-56 lg:h-72 xl:w-64 xl:h-80 2xl:w-72 2xl:h-88 object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Center Wine Bottle (Main) */}
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-48 transform  -translate-x-1/2 -translate-y-1/2 z-30"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <img 
              src={product1} 
              alt="Noble Hill Wine Center" 
              className="w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-68 lg:w-60 lg:h-76 xl:w-68 xl:h-84 2xl:w-76 2xl:h-92 object-contain relative z-10 drop-shadow-2xl filter brightness-110"
            />
          </motion.div>
        </motion.div>

        {/* Right Wine Bottle */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 15 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-4 sm:right-8 md:right-12 lg:right-20 bottom-32 transform -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="relative"
          >
            <img 
              src={product3} 
              alt="Noble Hill Wine" 
              className="w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-52 lg:w-52 lg:h-64 xl:w-60 xl:h-72 2xl:w-68 2xl:h-80 object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Main Typography */}
        <div className="text-center relative ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[7rem] font-regular text-[#873942] leading-none tracking-tight font-[ninna]"
              style={{
                textShadow: '4px 4px 12px rgba(135, 57, 66, 0.3)'
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="block mb-2 sm:mb-4 md:mb-6"
              >
                CRAFTED  
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="block mb-2 sm:mb-4 md:mb-6"
              >
               BY OUR
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="block"
              >
                WINEMAKERS
              </motion.span>
            </motion.h1>
          </motion.div>

      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 md:mt-16 lg:mt-20"
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-xl font-semibold text-[#873942]'>Discover Our Wines - Winestitute Winery</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base md:text-md lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
             At Winestitute, we take pride in showcasing wines that embody heritage, craftsmanship, and unforgettable flavor.
<br />
🥂 Award-Winning Quality-Recognized globally, Noble Hill wines have earned awards and praise from critics and wine enthusiasts for their depth, complexity, and outstanding value.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-5 sm:mt-8 md:mt-10"
          >
            <motion.button
              whileHover={{ scale: 1,}}
              whileTap={{ scale: 0.9 }}
              className="btn "
            >
              DISCOVER OUR COLLECTION
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Page5