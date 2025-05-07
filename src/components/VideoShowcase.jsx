"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Film, X, Volume2, VolumeX, Clock, Tag, Maximize } from "lucide-react"
import  React from "react"

function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRefs = useRef({})
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  // Videos data with paths from your file system
  const videos = [
    {
      id: "vd1",
      title: "Video 1",
      category: "Music Video",
      description:
        "A cinematic urban exploration featuring architecturall elements and city rhythms. This piece combines dynamic camera movements with precise editing to create a compelling visual narrative.",
      src: "https://res.cloudinary.com/da63nggkh/video/upload/v1745088005/I_Believe_to_My_Soul_Remastered_szdd5t.mp4",
      thumbnail: "/videos/vd1.mov",
      duration: "2:45",
      year: "2023",
      client: "Client 1",
      tags: ["Urban", "Architecture", "Cinematic"],
      featured: true,
      color: "from-rose-500 to-orange-500",
      accent: "bg-orange-500",
    },
    {
      id: "vd2",
      title: "Video 2",
      category: "Music Video",
      description:
        "A remastered classic bringing new life to timeless emotions through visual storytelling. This project focuses on authentic human moments captured with a documentary-style approach.",
      src: "https://res.cloudinary.com/da63nggkh/video/upload/v1745088791/dfyqrzcayzjh0li5jjf2.mp4",
      thumbnail: "/videos/vd2.MP4",
      duration: "3:12",
      year: "2022",
      client: "Client 2",
      tags: ["Remaster", "Vintage", "Emotional"],
      color: "from-cyan-500 to-blue-500",
      accent: "bg-blue-500",
    },
    {
      id: "vd3",
      title: "Video 3",
      category: "Experimental",
      description:
        "Abstract visual poetry exploring organic forms and fluid movements. This experimental piece pushes the boundaries of conventional editing to create a hypnotic visual experience.",
      src: "https://res.cloudinary.com/da63nggkh/video/upload/v1746572234/IMG_5445_hotarv.mp4",
      thumbnail: "/videos/vd3.mp4",
      duration: "1:58",
      year: "2023",
      client: "Personal Project",
      tags: ["Abstract", "Artistic", "Fluid"],
      color: "from-purple-500 to-indigo-500",
      accent: "bg-purple-500",
    },
  ]

  // Get featured video or first video
  const featuredVideo = videos.find((video) => video.featured) || videos[0]

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Handle video playback
  useEffect(() => {
    // Pause all videos first
    Object.values(videoRefs.current).forEach((ref) => {
      if (ref && ref !== videoRefs.current.fullscreen) {
        ref.pause()
      }
    })

    // Play the active video if isPlaying is true
    if (isPlaying && activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].play()
    }
  }, [activeVideo, isPlaying])

  const handleVideoClick = (index) => {
    setActiveVideo(index)
    setIsPlaying(true)
    // Start with non-fullscreen mode
    setIsFullscreen(false)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  const handleCloseVideo = (e) => {
    // Stop propagation to prevent the click from reaching elements underneath
    e.stopPropagation()
    setActiveVideo(null)
    setIsPlaying(false)
    setIsFullscreen(false)
  }

  const toggleMute = (e) => {
    // Stop propagation to prevent the click from reaching elements underneath
    e.stopPropagation()
    setIsMuted(!isMuted)

    // Apply mute state to all videos
    Object.values(videoRefs.current).forEach((ref) => {
      if (ref) {
        ref.muted = !isMuted
      }
    })
  }

  const toggleFullscreen = (e) => {
    e.stopPropagation()
    setIsFullscreen(!isFullscreen)
  }

  // Handle click outside video to close it
  const handleModalBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop, not on the video
    if (e.target === e.currentTarget) {
      setActiveVideo(null)
      setIsPlaying(false)
      setIsFullscreen(false)
    }
  }

  // Prevent video click from propagating to modal backdrop
  const handleVideoContainerClick = (e) => {
    e.stopPropagation()
  }

  return (
    <section
      ref={sectionRef}
      id="video-editing"
      className="py-20 bg-gradient-to-br from-black to-indigo-950 text-white overflow-hidden relative"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/design/21.JPG')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block text-sm font-semibold py-1 px-4 rounded-full bg-purple-600/30 text-purple-300 mb-2"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Cinematic Excellence
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Visual Storytelling
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We craft compelling visual narratives through expert editing, color grading, and motion design
          </motion.p>
        </motion.div>

        {/* Creative Video Showcase - Staggered Layout */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Film className="mr-2 h-6 w-6 text-purple-400" />
            <h3 className="text-2xl font-bold">Featured Works</h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className={`relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 ${index % 2 === 0 ? "md:ml-0 md:mr-12" : "md:ml-12 md:mr-0"}`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Video Thumbnail with Gradient Overlay */}
                  <div className="relative aspect-video md:w-1/2">
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-30 z-10"
                      style={{
                        background: `linear-gradient(to bottom right, ${video.color.split(" ")[0].replace("from-", "")}, ${video.color.split(" ")[1].replace("to-", "")})`,
                      }}
                    ></div>
                    <video
                      ref={(el) => (videoRefs.current[`preview-${index}`] = el)}
                      src={video.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop
                      autoPlay
                    ></video>

                    {/* Play Button */}
                    <div
                      className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                      onClick={() => handleVideoClick(index)}
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${video.color} flex items-center justify-center shadow-lg`}
                      >
                        <Play className="h-7 w-7 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full ${video.accent} text-white text-xs font-medium`}>
                        {video.category}
                      </span>
                      <span className="text-sm text-gray-300">{video.year}</span>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-3">{video.title}</h4>

                    <p className="text-gray-300 mb-4">{video.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {video.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs text-white border border-white/20 flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process section with glass cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
              <span className="text-xl font-bold text-purple-300">01</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Concept & Vision</h3>
            <p className="text-gray-300">
              We develop a precise creative vision that aligns with your brand identity, translating your goals into a
              compelling visual language that resonates with your audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
              <span className="text-xl font-bold text-blue-300">02</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Advanced Editing</h3>
            <p className="text-gray-300">
              Our editing experts craft perfect pacing and rhythm, using advanced techniques to create seamless
              transitions and dynamic sequences that enhance viewer engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-900/20 to-indigo-900/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
              <span className="text-xl font-bold text-indigo-300">03</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Cinematic Finishing</h3>
            <p className="text-gray-300">
              We apply sophisticated color grading, visual effects, and sound design to create a distinctive cinematic
              look that maximizes emotional impact and professional polish.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-md p-8 border border-white/10 max-w-4xl mx-auto"
        >
          {/* Decorative elements */}
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="text-center relative z-10">
            <h3 className="text-3xl font-bold mb-3 text-white">Ready to elevate your visual content?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let our team of expert editors and visual storytellers transform your ideas into compelling visual
              narratives that captivate your audience and strengthen your brand.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium shadow-lg shadow-purple-500/20 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Start Creating
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen video modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalBackdropClick}
          >
            <motion.div
              className={`relative ${isFullscreen ? "w-full max-w-[90vw] h-[80vh]" : "w-full max-w-[600px] aspect-video"}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleVideoContainerClick}
            >
              <video
                ref={(el) => el && (videoRefs.current.fullscreen = el)}
                src={videos[activeVideo].src}
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                muted={isMuted}
                onEnded={handleVideoEnd}
              ></video>

              {/* Control buttons with improved visibility and positioning */}
              <div className="absolute top-4 right-4 flex space-x-3 z-50">
                {/* Fullscreen toggle button */}
                <button
                  className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-white/20 shadow-lg"
                  onClick={toggleFullscreen}
                >
                  <Maximize className="h-6 w-6" />
                </button>

                {/* Mute button */}
                <button
                  className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-white/20 shadow-lg"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </button>

                {/* Close button */}
                <button
                  className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-white/20 shadow-lg"
                  onClick={handleCloseVideo}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Overlay instructions - visible briefly */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm">
                  Click outside video or X button to close
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle gradient footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  )
}

export default VideoShowcase
