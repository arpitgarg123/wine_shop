import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { IoCalendarOutline, IoPersonOutline, IoTimeOutline, IoArrowForward } from 'react-icons/io5'

const Blogs = () => {
  const navigate = useNavigate()

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`)
  }

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Wine Tasting: A Beginner's Guide",
      excerpt: "Discover the fundamentals of wine tasting and develop your palate with our comprehensive guide. Learn about the five S's of wine tasting and enhance your appreciation.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&h=300&fit=crop&crop=center",
      author: "Master Sommelier",
      date: "October 3, 2025",
      readTime: "5 min read",
      category: "Wine Education"
    },
    {
      id: 2,
      title: "Noble Hill Vineyard: Heritage and Innovation",
      excerpt: "Explore the rich history of Noble Hill wines and how traditional winemaking techniques blend with modern innovation to create exceptional vintages.",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=300&fit=crop&crop=center",
      author: "Wine Expert",
      date: "September 28, 2025",
      readTime: "7 min read",
      category: "Vineyard Stories"
    },
    {
      id: 3,
      title: "Perfect Wine Pairings for Mediterranean Cuisine",
      excerpt: "Unlock the secrets of pairing Mediterranean flavors with the perfect wines. From seafood to grilled meats, discover combinations that elevate your dining experience.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=300&fit=crop&crop=center",
      author: "Culinary Specialist",
      date: "September 25, 2025",
      readTime: "6 min read",
      category: "Food & Wine"
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen w-full  ">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-20 w-96 h-96 bg-[#873942]/8 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-40 right-24 w-80 h-80 bg-[#2F5233]/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-1 sm:mb-1 md:mb-2 lg:mb-2"
        >
          <motion.h1
            className="text-4xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[nexa] text-[#873942] leading-none tracking-tight mb-2"
            style={{
              textShadow: '4px 4px 12px rgba(135, 57, 66, 0.3)'
            }}
          >
            WINE STORIES
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
            className="text-sm sm:text-base md:text-md lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Dive into the world of wine through our carefully curated stories, 
            expert insights, and passionate narratives about the art of winemaking.
          </motion.p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
           
              className="group bg-white/70 backdrop-blur-sm  rounded-lg overflow-hidden border border-white/30"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden aspect-[16/8]">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#873942]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-6">
               

                {/* Blog Title */}
                <motion.h2
                  className="text-base sm:text-lg md:text-xl font-[ninna] text-[#873942] leading-tight mb-3 group-hover:text-[#2F5233] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h2>

                {/* Blog Excerpt */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <motion.button
                  onClick={() => handleReadMore(post.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-[#873942] hover:text-[#2F5233] font-medium transition-colors duration-300 group/btn"
                >
                  <span className="text-xs sm:text-sm">Read Full Story</span>
                  <IoArrowForward className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

     
      </div>
    </div>
  )
}

export default Blogs