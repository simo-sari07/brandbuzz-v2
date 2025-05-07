"use client"

import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import React from "react";

function CtaSection() {
  const [state, handleSubmit] = useForm("mbloonwa") // Replace with your actual Formspree form ID

  if (state.succeeded) {
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
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">Thank you for your message!</h3>
                    <p className="text-blue-100 mb-6">We'll get back to you as soon as possible.</p>
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.reload()}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    )
  }

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-blue-100 text-sm mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                        placeholder="John Doe"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="mt-1 text-red-400 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-blue-100 text-sm mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                        placeholder="john@example.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="mt-1 text-red-400 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-blue-100 text-sm mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50"
                      placeholder="How can we help you?"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="mt-1 text-red-400 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-blue-100 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-200/50 h-32"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1 text-red-400 text-sm"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center mx-auto disabled:opacity-70"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {state.submitting ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
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
