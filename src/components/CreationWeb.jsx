"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Zap, ShieldCheck, ArrowRight } from "lucide-react"
import React from "react"

const CreationWeb = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Développement sur mesure",
      description: "Sites web personnalisés adaptés à vos besoins spécifiques et à votre identité de marque.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "Design responsive",
      description: "Expérience utilisateur optimale sur tous les appareils, des smartphones aux grands écrans.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Performance optimisée",
      description: "Sites rapides et fluides pour une meilleure expérience utilisateur et un meilleur référencement.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
      title: "Sécurité renforcée",
      description: "Protection contre les menaces en ligne et conformité aux normes de sécurité actuelles.",
    },
  ]

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

  return (
    <section ref={sectionRef} id="creation-web" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img src="/web/web1.jpg" alt="Création web responsive" className="w-full h-auto rounded-lg shadow-xl" />
            </div>

            {/* Device mockups */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/web/web2.png" alt="Responsive devices" className="w-full h-auto" />
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-200 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-purple-100 text-purple-700 mb-3">
              Web Design
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
              Création web responsive
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Nous exploitons les nouvelles technologies et des outils performants pour créer des sites Web
              personnalisés offrant une navigation fluide et une expérience utilisateur optimale sur tous les appareils.
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-block mb-4 group-hover:bg-purple-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all flex items-center shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Créez Votre Site Web <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CreationWeb
