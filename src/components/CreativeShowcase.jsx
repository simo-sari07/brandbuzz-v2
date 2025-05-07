"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import design1 from "../../public/design/1.jpeg";
import design2 from "../../public/design/2.jpeg";
import design3 from "../../public/design/3.jpeg";
import design4 from "../../public/design/4.jpeg";
import design5 from "../../public/design/5.jpeg";
import design6 from "../../public/design/6.jpg";
import design7 from "../../public/design/7.jpeg";
import design8 from "../../public/design/8.jpeg";
import design9 from "../../public/design/9.jpeg";
import design10 from "../../public/design/10.jpeg";
import design11 from "../../public/design/11.jpeg";
import design12 from "../../public/design/12.jpeg";
import design13 from "../../public/design/13.jpeg";
import design14 from "../../public/design/14.jpeg";
import design15 from "../../public/design/15.jpeg";
import design16 from "../../public/design/16.jpeg";
import design17 from "../../public/design/17.jpeg";
import design18 from "../../public/design/18.jpeg";

import React from "react";
function CreativeShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 12;

  // Track mouse position for background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // All project data from the design folder
  const allProjectData = [
    { id: 1, path: design1, title: "Culinary Arts", category: "Food" },
    { id: 2, path: design2, title: "Food Experience", category: "Restaurant" },
    { id: 3, path: design3, title: "Gourmet Dish", category: "Menu" },
    { id: 4, path: design4, title: "Movie Poster", category: "Entertainment" },
    { id: 5, path: design5, title: "Event Promotion", category: "Marketing" },
    { id: 6, path: design6, title: "Coffee Experience", category: "Lifestyle" },
    { id: 7, path: design7, title: "Restaurant Menu", category: "Print" },
    { id: 8, path: design8, title: "Food Delivery", category: "Service" },
    { id: 9, path: design9, title: "Music Event", category: "Concert" },
    { id: 10, path: design10, title: "Night Club", category: "Event" },
    { id: 11, path: design11, title: "Pink Party", category: "Nightlife" },
    { id: 12, path: design12, title: "Club Event", category: "Party" },
    { id: 13, path: design13, title: "DJ Performance", category: "Music" },
    { id: 14, path: design14, title: "Festival Lineup", category: "Event" },
    { id: 15, path: design15, title: "Artist Showcase", category: "Music" },
    { id: 16, path: design16, title: "Fashion Event", category: "Luxury" },
    { id: 17, path: design17, title: "Product Launch", category: "Marketing" },
    { id: 18, path: design18, title: "Fashion Show", category: "Event" },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(allProjectData.length / itemsPerPage);

  // Get current page items
  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return allProjectData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle image click to show larger version
  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative min-h-screen py-12 overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 29, 149, 0.4) 0%, rgba(0, 0, 0, 1) 60%)`,
            transition: "background 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Animated lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full left-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              style={{
                top: `${(i + 1) * 20}%`,
                transform: `translateY(-50%) translateX(${
                  Math.sin(Date.now() / 3000 + i) * 10
                }%)`,
                opacity: 0.3 + Math.sin(Date.now() / 2000 + i) * 0.2,
              }}
            />
          ))}

          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full top-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
              style={{
                left: `${(i + 1) * 20}%`,
                transform: `translateX(-50%) translateY(${
                  Math.sin(Date.now() / 3000 + i) * 10
                }%)`,
                opacity: 0.3 + Math.sin(Date.now() / 2000 + i) * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            <span className="bg-gradient-to-br from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Design Portfolio
            </span>
          </h2>

          <p className="text-purple-200/80 max-w-2xl mx-auto text-sm">
            BrandBuzz Agency Creative Works
          </p>
        </motion.div>

        {/* Compact grid with more columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {getCurrentItems().map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleImageClick(project)}
            >
              {/* Compact card */}
              <div
                className="relative overflow-hidden rounded-md shadow-lg cursor-pointer"
                style={{
                  transition: "all 0.3s ease-out",
                }}
              >
                {/* Card image - preserving original aspect ratio */}
                <div className="relative w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.path || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />

                  {/* New hover effect - subtle glow instead of scaling */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        hoveredCard === index
                          ? `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 70%)`
                          : "none",
                      opacity: hoveredCard === index ? 1 : 0,
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Subtle border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-md transition-all duration-300"
                    style={{
                      boxShadow:
                        hoveredCard === index
                          ? "inset 0 0 15px rgba(139, 92, 246, 0.5)"
                          : "none",
                      opacity: hoveredCard === index ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact pagination */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className="w-6 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    currentPage === index
                      ? "rgba(139, 92, 246, 1)"
                      : "rgba(139, 92, 246, 0.3)",
                }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <button
            className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage === totalPages - 1}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox for showing larger images when clicked */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large image */}
              <img
                src={selectedImage.path || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-purple-300 text-sm">
                  {selectedImage.category}
                </p>
              </div>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CreativeShowcase;
