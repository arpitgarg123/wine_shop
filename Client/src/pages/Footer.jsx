import React from 'react'
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import burgundy from '../assets/burgundy.png'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Noble Hill', href: '/about' },
      { name: 'Wine Collection', href: '/products' },
      { name: 'Wine Stories', href: '/blogs' },
       { name: 'Contact Us', href: '/contact' },

    ],
    policies: [
      { name: 'Delivery Information', href: '/delivery-info' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Wine Guide', href: '/wine-guide' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Wine Care', href: '/wine-care' },
    ]
  }

  const socialLinks = [
    { icon: IoLogoFacebook, href: '#', label: 'Facebook' },
    { icon: IoLogoInstagram, href: '#', label: 'Instagram' },
    { icon: IoLogoTwitter, href: '#', label: 'Twitter' },
    { icon: IoLogoLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#8B2C34] text-white relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <div 
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
          className="absolute bottom-32 right-16 w-80 h-80 bg-[#873942]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img src={burgundy} alt="Noble Hill" className="h-10 sm:h-12 filter brightness-0 invert " />
              </div>
              
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                Crafting exceptional wines since 1892. Noble Hill combines traditional winemaking with modern innovation to create wines that celebrate our Mediterranean terroir.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <IoLocationOutline className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100">Victoria Island Ikoyi, Lagos.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <IoCallOutline className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gray-100">+1 234 7070509604</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <IoMailOutline className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-gray-100 break-all">info@thewinestitute.com</span>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8">
                
                {/* Company Links */}
                <div>
                  <h3 className="text-base sm:text-lg  text-white mb-4 lg:mb-6">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-100 hover:text-[#873942] transition-colors duration-200 text-sm sm:text-base block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Policy Links */}
                <div>
                  <h3 className="text-base sm:text-lg  text-white mb-4 lg:mb-6">
                    Policies
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {footerLinks.policies.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-100 hover:text-[#873942] transition-colors duration-200 text-sm sm:text-base block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-gray-200 font-light text-xs sm:text-sm text-center sm:text-left">
              © Winestitute 2025. Not for persons under the age of 18. Enjoy Responsibly
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              <span className="text-gray-200 font-light">Drink Responsibly</span>
              <span className="text-gray-200 font-light hidden sm:inline">|</span>
              <span className="text-gray-200 font-light">Est. 1892</span>
              <span className="text-gray-200 font-light hidden sm:inline">|</span>
              <span className="text-gray-200 font-light">Premium Wines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer