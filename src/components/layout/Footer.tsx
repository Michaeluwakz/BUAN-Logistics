import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">
              <span className="text-[#003366]">BUA</span>
              <span className="text-[#3399FF]">N</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Live Abroad, Eat From Home. Your trusted partner in Nigerian food export and international logistics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#003366] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#003366] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#003366] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#003366] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-poppins text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-poppins text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/food-export" className="text-gray-400 hover:text-white transition-colors">Food Export</Link></li>
              <li><Link to="/services/air-cargo" className="text-gray-400 hover:text-white transition-colors">Air & Sea Cargo</Link></li>
              <li><Link to="/services/procurement" className="text-gray-400 hover:text-white transition-colors">Procurement</Link></li>
              <li><Link to="/services/customs" className="text-gray-400 hover:text-white transition-colors">Custom Clearance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-poppins text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#003366] mr-2 mt-1" />
                <span className="text-gray-400">123 Export Drive, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#003366] mr-2" />
                <span className="text-gray-400">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#003366] mr-2" />
                <span className="text-gray-400">info@buanlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BUAN Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

