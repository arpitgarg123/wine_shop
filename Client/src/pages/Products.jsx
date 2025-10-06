import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import product1 from '../assets/product1.png'

const Products = () => {
  const navigate = useNavigate()

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`)
  }

  const products = [
    {
      id: 1,
      name: "BELCARO VINSANTO CHIANTI CLASSICO DOC",
      price: "€ 22,50",
      image: product1
    },
    {
      id: 2,
      name: "IL GRIGIO CHIANTI CLASSICO RISERVA DOCG",
      price: "€ 19,50",
      image: product1
    },
    {
      id: 3,
      name: "POGGIO ROSSO CHIANTI CLASSICO GRAN SELEZIONE DOCG",
      price: "€ 52,00",
      image: product1
    },
    {
      id: 4,
      name: "VIGORELLO ROSSO TOSCANA IGT",
      price: "€ 50,00",
      image: product1
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F8F5F2] to-[#F4F1EE] py-12 sm:py-16 md:py-20 lg:py-24">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#873942]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 right-16 w-80 h-80 bg-[#2F5233]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-1 sm:mb-1 md:mb-2 lg:mb-2"
        >
          <motion.h1
            className="text-4xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-[#873942] leading-none tracking-tight mb-2"
            style={{
              textShadow: '4px 4px 12px rgba(135, 57, 66, 0.3)'
            }}
          >
            OUR WINES
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 sm:w-68 md:w-82 h-1 bg-gradient-to-r from-[#873942] to-[#2F5233] mx-auto mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base md:text-md lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our carefully curated collection of premium wines, 
            each bottle telling a story of tradition, craftsmanship, and excellence.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 max-w-6xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group  rounded-xl sm:rounded-2xl p-4 sm:p-6  border border-white/20"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 bg-gradient-to-br from-[#F8F5F2] to-[#F4F1EE] h-52">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <motion.h3
                  className="text-sm sm:text-base md:text-lg lowercase font-[nexa]  mb-2 sm:mb-3 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-1"
                 
                >
                  {product.name}
                </motion.h3>

                <motion.div
                  className="text-lg sm:text-xl md:text-2xl font-bold text-[#2F5233] mb-4 sm:mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {product.price}
                </motion.div>

                {/* Add to Cart Button */}
                <motion.button
                  onClick={() => handleProductClick(product.id)}
                
                  className="btn"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </div>
  )
}

export default Products