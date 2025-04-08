"use client";

// Import components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import CreativeShowcase from "./components/CreativeShowcase";
import NosProjects from "./components/NosProjects";
import ServicesSEO from "./components/ServicesSEO";
import CreationWeb from "./components/CreationWeb";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import React from "react";
import VideoShowcase from "./components/VideoShowcase";
import Faq from "./components/Faq";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Whatsapp />

      {/* Header */}
      <Header />

      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <CreationWeb />
        <ServicesSEO />
        <NosProjects />
        <CreativeShowcase />
        <VideoShowcase />
        <Faq />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
