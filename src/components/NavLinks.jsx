"use client"
import React from "react"
function NavLinks({ scrolled }) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-colors duration-300 text-base ${
            scrolled ? "text-black hover:text-blue-600" : "text-white hover:text-blue-300"
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  )
}

export default NavLinks
