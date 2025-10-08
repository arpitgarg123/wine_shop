import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "Name, email address, phone number, billing/shipping address, payment details (when you place an order)."
        },
        {
          subtitle: "Account Information", 
          text: "If you create an account, we store your login details."
        },
        {
          subtitle: "Usage Data",
          text: "IP address, browser type, device information, and pages you visit on our website."
        },
        {
          subtitle: "Marketing Preferences",
          text: "Your subscription choices for newsletters, offers, and promotions."
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          text: "Process and deliver your wine orders"
        },
        {
          text: "Communicate order confirmations, shipping updates, and customer service responses"
        },
        {
          text: "Improve our website, products, and services"
        },
        {
          text: "Send newsletters, promotions, and wine news (only if you opt in)"
        },
        {
          text: "Comply with legal and regulatory requirements"
        }
      ]
    },
    {
      title: "3. Sharing of Information",
      content: [
        {
          text: "We do not sell or rent your personal information. However, we may share data with trusted third parties:"
        },
        {
          subtitle: "Payment Processors",
          text: "To securely complete your purchases"
        },
        {
          subtitle: "Shipping Partners", 
          text: "To deliver your orders"
        },
        {
          subtitle: "Service Providers",
          text: "For website hosting, analytics, and customer support"
        },
        {
          subtitle: "Legal Authorities",
          text: "If required by law or to protect our rights"
        }
      ]
    },
    {
      title: "4. Cookies & Tracking",
      content: [
        {
          text: "Our website uses cookies to enhance your browsing experience. Cookies help us:"
        },
        {
          text: "Remember your preferences"
        },
        {
          text: "Track website performance and analytics"
        },
        {
          text: "Deliver tailored marketing campaigns"
        },
        {
          text: "You may disable cookies in your browser settings, though some features may not work properly."
        }
      ]
    },
    {
      title: "5. Data Security",
      content: [
        {
          text: "We take appropriate technical and organizational measures to safeguard your information against unauthorized access, disclosure, or misuse."
        }
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        {
          text: "You have the right to:"
        },
        {
          text: "Access, update, or delete your personal data"
        },
        {
          text: "Opt out of marketing communications at any time"
        },
        {
          text: "Request information on how your data is used"
        },
        {
          text: "Lodge a complaint with a data protection authority if required"
        }
      ]
    },
    {
      title: "7. Third-Party Links",
      content: [
        {
          text: "Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites."
        }
      ]
    },
    {
      title: "8. Age Restriction",
      content: [
        {
          text: "As a wine retailer, our services are intended for customers 18 years and older (or the legal drinking age in your country). We do not knowingly collect data from minors."
        }
      ]
    },
    {
      title: "9. Updates to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date."
        }
      ]
    },
    {
      title: "10. Contact Us",
      content: [
        {
          text: "If you have questions about this Privacy Policy or how we handle your information, please contact us at: info@thewinestitute.com"
        }
      ]
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
            PRIVACY POLICY
          </h1>
          <div className="w-24 h-1 bg-[#8B2C34] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Winestitute, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard the information you provide when 
            visiting our website, purchasing our wines, or interacting with us online.
          </p>
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
                  <div key={itemIndex} className="space-y-2">
                    {item.subtitle && (
                      <h3 className="text-lg font-semibold text-[#8B2C34]">
                        {item.subtitle}:
                      </h3>
                    )}
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8B2C34] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
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
          className="mt-16 bg-gray-50 rounded-lg p-8 sm:p-10"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-[ninna] text-[#2F1B14] mb-4">
              Questions About This Policy?
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about our Privacy Policy or data practices, we're here to help.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 <a href="mailto:info@thewinestitute.com" className="text-[#8B2C34] hover:underline">info@thewinestitute.com</a></p>
              <p>📞 +234 7070509604</p>
              <p>📍 Victoria Island Ikoyi, Lagos</p>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Last updated: October 2025
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default PrivacyPolicy