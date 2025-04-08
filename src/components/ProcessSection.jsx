"use client"

import { useRef } from "react"
import AnimatedSection from "./AnimatedSection"
import { ChevronRight, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import React from "react"

function ProcessSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Analysis",
      description: "We analyze your needs and business objectives to create a tailored strategy.",
      details: ["Market Research", "Competitor Analysis", "Target Audience Definition", "Business Goals Alignment"],
    },
    {
      number: "02",
      title: "Design",
      description: "Our creative team designs a unique and attractive visual identity for your project.",
      details: [
        "UI/UX Wireframing",
        "Visual Identity Creation",
        "Prototype Development",
        "Client Feedback Integration",
      ],
    },
    {
      number: "03",
      title: "Development",
      description: "We develop your website or digital solution with the latest technologies.",
      details: ["Frontend Development", "Backend Integration", "Responsive Implementation", "Performance Optimization"],
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support and optimization.",
      details: ["Quality Assurance", "Deployment Strategy", "Post-Launch Monitoring", "Continuous Improvement"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/public/design/22.JPG')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.span
              className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              A proven methodology to digitalize your project with BrandBuzz
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full border border-white/10 hover:border-blue-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group">
                <div className="text-blue-400 text-5xl font-bold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-blue-100 mb-6">{step.description}</p>

                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-8 w-8 text-blue-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  )
}

export default ProcessSection

