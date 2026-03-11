import React from 'react'
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">S.K <span className="text-red-500">Hotels</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury and comfort at S.K Hotels. We provide the best accommodation experience for your travels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><a href="#home" className="text-gray-400 no-underline text-sm hover:text-red-500 transition-colors duration-300">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-gray-400 no-underline text-sm hover:text-red-500 transition-colors duration-300">About Us</a></li>
              <li className="mb-2"><a href="#rooms" className="text-gray-400 no-underline text-sm hover:text-red-500 transition-colors duration-300">Rooms</a></li>
              <li className="mb-2"><a href="#booking" className="text-gray-400 no-underline text-sm hover:text-red-500 transition-colors duration-300">Booking</a></li>
              <li className="mb-2"><a href="#contact" className="text-gray-400 no-underline text-sm hover:text-red-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2 text-gray-400 text-sm flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Hotel Street, City, Country</span>
              </li>
              <li className="mb-2 text-gray-400 text-sm flex items-center gap-2">
                <Phone size={16} />
                <span>+1 234 567 890</span>
              </li>
              <li className="mb-2 text-gray-400 text-sm flex items-center gap-2">
                <Mail size={16} />
                <span>info@skhotels.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} S.K Hotels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
