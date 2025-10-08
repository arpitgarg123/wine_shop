import React from 'react'
import { motion } from 'framer-motion'

const DeliveryInfo = () => {
  const deliveryFeatures = [
    {
      title: "Free Shipping",
      description: "Free shipping on all orders",
      icon: "🚚"
    },
    {
      title: "Returns & Refunds", 
      description: "Back guarantee under 7 days",
      icon: "↩️"
    },
    {
      title: "Orders & Delivery",
      description: "On every order over case of 6",
      icon: "📦"
    },
    {
      title: "Online Support",
      description: "Support online 24 hours a day", 
      icon: "💬"
    }
  ]

  return (
    <div className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[ninna] text-[#2F1B14] mb-6 leading-tight">
            DELIVERY INFORMATION
          </h1>
          <div className="w-24 h-1 bg-[#8B2C34] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our shipping, delivery, and return policies
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {deliveryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-[ninna] text-[#2F1B14] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Shipping & Delivery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-[ninna] text-[#2F1B14] mb-6">
              Shipping & Delivery
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  We offer delivery within Lagos and outside Lagos. Delivery times may vary depending on location and stock availability.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  Delivery fees, if applicable, will be displayed at checkout.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  Customers must ensure that someone of legal drinking age is available to accept the delivery.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  We are not responsible for delays caused by courier services, customs, or circumstances beyond our control.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Returns & Refunds */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-[ninna] text-[#2F1B14] mb-6">
              Returns & Refunds
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Due to the nature of wine, returns are only accepted if:
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  The wine is damaged or defective upon arrival
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  The incorrect product was delivered
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  Refunds or replacements must be requested within <strong>7 days</strong> of receiving your order.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base leading-relaxed">
                  To process a claim, please contact us at <a href="mailto:info@thewinestitute.com" className="text-[#8B2C34] hover:underline">info@thewinestitute.com</a> with proof of purchase and supporting evidence (e.g., photos).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orders & Payments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-lg p-8 sm:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-[ninna] text-[#2F1B14] mb-6 text-center">
            Orders, Payments & Delivery
          </h2>
          
          <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base leading-relaxed">
                Orders placed through our website are subject to confirmation and availability.
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base leading-relaxed">
                We accept secure online payments via approved payment methods.
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base leading-relaxed">
                Delivery times vary by location. Winestitute is not liable for delays caused by third-party couriers or customs clearance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-[ninna] text-[#2F1B14] mb-4">
            Need Help?
          </h3>
          <p className="text-gray-700 mb-6">
            If you have any questions about delivery or returns, don't hesitate to contact us.
          </p>
          <div className="space-y-2 text-gray-600">
            <p>📞 +234 7070509604</p>
            <p>📧 info@thewinestitute.com</p>
            <p>📍 Victoria Island Ikoyi, Lagos</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default DeliveryInfo