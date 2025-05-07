"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import MobileNavLinks from "./MobileNavLinks"
import React from "react"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Overlay for entire page when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          style={{ zIndex: 9998 }}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md text-gray-800 py-3"
            : "bg-transparent text-white py-4 md:py-6"
        }`}
        style={{
          zIndex: 9999,
          willChange: "transform",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <NavLinks scrolled={scrolled} />
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg text-sm font-medium"
                aria-label="Contact Us"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 rounded-full ${
                scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
          style={{ zIndex: 9999 }}
          aria-hidden={!isMenuOpen}
        >
          {/* Close button for mobile menu */}
          <button
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full pt-20 px-6">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />

            <div className="mt-auto mb-12 pt-6">
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full transition-all shadow-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
