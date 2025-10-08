import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { useApp } from '../../contexts/AppContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const { state } = useApp()
  const navigate = useNavigate()

  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold font-poppins">
              <span className="text-[#003366]">BUA</span>
              <span className="text-[#3399FF]">N</span>
            </span>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">Logistics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
              Home
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-[#003366] transition-colors font-medium">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                  >
                    <Link to="/services/food-export" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                      Nigerian Food Export
                    </Link>
                    <Link to="/services/air-cargo" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                      Air & Sea Cargo
                    </Link>
                    <Link to="/services/procurement" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">
                      International Procurement
                    </Link>
                    <Link to="/services" className="block px-4 py-2 hover:bg-gray-50 text-[#003366] font-medium">
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/tracking" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
              Track Order
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {state.isAuthenticated ? (
              <>
                  <button
                  onClick={() => navigate('/checkout')}
                  className="relative p-2 text-gray-700 hover:text-[#003366] transition-colors"
                >
                  <ShoppingCart size={24} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#003366] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="p-2 text-gray-700 hover:text-[#003366] transition-colors"
                >
                  <User size={24} />
                </button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="small" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button variant="primary" size="small" onClick={() => navigate('/register')}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-200 py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
                  Services
                </Link>
                <Link to="/tracking" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
                  Track Order
                </Link>
                {state.isAuthenticated ? (
                  <>
                    <Link to="/dashboard" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
                      Dashboard
                    </Link>
                    <Link to="/checkout" className="text-gray-700 hover:text-[#003366] transition-colors font-medium flex items-center">
                      Cart {cartItemCount > 0 && `(${cartItemCount})`}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
                      Login
                    </Link>
                    <Link to="/register">
                      <Button variant="primary" size="small" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

