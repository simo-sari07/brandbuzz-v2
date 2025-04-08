"use client"
import { ArrowRight, ChevronDown, Sparkles, Send, Check } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import { useState } from "react"
import React from "react"

function HeroSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Valid email is required"
    }
    if (!formState.service) newErrors.service = "Please select a service"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  // Floating element variants
  const floatingAnimation = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 pt-12 px-6"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection className="w-full md:w-1/2">
            <div className="max-w-xl">
              <motion.div
                className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 mb-3 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Digital Experience Agency
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Transform
                </motion.span>{" "}
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  your simo vision with{" "}
                </motion.span>
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    BrandBuzz
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              <motion.p
                className="text-blue-100 text-lg mb-8 max-w-lg backdrop-blur-sm bg-blue-900/10 p-4 rounded-lg border border-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                We don't just build websites — we craft digital experiences that captivate, convert, and create lasting
                impressions. Elevate your brand with our cutting-edge design and strategic marketing solutions.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all flex items-center justify-center group shadow-lg shadow-blue-600/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  className="border border-blue-400 text-blue-300 hover:bg-blue-900/30 px-8 py-3 rounded-full transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Our Services
                </motion.button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full md:w-1/2">
            <motion.div
              className="relative mx-auto max-w-md lg:max-w-lg bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 p-6">
                <h3 className="text-xl font-bold text-white">Request a Free Quote</h3>
                <p className="text-blue-100 text-sm mt-1">Get a personalized proposal for your project</p>
              </div>

              {/* Contact Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-white/20 border ${
                        errors.name ? "border-red-400" : "border-white/30"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200/70`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-white/20 border ${
                        errors.email ? "border-red-400" : "border-white/30"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200/70`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200/70"
                      placeholder="+212 0000000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-blue-100 mb-1">
                      Service Needed*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-white/20 border ${
                        errors.service ? "border-red-400" : "border-white/30"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                    >
                      <option value="" className="bg-blue-900">
                        Select a service
                      </option>
                      <option value="website" className="bg-blue-900">
                        Website Development
                      </option>
                      <option value="seo" className="bg-blue-900">
                        SEO Optimization
                      </option>
                      <option value="design" className="bg-blue-900">
                        Design Services
                      </option>
                      <option value="marketing" className="bg-blue-900">
                        Digital Marketing
                      </option>
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200/70"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Get Free Quote <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-blue-200/70 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              ) : (
                <div className="p-8 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quote Request Sent!</h3>
                  <p className="text-blue-100 text-center mb-6">
                    Thank you for your interest. We'll get back to you with a personalized quote within 24 hours.
                  </p>
                  <motion.button
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Request
                  </motion.button>
                </div>
              )}

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full z-0 hidden md:block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              />

              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full z-0 hidden md:block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center backdrop-blur-sm bg-blue-900/20 px-4 py-2 rounded-full">
          <span className="text-blue-300 text-sm mb-1">Discover More</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
            }}
          >
            <ChevronDown className="h-6 w-6 text-blue-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

