"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Send,
  Check,
  CheckCircle,
  Globe,
  BarChart2,
  Palette,
  TrendingUp,
  Zap,
  Award,
  Target,
  Layout,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import React from "react";

function HeroSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "medium", // Added budget field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1); // For multi-step form
  const [focusedField, setFocusedField] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formState.name.trim()) newErrors.name = "Name is required";
      if (!formState.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
        newErrors.email = "Valid email is required";
      }
    } else if (step === 2) {
      if (!formState.service) newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      // Create form data to send to Formspree
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("phone", formState.phone);
      formData.append(
        "service",
        formState.service === "website"
          ? "Website Development"
          : formState.service === "seo"
          ? "SEO Optimization"
          : formState.service === "design"
          ? "Design Services"
          : formState.service === "marketing"
          ? "Digital Marketing"
          : ""
      );
      formData.append(
        "budget",
        formState.budget === "small"
          ? "< 4,000 DH"
          : formState.budget === "medium"
          ? "6,000 DH - 10,000 DH"
          : "+15,000 DH"
      );
      formData.append("message", formState.message);

      // Send data to Formspree
      const response = await fetch("https://formspree.io/f/xbloyrry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Form submitted successfully
        setIsSubmitting(false);
        setIsSubmitted(true);
        setShowSuccessPopup(true);

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setShowSuccessPopup(false);
          setFormState({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            budget: "medium",
          });
          setCurrentStep(1);
        }, 5000);
      } else {
        // Handle error
        console.error("Form submission failed");
        setIsSubmitting(false);
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // Floating element variants
  const floatingAnimation = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Budget options
  const budgetOptions = [
    { value: "small", label: "< 4,000 DH", color: "from-blue-400 to-blue-500" },
    {
      value: "medium",
      label: "6,000 DH - 10,000 DH",
      color: "from-purple-400 to-purple-500",
    },
    {
      value: "enterprise",
      label: "+15,000 DH",
      color: "from-pink-400 to-pink-600",
    },
  ];

  // Service icons mapping - using Lucide icons for more professional look
  const serviceOptions = [
    {
      id: "website",
      name: "Website Development",
      icon: <Globe className="w-6 h-6 text-blue-300" />,
    },
    {
      id: "seo",
      name: "SEO Optimization",
      icon: <BarChart2 className="w-6 h-6 text-green-300" />,
    },
    {
      id: "design",
      name: "Design Services",
      icon: <Palette className="w-6 h-6 text-purple-300" />,
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: <TrendingUp className="w-6 h-6 text-pink-300" />,
    },
  ];

  // Additional service icons for display in summary
  const serviceIconsMap = {
    website: <Globe className="w-4 h-4 text-blue-300" />,
    seo: <BarChart2 className="w-4 h-4 text-green-300" />,
    design: <Palette className="w-4 h-4 text-purple-300" />,
    marketing: <TrendingUp className="w-4 h-4 text-pink-300" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 pt-12 px-6"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection className="w-full md:w-1/2" delay={0.2}>
            <div className="max-w-xl">
              <motion.div
                className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 mb-3 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Digital Experience Agency
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Transform
                </motion.span>{" "}
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  your vision with{" "}
                </motion.span>
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    BrandBuzz
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              <motion.p
                className="text-blue-100 text-lg mb-8 max-w-lg backdrop-blur-sm bg-blue-900/10 p-4 rounded-lg border border-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                We don't just build websites — we craft digital experiences that
                captivate, convert, and create lasting impressions. Elevate your
                brand with our cutting-edge design and strategic marketing
                solutions.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all flex items-center justify-center group shadow-lg shadow-blue-600/20"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  className="border border-blue-400 text-blue-300 hover:bg-blue-900/30 px-8 py-3 rounded-full transition-all backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(30, 64, 175, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  onClick={scrollToNextSection}
                >
                  Our Services
                </motion.button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="w-full md:w-1/2"
            delay={0.4}
            threshold={0.2}
          >
            <motion.div
              className="relative mx-auto max-w-md lg:max-w-lg bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Form Header with multi-step indicator */}
              <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2" /> Request a Free Quote
                </h3>
                <p className="text-blue-100 text-sm mt-1">
                  Get a personalized proposal for your project
                </p>

                {!isSubmitted && (
                  <div className="flex justify-between mt-4">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`flex flex-col items-center ${
                          currentStep === step ? "opacity-100" : "opacity-60"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 border-2 
                            ${
                              currentStep >= step
                                ? "bg-blue-500 border-white text-white"
                                : "bg-transparent border-blue-300/50 text-blue-200"
                            }`}
                        >
                          {currentStep > step ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            step
                          )}
                        </div>
                        <span className="text-xs text-blue-100">
                          {step === 1
                            ? "Info"
                            : step === 2
                            ? "Project"
                            : "Details"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Form */}
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xbloyrry"
                  method="POST"
                  className="p-6"
                >
                  {/* Step 1: Basic Info */}
                  {currentStep === 1 && (
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-blue-100 mb-1"
                        >
                          Full Name*
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "name"
                              ? "ring-2 ring-blue-500 rounded-lg"
                              : ""
                          }`}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/10 border ${
                              errors.name ? "border-red-400" : "border-white/20"
                            } rounded-lg focus:outline-none text-white placeholder-blue-200/70 transition-all duration-300`}
                            placeholder="John Doe"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "name" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        {errors.name && (
                          <motion.p
                            className="mt-1 text-xs text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-blue-100 mb-1"
                        >
                          Email Address*
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "email"
                              ? "ring-2 ring-blue-500 rounded-lg"
                              : ""
                          }`}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/10 border ${
                              errors.email
                                ? "border-red-400"
                                : "border-white/20"
                            } rounded-lg focus:outline-none text-white placeholder-blue-200/70 transition-all duration-300`}
                            placeholder="john@example.com"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "email" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        {errors.email && (
                          <motion.p
                            className="mt-1 text-xs text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-blue-100 mb-1"
                        >
                          Phone Number
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "phone"
                              ? "ring-2 ring-blue-500 rounded-lg"
                              : ""
                          }`}
                        >
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none text-white placeholder-blue-200/70 transition-all duration-300"
                            placeholder="+212 0000000"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "phone" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center mt-6"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Step 2: Service Selection */}
                  {currentStep === 2 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-3">
                          Service Needed*
                        </label>

                        <div className="grid grid-cols-2 gap-3">
                          {serviceOptions.map((service) => (
                            <motion.div
                              key={service.id}
                              className={`relative p-3 rounded-lg cursor-pointer border transition-all ${
                                formState.service === service.id
                                  ? "border-blue-400 bg-blue-600/20"
                                  : "border-white/20 bg-white/5 hover:bg-white/10"
                              }`}
                              onClick={() =>
                                setFormState({
                                  ...formState,
                                  service: service.id,
                                })
                              }
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                                  {service.icon}
                                </div>
                                <span className="text-sm text-blue-100">
                                  {service.name}
                                </span>
                                {formState.service === service.id && (
                                  <motion.div
                                    className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 30,
                                    }}
                                  >
                                    <Check className="w-3 h-3 text-white" />
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        {errors.service && (
                          <motion.p
                            className="mt-2 text-xs text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {errors.service}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-3">
                          Estimated Budget
                        </label>
                        <div className="space-y-3">
                          {budgetOptions.map((option) => (
                            <motion.div
                              key={option.value}
                              className={`relative p-3 rounded-lg cursor-pointer border transition-all ${
                                formState.budget === option.value
                                  ? "border-blue-400 bg-blue-600/20"
                                  : "border-white/20 bg-white/5 hover:bg-white/10"
                              }`}
                              onClick={() =>
                                setFormState({
                                  ...formState,
                                  budget: option.value,
                                })
                              }
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-blue-100">
                                  {option.label}
                                </span>
                                {formState.budget === option.value && (
                                  <motion.div
                                    className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 30,
                                    }}
                                  >
                                    <Check className="w-3 h-3 text-white" />
                                  </motion.div>
                                )}
                              </div>
                              {formState.budget === option.value && (
                                <motion.div
                                  className={`h-1 w-full mt-2 rounded-full bg-gradient-to-r ${option.color}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 0.5 }}
                                />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          className="w-1/3 border border-blue-400 text-blue-300 hover:bg-blue-900/30 py-3 px-4 rounded-lg transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          className="w-2/3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Next Step <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Final Details */}
                  {currentStep === 3 && (
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-blue-100 mb-1"
                        >
                          Project Details
                        </label>
                        <div
                          className={`relative ${
                            focusedField === "message"
                              ? "ring-2 ring-blue-500 rounded-lg"
                              : ""
                          }`}
                        >
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            rows="4"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none text-white placeholder-blue-200/70 transition-all duration-300"
                            placeholder="Tell us about your project goals, timeline, and specific requirements..."
                          ></textarea>
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "message" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Hidden fields to store service and budget values for Formspree */}
                      <input
                        type="hidden"
                        name="service_name"
                        value={
                          formState.service === "website"
                            ? "Website Development"
                            : formState.service === "seo"
                            ? "SEO Optimization"
                            : formState.service === "design"
                            ? "Design Services"
                            : formState.service === "marketing"
                            ? "Digital Marketing"
                            : ""
                        }
                      />
                      <input
                        type="hidden"
                        name="budget_range"
                        value={
                          formState.budget === "small"
                            ? "< 4,000 DH"
                            : formState.budget === "medium"
                            ? "6,000 DH - 10,000 DH"
                            : "+15,000 DH"
                        }
                      />

                      {/* Summary section */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-sm font-medium text-blue-200 mb-2 flex items-center">
                          <Layout className="w-4 h-4 mr-2" /> Quote Summary
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-blue-200/70">Name:</span>
                            <span className="text-white">{formState.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-200/70">Service:</span>
                            <span className="text-white flex items-center">
                              {serviceIconsMap[formState.service] && (
                                <span className="mr-1">
                                  {serviceIconsMap[formState.service]}
                                </span>
                              )}
                              {formState.service === "website"
                                ? "Website Development"
                                : formState.service === "seo"
                                ? "SEO Optimization"
                                : formState.service === "design"
                                ? "Design Services"
                                : formState.service === "marketing"
                                ? "Digital Marketing"
                                : ""}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-200/70">Budget:</span>
                            <span className="text-white">
                              {budgetOptions.find(
                                (o) => o.value === formState.budget
                              )?.label || ""}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          className="w-1/3 border border-blue-400 text-blue-300 hover:bg-blue-900/30 py-3 px-4 rounded-lg transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          className="w-2/3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Submit Request <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </form>
              ) : (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4"
                  >
                    <Check className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Thank you for your interest. We'll get back to you within 24
                    hours with a personalized proposal.
                  </p>
                  <motion.div
                    className="w-full bg-gray-700/50 h-1.5 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5 }}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -bottom-8 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-70 blur-sm"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-sm"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 blur-sm"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Success Popup - Enhanced version */}
      {showSuccessPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 rounded-xl shadow-2xl border border-blue-500/20 max-w-md w-full mx-4"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  rotate: { duration: 0.5, delay: 0.2 },
                }}
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center mb-6"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
              <p className="text-blue-100 mb-6">
                Your request has been submitted successfully. Our team will
                analyze your needs and get back to you with a custom proposal.
              </p>

              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-blue-300 mr-2" />
                    <span className="text-sm text-blue-100">Next Steps</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 py-1 px-2 rounded-full">
                    In Progress
                  </span>
                </div>

                <motion.div
                  className="w-full bg-blue-900/50 h-2 rounded-full overflow-hidden mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-blue-300 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-6 w-6 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
