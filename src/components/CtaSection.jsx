"use client"

import AnimatedSection from "./AnimatedSection"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import React from "react"
function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/public/design/20.JPG" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <motion.span
                className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get Started Today
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to digitalize your project?</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                Contact us today to discuss how we can help transform your digital presence and grow your business.
              </p>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-blue-100 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-100 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-blue-100 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-blue-100 text-sm mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50 h-32"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}

export default CtaSection

