"use client"

import { useRef } from "react"
import AnimatedSection from "./AnimatedSection"
import { Globe, Search, Palette, Camera, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import React from "react"
import service1 from "../../public/SEO/1.jpg"
import service2 from "../../public/web/1.jpg"
import service3 from "../../public/design/1.webp"
import service4 from "../../public/design/2.webp"

function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Website Creation",
      description:
        "Custom websites with unique and attractive design that offer increased visibility and bring new clients.",
      image: service1,
      features: ["Responsive Design", "SEO Optimization", "Custom CMS", "E-commerce Solutions"],
    },
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      image: service2,
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"],
    },
    {
      icon: <Palette className="w-10 h-10 text-blue-600" />,
      title: "Design Services",
      description: "Professional graphic design for your brand identity, marketing materials, and digital assets.",
      image: service3,
      features: ["Brand Identity", "UI/UX Design", "Print Materials", "Social Media Graphics"],
    },
    {
      icon: <Camera className="w-10 h-10 text-blue-600" />,
      title: "Photo & Video",
      description: "High-quality visual content creation to enhance your brand's storytelling and engagement.",
      image:  service4,
      features: ["Product Photography", "Corporate Videos", "Social Media Content", "Event Coverage"],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.span
              className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-100 text-blue-600 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Boost your business growth with our comprehensive digital transformation services
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-blue-200 transform group-hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-70"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 left-6 bg-white p-3 rounded-lg shadow-md group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-6 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

