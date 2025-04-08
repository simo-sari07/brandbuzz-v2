import React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, X, ExternalLink, Maximize } from "lucide-react"
// Import your project images
import site1 from "../../public/web/site1.jpg"
import site2 from "../../public/web/site2.jpg"
import site3 from "../../public/web/site3.jpg"
import site4 from "../../public/web/site4.jpg"
import site5 from "../../public/web/siite5.jpeg"
import site6 from "../../public/web/site6.jpeg"
import site7 from "../../public/web/site7.jpeg"
import site8 from "../../public/web/site8.jpeg"
import site9 from "../../public/web/site9.jpeg"
import site10 from "../../public/web/site10.jpeg"
import site11 from "../../public/web/site11.jpeg"
import site12 from "../../public/web/site12.jpeg"

const NosProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Project data
  const projects = [
    {
      id: 1,
      title: "Location Villa Marrakech",
      category: "Immobilier",
      image: site1,
      description: "Site web de location de villas de luxe à Marrakech avec système de réservation en ligne.",
      tags: ["Responsive", "Réservation", "SEO"],
      fullImages: [site1, site1],
    },
    {
      id: 2,
      title: "Agro Maroc",
      category: "Agriculture",
      image: site2,
      description: "Plateforme pour les professionnels de l'agriculture au Maroc avec actualités et ressources.",
      tags: ["E-commerce", "Blog", "SEO"],
      fullImages: [site2, site2],
    },
    {
      id: 3,
      title: "Arcadia Gaming",
      category: "Divertissement",
      image: site3,
      description: "Le spécialiste de la borne d'arcade et du retrogaming avec boutique en ligne.",
      tags: ["E-commerce", "Design", "Animation"],
      fullImages: [site3, site3],
    },
    {
      id: 4,
      title: "Kohler Design",
      category: "Design",
      image: site4,
      description: "Site vitrine pour une entreprise de design d'intérieur haut de gamme.",
      tags: ["Portfolio", "Animation", "SEO"],
      fullImages: [site4, site4],
    },
    {
      id: 5,
      title: "Domotique Maroc",
      category: "Technologie",
      image: site5,
      description: "Solutions de domotique pour maisons intelligentes et bâtiments connectés.",
      tags: ["Catalogue", "Responsive", "SEO"],
      fullImages: [site5, site5],
    },
    {
      id: 6,
      title: "Fares Medical Center",
      category: "Santé",
      image: site6,
      description: "Centre médical multidisciplinaire avec prise de rendez-vous en ligne.",
      tags: ["Réservation", "SEO", "Responsive"],
      fullImages: [site6, site6],
    },
    {
      id: 7,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: site7,
      description: "Plateforme e-commerce complète avec gestion des produits et paiement en ligne.",
      tags: ["E-commerce", "Paiement", "Responsive"],
      fullImages: [site7, site7],
    },
    {
      id: 8,
      title: "Travel Agency",
      category: "Tourisme",
      image: site8,
      description: "Site web pour agence de voyage avec réservation d'hôtels et de vols.",
      tags: ["Réservation", "SEO", "UX/UI"],
      fullImages: [site8, site8],
    },
    {
      id: 9,
      title: "Restaurant Gourmet",
      category: "Restauration",
      image: site9,
      description: "Site web pour restaurant gastronomique avec réservation de table en ligne.",
      tags: ["Réservation", "Design", "Responsive"],
      fullImages: [site9, site9],
    },
    {
      id: 10,
      title: "Fitness Club",
      category: "Sport",
      image: site10,
      description: "Site web pour club de fitness avec abonnements et réservation de cours.",
      tags: ["Réservation", "Paiement", "Responsive"],
      fullImages: [site10, site10],
    },
    {
      id: 11,
      title: "Photography Portfolio",
      category: "Art",
      image: site11,
      description: "Portfolio en ligne pour photographe professionnel avec galerie interactive.",
      tags: ["Portfolio", "Galerie", "Animation"],
      fullImages: [site11, site11],
    },
    {
      id: 12,
      title: "Education Platform",
      category: "Education",
      image: site12,
      description: "Plateforme éducative avec cours en ligne et suivi des progrès.",
      tags: ["E-learning", "Responsive", "UX/UI"],
      fullImages: [site12, site12],
    },
  ]

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Open project detail modal
  const openProject = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  // Close project detail modal
  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  // Open lightbox
  const openLightbox = (project, index) => {
    setSelectedProject(project)
    setCurrentImageIndex(index || 0)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  // Navigate through lightbox images
  const navigateImage = (direction) => {
    if (!selectedProject) return

    const newIndex = currentImageIndex + direction
    if (newIndex >= 0 && newIndex < selectedProject.fullImages.length) {
      setCurrentImageIndex(newIndex)
    }
  }

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-purple-100 text-purple-700 mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            Nos derniers projets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez nos réalisations récentes et laissez-vous inspirer par notre expertise en création web et
            référencement SEO
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
              <div
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-purple-200 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                    <span className="text-white font-medium">{project.category}</span>
                    <motion.div
                      className="bg-white rounded-full p-2 text-purple-700"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                    >
                      <Maximize className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      className="text-purple-600 font-medium text-sm flex items-center group-hover:text-purple-800 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Voir détails <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && !isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {selectedProject.fullImages.map((img, index) => (
                    <div
                      key={index}
                      className="snap-center flex-shrink-0 w-full cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        openLightbox(selectedProject, index)
                      }}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-[50vh] object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    closeProject()
                  }}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <motion.button
                    className="flex items-center text-sm text-gray-600 hover:text-purple-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Visiter le site
                  </motion.button>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-900">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Services fournis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Conception et design sur mesure
                      </li>
                      <li className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Développement responsive
                      </li>
                      <li className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Optimisation SEO
                      </li>
                      <li className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Maintenance et support
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg shadow-purple-500/20 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demander un projet similaire <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for full-screen image viewing */}
      <AnimatePresence>
        {isLightboxOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <img
                src={selectedProject.fullImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedProject.title} - Full view`}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation arrows */}
              {selectedProject.fullImages.length > 1 && (
                <>
                  {currentImageIndex > 0 && (
                    <motion.button
                      className="absolute left-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateImage(-1)
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowRight className="h-6 w-6 transform rotate-180" />
                    </motion.button>
                  )}

                  {currentImageIndex < selectedProject.fullImages.length - 1 && (
                    <motion.button
                      className="absolute right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateImage(1)
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.button>
                  )}
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.fullImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default NosProjects
