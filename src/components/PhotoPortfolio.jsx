"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"
// Instead of importing images directly, let's use a different approach
const PhotoPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Photo collection with paths that will work with Vite
  const photos = [
    { id: 1, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747171696/image0_fv47ep.jpg", title: "Breakfast Dish" },
    { id: 2, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747163892/1_o85zth.jpg", title: "Dessert Presentation" },
    { id: 3, path: 'https://res.cloudinary.com/da63nggkh/image/upload/v1747163903/2_tbwfwd.jpg', title: "Appetizers" },
    { id: 4, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747163853/4_bqjhxz.jpg", title: "Brunch Spread" },
    { id: 5, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747171695/image4_pq31bu.jpg", title: "Gourmet Plate" },
    { id: 6, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747171692/33_xw2cnc.jpg", title: "Poolside Cocktail" },
    { id: 7, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747171694/image2_toth1h.jpg", title: "Red Cocktail" },
    { id: 8, path: "https://res.cloudinary.com/da63nggkh/image/upload/v1747171702/imgaeg3_fm6sad.jpg", title: "Coffee and Dessert" },
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction) => {
    const newIndex = (currentIndex + direction + photos.length) % photos.length
    setCurrentIndex(newIndex)
    setSelectedImage(photos[newIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return

      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft") navigateImage(-1)
      if (e.key === "ArrowRight") navigateImage(1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentIndex])

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500">
            Artistic Vision
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A curated collection showcasing the art of visual storytelling through the lens
          </p>
        </motion.div>

        {/* Photo Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(photo, index)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={photo.path || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Signature/branding element */}
        <div className="flex justify-center mt-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Enhanced Image Modal with animations */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <X size={20} />
              </button>

              {/* Navigation buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(-1)
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(1)
                }}
              >
                <ChevronRight size={24} />
              </button>

              {/* Image container */}
              <div className="relative h-[80vh]">
                <img
                  src={selectedImage.path || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Image info with subtle animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-black/70 p-6 absolute bottom-0 left-0 right-0 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
                <div className="h-px w-16 bg-purple-500 my-2"></div>
                <p className="text-gray-300 opacity-75">{`Image ${currentIndex + 1} of ${photos.length}`}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PhotoPortfolio
