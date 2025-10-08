import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'

const Products = () => {
  const navigate = useNavigate()

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`)
  }

  const products = [
    {
      id: 1,
      name: "BRUT Nature blanc de blanc",
      price: "€ 22,50",
      image: product1,
      description: "100% Chardonnay Award platinum, top 10, south africa wine index"
    },
    {
      id: 2,
      name: "sic transit gloria mundi",
      price: "€ 19,50",
      image: product2,
            description: "100% Chardonnay Award platinum, top 10, south africa wine index"

    },
    {
      id: 3,
      name: "estate reserve",
      price: "€ 52,00",
      image: product3,
            description: "100% Chardonnay Award platinum, top 10, south africa wine index"

    },
    {
      id: 4,
      name: "cabernet sauvignon",
      price: "€ 50,00",
      image: product1,
            description: "100% Chardonnay Award platinum, top 10, south africa wine index"

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
    <div className="h-fit w-full  py-12 sm:py-16 md:py-20 lg:py-24">
      
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
      

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group    border border-white/20"
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
                  className="text-sm sm:text-base uppercase font-medium leading-tight  flex items-center justify-center px-1"
                 
                >
                  {product.name}
                </motion.h3>
                <h4 className='font-light text-sm mt-1'>
{product.description}
                </h4>

              
               
              </div>
            </motion.div>
          ))}
        </motion.div>
        
 {/* Add to Cart Button */}
 <div className='flex justify-center mt-16'>
   <motion.button
                  onClick={() => handleProductClick(product.id)}
                
                  className="btn"
                >
                  discover more
                </motion.button>
 </div>
               
     
      </div>
    </div>
  )
}

export default Products