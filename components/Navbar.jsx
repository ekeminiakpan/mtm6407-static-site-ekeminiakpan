'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">Ekemini Akpan</Link>
        </div>
        <button 
          className="menu-button" 
          onClick={toggleMenu} 
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About Me</Link></li>
          <li><Link href="/projects" onClick={toggleMenu}>My Designs</Link></li>
          <li><Link href="/experience" onClick={toggleMenu}>My Journey</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Get in Touch</Link></li>
        </ul>
      </div>
    </nav>
  )
}
