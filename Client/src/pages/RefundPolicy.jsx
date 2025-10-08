import React from 'react'
import { motion } from 'framer-motion'

const RefundPolicy = () => {
  const sections = [
    {
      title: "1. Refund Eligibility",
      content: [
        {
          text: "Due to the nature of wine and alcohol products, refunds are only accepted under specific circumstances:"
        },
        {
          text: "The wine is damaged, defective, or spoiled upon arrival"
        },
        {
          text: "The incorrect product was delivered (wrong wine, vintage, or quantity)"
        },
        {
          text: "The package was damaged during shipping, affecting the wine quality"
        },
        {
          text: "The wine was delivered past its expiration date or best-before period"
        }
      ]
    },
    {
      title: "2. Time Limit for Refunds",
      content: [
        {
          text: "All refund requests must be submitted within 7 days of receiving your order."
        },
        {
          text: "Requests submitted after this period will not be eligible for refunds unless there are exceptional circumstances."
        },
        {
          text: "We recommend inspecting your order immediately upon delivery."
        }
      ]
    },
    {
      title: "3. How to Request a Refund",
      content: [
        {
          text: "Contact our customer service team at info@thewinestitute.com with:"
        },
        {
          text: "Your order number and purchase confirmation"
        },
        {
          text: "Clear photos of the damaged or incorrect product"
        },
        {
          text: "A detailed description of the issue"
        },
        {
          text: "Your preferred resolution (refund or replacement)"
        }
      ]
    },
    {
      title: "4. Refund Processing",
      content: [
        {
          text: "Once your refund request is approved, we will process it within 3-5 business days."
        },
        {
          text: "Refunds will be credited back to your original payment method."
        },
        {
          text: "Bank processing may take an additional 5-10 business days to reflect in your account."
        },
        {
          text: "You will receive email confirmation once the refund has been processed."
        }
      ]
    },
    {
      title: "5. Non-Refundable Items",
      content: [
        {
          text: "The following items are not eligible for refunds:"
        },
        {
          text: "Wine that has been opened, consumed, or tampered with"
        },
        {
          text: "Custom or personalized wine orders"
        },
        {
          text: "Gift cards and promotional codes"
        },
        {
          text: "Wine purchased with special discounts or during clearance sales (unless defective)"
        },
        {
          text: "Orders delivered more than 7 days ago without valid reason for delay"
        }
      ]
    },
    {
      title: "6. Replacement Option",
      content: [
        {
          text: "In many cases, we offer product replacement instead of refunds."
        },
        {
          text: "Replacement wine will be of the same type and vintage, subject to availability."
        },
        {
          text: "If the exact wine is unavailable, we'll offer a comparable alternative or full refund."
        },
        {
          text: "Replacement shipping is free of charge."
        }
      ]
    },
    {
      title: "7. Return Shipping",
      content: [
        {
          text: "For defective or incorrect items, we will provide a prepaid return shipping label."
        },
        {
          text: "Wine must be returned in its original packaging and condition."
        },
        {
          text: "We are not responsible for wine damaged during return shipping due to improper packaging."
        }
      ]
    },
    {
      title: "8. Partial Refunds",
      content: [
        {
          text: "Partial refunds may be offered in cases where:"
        },
        {
          text: "Only some items in a multi-bottle order are affected"
        },
        {
          text: "Minor packaging damage that doesn't affect wine quality"
        },
        {
          text: "Delivery delays that don't warrant a full refund"
        }
      ]
    },
    {
      title: "9. Cancellation Policy",
      content: [
        {
          text: "Orders can be cancelled free of charge if:"
        },
        {
          text: "The order has not yet been processed or shipped"
        },
        {
          text: "Cancellation request is made within 24 hours of placing the order"
        },
        {
          text: "Once shipped, standard refund policies apply"
        }
      ]
    },
    {
      title: "10. Contact for Refunds",
      content: [
        {
          text: "For all refund-related inquiries, please contact us:"
        },
        {
          text: "Email: info@thewinestitute.com"
        },
        {
          text: "Phone: +234 7070509604"
        },
        {
          text: "Our customer service team is available to assist you Monday to Friday, 9 AM to 6 PM."
        }
      ]
    }
  ]

  const refundFeatures = [
    {
      icon: "⏰",
      title: "7-Day Window",
      description: "Request refunds within 7 days of delivery"
    },
    {
      icon: "🔄",
      title: "Easy Process",
      description: "Simple email-based refund requests"
    },
    {
      icon: "💳",
      title: "Original Payment",
      description: "Refunds credited to your original payment method"
    },
    {
      icon: "📦",
      title: "Free Returns",
      description: "Prepaid return shipping for eligible items"
    }
  ]

  return (
    <div className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[ninna] text-[#2F1B14] mb-6 leading-tight">
            REFUND POLICY
          </h1>
          <div className="w-24 h-1 bg-[#8B2C34] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Winestitute, we want you to be completely satisfied with your purchase. 
            Our refund policy ensures fair and transparent procedures for returns and refunds 
            while maintaining the quality and integrity of our wine products.
          </p>
        </motion.div>

        {/* Refund Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {refundFeatures.map((feature, index) => (
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

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-[ninna] text-[#2F1B14] mb-6">
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Refund Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#8B2C34]/5 to-[#2F1B14]/5 rounded-lg p-8 sm:p-10 border border-[#8B2C34]/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-[ninna] text-[#2F1B14] mb-4">
              Quick Refund Guide
            </h3>
            <p className="text-gray-700 mb-6">
              Follow these simple steps to request a refund
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8B2C34] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-[#2F1B14] mb-2">Contact Us</h4>
              <p className="text-sm text-gray-600">Email us within 7 days with your order details</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8B2C34] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-[#2F1B14] mb-2">Provide Evidence</h4>
              <p className="text-sm text-gray-600">Send photos and description of the issue</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8B2C34] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-[#2F1B14] mb-2">Get Refund</h4>
              <p className="text-sm text-gray-600">Receive refund within 3-5 business days</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-lg p-8 sm:p-10"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-[ninna] text-[#2F1B14] mb-4">
              Need Help with a Refund?
            </h3>
            <p className="text-gray-700 mb-6">
              Our customer service team is here to assist you with any refund-related questions.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 <a href="mailto:info@thewinestitute.com" className="text-[#8B2C34] hover:underline">info@thewinestitute.com</a></p>
              <p>📞 +234 7070509604</p>
              <p>📍 Victoria Island Ikoyi, Lagos</p>
              <p className="text-sm mt-4">Monday to Friday, 9 AM to 6 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center border-t border-gray-200 pt-8"
        >
          <p className="text-sm text-gray-500 mb-2">
            This refund policy is subject to Nigerian consumer protection laws
          </p>
          <p className="text-sm text-gray-500">
            Last updated: October 2025
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default RefundPolicy