"use client"

import { motion } from "framer-motion"
import Logo from "./Logo"
import { Facebook, Twitter, Instagram, GitlabIcon as GitHub, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import React from "react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/design/23.JPG')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo />
            <p className="mt-6 text-gray-400 max-w-xs">
              Your trusted partner for web development, SEO, and content creation services. We help businesses transform
              their digital presence.
            </p>
            <div className="flex space-x-4 mt-8">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 hover:bg-blue-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHub className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Website Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Design Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Photo & Video
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all group-hover:w-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Marraekch City</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+(212)657-944130</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Brandbuzzagency77@gmail.com</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-medium mb-4 text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} BrandBuzz. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

