import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import ServiceCard from '../../components/ui/ServiceCard'
import { mockServices } from '../../data/mockData'

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = mockServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#003366] to-[#3399FF] text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-2 sm:mb-3 md:mb-4">Our Services</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-2">
              Comprehensive logistics solutions tailored to your needs
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard
                    id={service.id}
                    icon={service.icon}
                    title={service.name}
                    description={service.description}
                    features={service.features}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 md:py-16">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">No services found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366] mb-1 sm:mb-2">24/7</div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Customer Support</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Always available to assist you</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3399FF] mb-1 sm:mb-2">100%</div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Secure Shipping</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Your items are fully insured</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366] mb-1 sm:mb-2">50+</div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Countries</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Worldwide delivery network</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

