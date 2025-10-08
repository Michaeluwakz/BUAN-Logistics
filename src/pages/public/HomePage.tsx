import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Globe, Shield, Clock, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'
import ServiceCard from '../../components/ui/ServiceCard'
import Card from '../../components/ui/Card'
import { mockServices, testimonials } from '../../data/mockData'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] via-[#3399FF] to-white text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 sm:mb-6">
              Cargo & Freight Company
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-2">
              Your trusted partner for authentic Nigerian food export and international logistics services worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigate('/services')}
                icon={<Package className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="text-sm sm:text-base py-2 sm:py-3"
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => navigate('/tracking')}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#003366] text-sm sm:text-base py-2 sm:py-3"
              >
                Track Your Order
              </Button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">10K+</div>
              <div className="text-white/80 mt-1 text-xs sm:text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">50+</div>
              <div className="text-white/80 mt-1 text-xs sm:text-sm md:text-base">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">98%</div>
              <div className="text-white/80 mt-1 text-xs sm:text-sm md:text-base">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2 sm:mb-4">We Do Operate</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Comprehensive logistics solutions</p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center min-h-[140px] flex flex-col justify-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Air Cargo</h3>
                <p className="text-gray-600 text-sm">🇬🇧🇦🇺🇮🇪🇳🇱 🇺🇸</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center min-h-[140px] flex flex-col justify-center">
                <div className="text-4xl mb-4">⛴️</div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Sea Cargo</h3>
                <p className="text-gray-600 text-sm">🇬🇧🇦🇺🇮🇪</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center min-h-[140px] flex flex-col justify-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Warehousing</h3>
                <p className="text-gray-600 text-sm">in UK</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center min-h-[140px] flex flex-col justify-center">
                <div className="text-4xl mb-4">🛫🛳️</div>
                <h3 className="text-lg font-semibold font-poppins mb-2">Import Services</h3>
                <p className="text-gray-600 text-sm">from 🇬🇧 and 🇮🇪</p>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Continuous Slideshow */}
          <div className="md:hidden relative">
            <div className="flex gap-3 animate-scroll">
              {/* First set of cards */}
              {[
                { emoji: '✈️', title: 'Air Cargo', flags: '🇬🇧🇦🇺🇮🇪🇳🇱 🇺🇸' },
                { emoji: '⛴️', title: 'Sea Cargo', flags: '🇬🇧🇦🇺🇮🇪' },
                { emoji: '🏛️', title: 'Warehousing', flags: 'in UK' },
                { emoji: '🛫🛳️', title: 'Import Services', flags: 'from 🇬🇧 and 🇮🇪' }
              ].map((item, idx) => (
                <div 
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-[180px] bg-white rounded-lg shadow-md border border-gray-200 p-4 text-center"
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <h3 className="text-sm font-semibold font-poppins mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.flags}</p>
                </div>
              ))}
              {/* Duplicate set for continuous effect */}
              {[
                { emoji: '✈️', title: 'Air Cargo', flags: '🇬🇧🇦🇺🇮🇪🇳🇱 🇺🇸' },
                { emoji: '⛴️', title: 'Sea Cargo', flags: '🇬🇧🇦🇺🇮🇪' },
                { emoji: '🏛️', title: 'Warehousing', flags: 'in UK' },
                { emoji: '🛫🛳️', title: 'Import Services', flags: 'from 🇬🇧 and 🇮🇪' }
              ].map((item, idx) => (
                <div 
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-[180px] bg-white rounded-lg shadow-md border border-gray-200 p-4 text-center"
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <h3 className="text-sm font-semibold font-poppins mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.flags}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2 sm:mb-4">Why Choose BUAN?</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">We make international logistics simple and reliable</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Clock size={32} className="sm:w-10 sm:h-10" />, title: 'Fast Delivery', description: 'Express shipping options' },
              { icon: <Shield size={32} className="sm:w-10 sm:h-10" />, title: 'Secure Shipping', description: 'Insurance & tracking' },
              { icon: <Globe size={32} className="sm:w-10 sm:h-10" />, title: 'Global Reach', description: '50+ countries' },
              { icon: <Users size={32} className="sm:w-10 sm:h-10" />, title: '24/7 Support', description: 'Always here for you' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="text-center min-h-[150px] sm:min-h-[180px] flex flex-col justify-center p-4 sm:p-6">
                  <div className="text-[#003366] mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2 sm:mb-4">Our Services</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Comprehensive logistics solutions</p>
          </div>

          {/* Mobile: 2 Row Horizontal Scroll */}
          <div className="sm:hidden space-y-4">
            {/* First Row - First 2 Services */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex gap-3 min-w-max">
                {mockServices.slice(0, 2).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[280px] flex-shrink-0"
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
            </div>

            {/* Second Row - Last 2 Services */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex gap-3 min-w-max">
                {mockServices.slice(2, 4).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[280px] flex-shrink-0"
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
            </div>
          </div>

          {/* Tablet & Desktop: Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mockServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
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

          <div className="text-center mt-6 sm:mt-8">
            <Button 
              variant="primary" 
              size="small"
              onClick={() => navigate('/services')}
              icon={<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              className="text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-3"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-2 sm:mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Trusted by thousands worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} hover className="p-3 sm:p-4 md:p-6">
                <div className="flex items-start mb-2 sm:mb-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mr-2 sm:mr-3"
                  />
                  <div>
                    <h4 className="font-semibold font-poppins text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-600">{testimonial.location}</p>
                    <div className="flex mt-0.5 sm:mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent-gold text-xs sm:text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-xs sm:text-sm md:text-base leading-relaxed">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-[#003366] to-[#3399FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-2 sm:mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">Join thousands of satisfied customers enjoying authentic Nigerian food worldwide</p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="small"
              onClick={() => navigate('/register')}
              className="bg-white text-[#003366] hover:bg-white/90 text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3"
            >
              Create Your Account Today
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

