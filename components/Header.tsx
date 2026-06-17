import React from 'react'

function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center gap-4 sm:gap-10 border-b border-white/20 bg-black/80 py-4 sm:py-6 text-[10px] sm:text-sm tracking-[0.2em]">
      <a href="#home" className="hover:text-gray-300 transition">
        HOME
      </a>

      <span className="text-white/30">|</span>

      <a href="#skill" className="hover:text-gray-300 transition" >
        Skills
      </a>

      <span className="text-white/30">|</span>

      <a href="#history" className="hover:text-gray-300 transition">
        WORKS
      </a>

      <span className="text-white/30">|</span>

      <a href="#contact" className="hover:text-gray-300 transition">
        CONTACT
      </a>
    </header>
  )
}

export default Header
