import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { IoChevronBack, IoChevronForward, IoStar, IoStarOutline, IoHeart, IoHeartOutline, IoCart, IoArrowBack } from 'react-icons/io5'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  // Sample product data
  const product = {
    name: "Noble Hill Mourvèdre Rosé 2025",
    price: "₦17,400",
    originalPrice: "₦20,000",
    rating: 4.8,
    reviews: 127,
    availability: "In Stock",
    description: "Mourvèdre comes from the Mediterranean coastline, and it's well-suited to our Mediterranean climate on the slopes of the Simonsberg. Its vigorous growth and hardy stature make it an excellent candidate for goblet pruning, and the largest goblet-pruned vineyard on our estate is planted to Mourvèdre.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=800&fit=crop&crop=center", 
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop&crop=center"
    ],
    features: [
      "Vintage: 2025",
      "Region: Mediterranean Coast",
      "Alcohol: 13.5%",
      "Grape: Mourvèdre",
      "Style: Rosé Wine"
    ]
  }

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
    hidden: { y: 30, opacity: 0 },
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F8F5F2] to-[#F4F1EE] py-8 sm:py-12 md:py-16 lg:py-20">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-16 w-96 h-96 bg-[#873942]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-[#2F5233]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Back Button & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 md:mb-10 flex items-center justify-between"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2  hover:text-[#2F5233] transition-colors duration-200"
          >
            <IoArrowBack className="w-5 h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </button>
          
        
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20"
        >
          
          {/* Product Images Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            
            {/* Main Product Image */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/40 backdrop-blur-sm shadow-xl border border-white/20">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 sm:h-[400px] md:h-[350px] lg:h-[450px] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image Navigation Arrows */}
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6 text-[#873942]" />
              </button>
              
              <button
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6 text-[#873942]" />
              </button>
            </div>

            {/* Image Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-[#873942] shadow-lg' 
                      : 'hover:ring-2 hover:ring-[#2F5233] opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Information Section */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            
            {/* Product Title & Rating */}
            <div>
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[ninna] text-[#873942] leading-tight mb-2"
                
              >
                {product.name}
              </motion.h1>
              
             
              
              <div className="text-sm sm:text-base font-medium">
                Availability: <span className="text-[#2F5233] ">{product.availability}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#873942]">
                {product.price}
              </span>
              <span className="text-xl sm:text-2xl text-gray-500 line-through">
                {product.originalPrice}
              </span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                13% OFF
              </span>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-lg sm:text-xl font-[ninna] text-[#873942] mb-3">
                Description
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

         

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-base sm:text-lg font-medium text-[#873942]">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn"
                >
                  <IoCart size={25} />
                  <span>Add to Cart</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 text-[#873942] py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  {isFavorite ? (
                    <IoHeart className="w-6 h-6 text-red-500" />
                  ) : (
                    <IoHeartOutline className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetails