"use client"

import { useState, useEffect } from "react"
import { ArrowRight, X } from "lucide-react"
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
import React from "react"

const NosProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Project data
  const projects = [
    {
      id: 1,
      title: "Location Villa Marrakech",
      category: "Immobilier",
      image: site1,
      description: "Site web de location de villas de luxe à Marrakech avec système de réservation en ligne.",
      tags: ["Responsive", "Réservation", "SEO"],
    },
    {
      id: 2,
      title: "Agro Maroc",
      category: "Agriculture",
      image: site2,
      description: "Plateforme pour les professionnels de l'agriculture au Maroc avec actualités et ressources.",
      tags: ["E-commerce", "Blog", "SEO"],
    },
    {
      id: 3,
      title: "Arcadia Gaming",
      category: "Divertissement",
      image: site3,
      description: "Le spécialiste de la borne d'arcade et du retrogaming avec boutique en ligne.",
      tags: ["E-commerce", "Design", "Animation"],
    },
    {
      id: 4,
      title: "Kohler Design",
      category: "Design",
      image: site4,
      description: "Site vitrine pour une entreprise de design d'intérieur haut de gamme.",
      tags: ["Portfolio", "Animation", "SEO"],
    },
    {
      id: 5,
      title: "Domotique Maroc",
      category: "Technologie",
      image: site5,
      description: "Solutions de domotique pour maisons intelligentes et bâtiments connectés.",
      tags: ["Catalogue", "Responsive", "SEO"],
    },
    {
      id: 6,
      title: "Fares Medical Center",
      category: "Santé",
      image: site6,
      description: "Centre médical multidisciplinaire avec prise de rendez-vous en ligne.",
      tags: ["Réservation", "SEO", "Responsive"],
    },
    {
      id: 7,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: site7,
      description: "Plateforme e-commerce complète avec gestion des produits et paiement en ligne.",
      tags: ["E-commerce", "Paiement", "Responsive"],
    },
    {
      id: 8,
      title: "Travel Agency",
      category: "Tourisme",
      image: site8,
      description: "Site web pour agence de voyage avec réservation d'hôtels et de vols.",
      tags: ["Réservation", "SEO", "UX/UI"],
    },
    {
      id: 9,
      title: "Restaurant Gourmet",
      category: "Restauration",
      image: site9,
      description: "Site web pour restaurant gastronomique avec réservation de table en ligne.",
      tags: ["Réservation", "Design", "Responsive"],
    },
    {
      id: 10,
      title: "Fitness Club",
      category: "Sport",
      image: site10,
      description: "Site web pour club de fitness avec abonnements et réservation de cours.",
      tags: ["Réservation", "Paiement", "Responsive"],
    },
    {
      id: 11,
      title: "Photography Portfolio",
      category: "Art",
      image: site11,
      description: "Portfolio en ligne pour photographe professionnel avec galerie interactive.",
      tags: ["Portfolio", "Galerie", "Animation"],
    },
    {
      id: 12,
      title: "Education Platform",
      category: "Education",
      image: site12,
      description: "Plateforme éducative avec cours en ligne et suivi des progrès.",
      tags: ["E-learning", "Responsive", "UX/UI"],
    },
  ]

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

  return (
    <section id="projects" className="py-12 relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold py-1 px-2 rounded-full bg-purple-100 text-purple-700 mb-2">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            Nos derniers projets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Découvrez nos réalisations récentes et laissez-vous inspirer par notre expertise en création web et
            référencement SEO
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100 hover:border-purple-200 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <span className="text-white font-medium text-xs">{project.category}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold mb-1 group-hover:text-purple-700 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">{project.description}</p>

                  <div className="flex justify-end">
                    <button className="text-purple-600 font-medium text-xs flex items-center hover:text-purple-800 transition-colors">
                      Voir détails <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-full transition-all flex items-center mx-auto shadow-sm shadow-purple-500/10 text-xs">
            Voir tous les projets <ArrowRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal - Different for mobile and desktop */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeProject}
        >
          {isMobile ? (
            // Mobile view - just image and close button
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeProject}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            // Desktop view - compact project details
            <div className="bg-white rounded-lg overflow-hidden max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-[200px] object-cover"
                />
                <button
                  className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
                  onClick={closeProject}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-2">
                  {selectedProject.category}
                </span>

                <h2 className="text-xl font-bold mb-2 text-gray-900">{selectedProject.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{selectedProject.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 rounded-md shadow-sm shadow-purple-500/10 flex items-center text-xs">
                    Demander un projet similaire <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default NosProjects
