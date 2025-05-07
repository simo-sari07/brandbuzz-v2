"use client"
import React from "react"
function MobileNavLinks({ setIsMenuOpen }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <nav className="flex flex-col w-full space-y-4 mt-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-white hover:text-blue-300 transition-colors py-3 border-b border-white/10 text-xl font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default MobileNavLinks
