import React from 'react'
import { motion } from 'framer-motion'

const TermsOfUse = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          text: "By using this website, you confirm that you are of legal drinking age (18 years or older in Nigeria, or the minimum legal age in your country). If you do not agree with these Terms, please do not use our services."
        }
      ]
    },
    {
      title: "2. Responsible Use of Website",
      content: [
        {
          text: "You agree to use this website only for lawful purposes and in accordance with these Terms."
        },
        {
          text: "You may not misuse the site by attempting to hack, introduce harmful software, or use automated systems to access our data."
        }
      ]
    },
    {
      title: "3. Intellectual Property",
      content: [
        {
          text: "All content on this site, including logos, trademarks, text, images, and designs, is the property of Winestitute and is protected under copyright law."
        },
        {
          text: "You may not copy, reproduce, or distribute our content without prior written consent."
        }
      ]
    },
    {
      title: "4. Product Sales & Availability",
      content: [
        {
          text: "Alcohol products are sold only to persons of legal drinking age."
        },
        {
          text: "Product availability, prices, and vintages may change without prior notice."
        },
        {
          text: "We reserve the right to refuse service if we suspect misuse or underage purchases."
        }
      ]
    },
    {
      title: "5. Orders, Payments & Delivery",
      content: [
        {
          text: "Orders placed through our website are subject to confirmation and availability."
        },
        {
          text: "We accept payments via approved payment methods."
        },
        {
          text: "Delivery times vary by location. Winestitute is not liable for delays caused by third-party couriers or customs clearance."
        }
      ]
    },
    {
      title: "6. Returns & Refunds",
      content: [
        {
          text: "Refunds or replacements will be processed at our discretion, in line with our Returns Policy."
        }
      ]
    },
    {
      title: "7. Third-Party Links",
      content: [
        {
          text: "Our website may contain links to third-party sites. We are not responsible for the content, policies, or practices of these external sites."
        }
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        {
          text: "Winestitute is not liable for:"
        },
        {
          text: "Any indirect, incidental, or consequential damages arising from the use of our website or products."
        },
        {
          text: "Misuse of alcohol by any person."
        },
        {
          text: "We encourage the responsible consumption of wine."
        }
      ]
    },
    {
      title: "9. Privacy & Data Protection",
      content: [
        {
          text: "Your use of our website is also governed by our Privacy Policy, which outlines how we collect and protect your data."
        }
      ]
    },
    {
      title: "10. Changes to Terms",
      content: [
        {
          text: "We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website means you accept the updated terms."
        }
      ]
    },
    {
      title: "11. Governing Law",
      content: [
        {
          text: "These Terms of Use are governed by the laws of Nigeria, and any disputes will be subject to the jurisdiction of Nigeria courts."
        }
      ]
    },
    {
      title: "12. Contact Us",
      content: [
        {
          text: "For any questions about these Terms, please contact us: info@thewinestitute.com"
        }
      ]
    }
  ]

  const highlights = [
    {
      icon: "🔞",
      title: "Age Verification",
      description: "Must be 18+ to use our services"
    },
    {
      icon: "🛡️",
      title: "Legal Protection",
      description: "Your rights and our responsibilities"
    },
    {
      icon: "📋",
      title: "Clear Guidelines",
      description: "Simple rules for website usage"
    },
    {
      icon: "⚖️",
      title: "Fair Terms",
      description: "Transparent and reasonable policies"
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
            TERMS OF USE
          </h1>
          <div className="w-24 h-1 bg-[#8B2C34] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Winestitute website. By accessing or using our website, services, 
            or purchasing our products, you agree to comply with the following Terms of Use. 
            Please read them carefully.
          </p>
        </motion.div>

        {/* Highlight Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{highlight.icon}</div>
              <h3 className="text-lg font-[ninna] text-[#2F1B14] mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
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

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#8B2C34]/5 to-[#2F1B14]/5 rounded-lg p-8 sm:p-10 border border-[#8B2C34]/10"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-[ninna] text-[#2F1B14] mb-4">
              ⚠️ Important Reminder
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              <strong>Drink Responsibly</strong>
            </p>
            <p className="text-gray-600 text-sm">
              Our products are intended for responsible adults aged 18 and above. 
              We encourage the responsible consumption of wine and do not condone excessive drinking.
            </p>
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
              Questions About These Terms?
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about our Terms of Use, we're here to help clarify.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 <a href="mailto:info@thewinestitute.com" className="text-[#8B2C34] hover:underline">info@thewinestitute.com</a></p>
              <p>📞 +234 7070509604</p>
              <p>📍 Victoria Island Ikoyi, Lagos</p>
            </div>
          </div>
        </motion.div>

        {/* Governing Law Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            These terms are governed by Nigerian law | Last updated: October 2025
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default TermsOfUse