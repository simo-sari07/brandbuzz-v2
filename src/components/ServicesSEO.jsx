"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, BarChart, Globe, Zap, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
// Import your SEO illustration
import seoIllustration from "../../public/SEO/2.jpg"
import React from "react"

const ServicesSEO = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Search className="h-6 w-6 text-purple-600" />,
      title: "Audit SEO",
      description:
        "Analyse complète de votre site web pour identifier les opportunités d'amélioration et les obstacles au référencement.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-600" />,
      title: "Mots-clés stratégiques",
      description:
        "Recherche et analyse des mots-clés pertinents pour votre secteur d'activité et votre audience cible.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "SEO technique",
      description:
        "Optimisation de la structure technique de votre site pour améliorer sa visibilité dans les moteurs de recherche.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "SEO On-page",
      description:
        "Optimisation du contenu et de la structure des pages pour maximiser leur pertinence pour les moteurs de recherche.",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Link Building",
      description: "Stratégie d'acquisition de liens de qualité pour renforcer l'autorité de votre site web.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Suivi et rapports",
      description:
        "Monitoring régulier des performances et rapports détaillés sur l'évolution de votre positionnement.",
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
    <section
      ref={sectionRef}
      id="seo-services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-purple-100 text-purple-700 mb-3">
              Référencement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
              Référencement SEO & SEA
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Notre équipe de professionnels expérimentés vous accompagnera dans la mise en œuvre d'une stratégie de
              référencement efficace pour maximiser votre visibilité en ligne et pour marquer une présence solide dans
              le monde du digital.
            </p>

            <div className="space-y-6 mb-8">
              {[
                "Analyse approfondie de votre site et de votre marché",
                "Stratégie SEO personnalisée selon vos objectifs",
                "Optimisation technique et sémantique",
                "Création de contenu optimisé pour le référencement",
                "Suivi régulier et ajustements stratégiques",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all flex items-center shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Positionnez Votre Site Web N°1 <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img src={seoIllustration || "/placeholder.svg"} alt="SEO Illustration" className="w-full h-auto" />
            </div>

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
        </div>

        <div className="mt-24">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos services d'optimisation SEO
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="bg-purple-100 rounded-full p-4 inline-block mb-4 group-hover:bg-purple-200 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23ffffff%27 fillOpacity=%270.2%27 fillRule=%27evenodd%27%3E%3Ccircle cx=%271%27 cy=%271%27 r=%271%27/%3E%3C/g%3E%3C/svg%3E')] bg-repeat bg-center"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Prêt à booster votre visibilité en ligne?</h3>
              <p className="text-blue-100 max-w-xl">
                Contactez-nous dès aujourd'hui pour une analyse gratuite de votre site web et découvrez comment nous
                pouvons améliorer votre positionnement dans les moteurs de recherche.
              </p>
            </div>
            <motion.button
              className="bg-white text-purple-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all flex items-center whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander une analyse gratuite <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSEO

