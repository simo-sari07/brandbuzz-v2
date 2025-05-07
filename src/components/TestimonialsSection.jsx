"use client"

import { useRef, useState } from "react"
import AnimatedSection from "./AnimatedSection"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import user1 from "../../public/profiles/1.jpeg"
import user2 from "../../public/profiles/2.jpeg"
import user3 from "../../public/profiles/3.jpeg"
import React from "react"

function TestimonialsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sophie Martin",
      position: "CEO, TechStart",
      image: user1,
      quote:
        "BrandBuzz transformed our online presence completely. Their team delivered a website that perfectly represents our brand and has significantly increased our conversion rates.",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      position: "Marketing Director, EcoSolutions",
      image:  user2,
      quote:
        "The SEO strategy implemented by BrandBuzz has dramatically improved our search rankings. We're now on the first page for all our key terms, and our organic traffic has doubled.",
      rating: 5,
    },
    {
      name: "Marie Leclerc",
      position: "Founder StyleBoutique",
      image: user3,
      quote:
        "The design work BrandBuzz created for our brand has received countless compliments. Their attention to detail and creativity is unmatched. Highly recommended!",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-100 text-blue-600 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Client Feedback
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-1">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="w-full md:w-1/3 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                      <img
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {testimonials[activeIndex].position.split(",")[1]}
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].position}</p>

                    <div className="flex justify-center mt-2">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="w-full md:w-2/3"
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="text-6xl text-blue-200 absolute -top-10 left-0">"</div>
                    <p className="text-gray-600 text-lg relative z-10 italic">{testimonials[activeIndex].quote}</p>
                    <div className="text-6xl text-blue-200 absolute bottom-0 right-0 transform rotate-180">"</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default TestimonialsSection

