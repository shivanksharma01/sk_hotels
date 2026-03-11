import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900  font-heading tracking-wide">S.K <span className="text-red-500">Hotels</span></h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 list-none m-0 p-0">
            <li><Link to="/" className="text-gray-600 no-underline text-sm font-medium hover:text-red-500 transition-colors duration-300">Home</Link></li>
            <li><a href="#about" className="text-gray-600 no-underline text-sm font-medium hover:text-red-500 transition-colors duration-300">About</a></li>
            <li><Link to="/" className="text-gray-600 no-underline text-sm font-medium hover:text-red-500 transition-colors duration-300">Rooms</Link></li>
            <li><Link to="/booking" className="text-gray-600 no-underline text-sm font-medium hover:text-red-500 transition-colors duration-300">Booking</Link></li>
            <li><Link to="/contact" className="text-gray-600 no-underline text-sm font-medium hover:text-red-500 transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <Link to="/booking" className="hidden md:block bg-red-500 text-white border-none px-5 py-2 text-sm font-medium rounded-xl cursor-pointer hover:bg-red-600 transition-colors duration-300 no-underline">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 text-xl cursor-pointer bg-transparent border-none p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col list-none m-0 p-4 gap-3">
            <li><Link to="/" onClick={toggleMenu} className="text-gray-600 no-underline text-sm font-medium block py-2">Home</Link></li>
            <li><a href="#about" onClick={toggleMenu} className="text-gray-600 no-underline text-sm font-medium block py-2">About</a></li>
            <li><Link to="/" onClick={toggleMenu} className="text-gray-600 no-underline text-sm font-medium block py-2">Rooms</Link></li>
            <li><Link to="/booking" onClick={toggleMenu} className="text-gray-600 no-underline text-sm font-medium block py-2">Booking</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="text-gray-600 no-underline text-sm font-medium block py-2">Contact</Link></li>
            <li>
              <Link to="/booking" onClick={toggleMenu} className="w-full bg-red-500 text-white border-none px-5 py-2 text-sm font-medium rounded cursor-pointer hover:bg-red-600 transition-colors duration-300 mt-2 block text-center no-underline">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
