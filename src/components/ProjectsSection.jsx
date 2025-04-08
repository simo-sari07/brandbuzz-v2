"use client"

import { useRef, useState } from "react"
import AnimatedSection from "./AnimatedSection"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import React from "react"

function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Development", "Branding", "Marketing", "Content"]

  const projects = [
    {
      image: "/public/design/3.jpeg",
      title: "Restaurant Website",
      category: "Web Development",
      description: "A modern website for a high-end restaurant with online reservation system.",
      tags: ["UI/UX", "Frontend", "CMS"],
    },
    {
      image: "/public/design/9.jpeg",
      title: "Music Event Promotion",
      category: "Marketing",
      description: "Comprehensive digital marketing campaign for a major music event.",
      tags: ["Social Media", "Advertising", "Analytics"],
    },
    {
      image: "/public/design/13.jpeg",
      title: "DJ Clock Brand Identity",
      category: "Branding",
      description: "Complete brand identity design for a popular DJ and music producer.",
      tags: ["Logo Design", "Brand Guidelines", "Merchandise"],
    },
    {
      image: "/public/design/16.jpeg",
      title: "Fashion Campaign",
      category: "Content",
      description: "Stunning visual content for a seasonal fashion collection launch.",
      tags: ["Photography", "Video", "Social Media"],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const galleryItems = [1, 2, 7, 8, 12, 14]

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

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
              Our Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover some of our recent work and success stories
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group h-full border border-gray-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">
            More Creative Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryItems.map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-md">
                  <img
                    src={`/public/design/${num}.jpeg`}
                    alt={`Portfolio item ${num}`}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedSection>
          <div className="text-center mt-16">
            <motion.button
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectsSection

