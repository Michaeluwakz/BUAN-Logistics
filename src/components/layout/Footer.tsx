import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Company Info - Always visible */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-2 sm:mb-3">
            <span className="text-[#003366]">BUA</span>
            <span className="text-[#3399FF]">N</span>
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
            Live Abroad, Eat From Home. Your trusted partner in Nigerian food export and international logistics.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#3399FF] transition-colors">
              <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3399FF] transition-colors">
              <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3399FF] transition-colors">
              <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3399FF] transition-colors">
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="md:hidden space-y-3 border-t border-gray-800 pt-4">
          {/* Quick Links */}
          <div className="border-b border-gray-800 pb-3">
            <button
              onClick={() => toggleSection('quick-links')}
              className="w-full flex justify-between items-center text-left font-semibold font-poppins text-sm"
            >
              Quick Links
              <ChevronDown
                size={18}
                className={`transform transition-transform ${openSection === 'quick-links' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'quick-links' && (
              <ul className="mt-3 space-y-2 text-xs">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/tracking" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            )}
          </div>

          {/* Our Services */}
          <div className="border-b border-gray-800 pb-3">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex justify-between items-center text-left font-semibold font-poppins text-sm"
            >
              Our Services
              <ChevronDown
                size={18}
                className={`transform transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'services' && (
              <ul className="mt-3 space-y-2 text-xs">
                <li><Link to="/services/food-export" className="text-gray-400 hover:text-white transition-colors">Food Export</Link></li>
                <li><Link to="/services/air-cargo" className="text-gray-400 hover:text-white transition-colors">Air & Sea Cargo</Link></li>
                <li><Link to="/services/procurement" className="text-gray-400 hover:text-white transition-colors">Procurement</Link></li>
                <li><Link to="/services/customs" className="text-gray-400 hover:text-white transition-colors">Custom Clearance</Link></li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <div className="border-b border-gray-800 pb-3">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex justify-between items-center text-left font-semibold font-poppins text-sm"
            >
              Contact Us
              <ChevronDown
                size={18}
                className={`transform transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'contact' && (
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start">
                  <MapPin size={14} className="text-[#3399FF] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">123 Export Drive, Lagos, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <Phone size={14} className="text-[#3399FF] mr-2 flex-shrink-0" />
                  <span className="text-gray-400">+234 800 123 4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={14} className="text-[#3399FF] mr-2 flex-shrink-0" />
                  <span className="text-gray-400">info@buanlogistics.com</span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 border-t border-gray-800 pt-6">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins text-base mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-poppins text-base mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/food-export" className="text-gray-400 hover:text-white transition-colors">Food Export</Link></li>
              <li><Link to="/services/air-cargo" className="text-gray-400 hover:text-white transition-colors">Air & Sea Cargo</Link></li>
              <li><Link to="/services/procurement" className="text-gray-400 hover:text-white transition-colors">Procurement</Link></li>
              <li><Link to="/services/customs" className="text-gray-400 hover:text-white transition-colors">Custom Clearance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-poppins text-base mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="text-[#3399FF] mr-2 mt-1" />
                <span className="text-gray-400">123 Export Drive, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#3399FF] mr-2" />
                <span className="text-gray-400">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-[#3399FF] mr-2" />
                <span className="text-gray-400">info@buanlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2025 BUAN Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

