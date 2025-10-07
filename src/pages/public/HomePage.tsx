import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Globe, Shield, Clock, Users, TrendingUp } from 'lucide-react'
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              Cargo & Freight Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Your trusted partner for authentic Nigerian food export and international logistics services worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigate('/services')}
                icon={<Package />}
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => navigate('/tracking')}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#003366]"
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
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins">10K+</div>
              <div className="text-white/80 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins">50+</div>
              <div className="text-white/80 mt-1">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins">98%</div>
              <div className="text-white/80 mt-1">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">We Do Operate</h2>
            <p className="text-gray-600 text-lg">Comprehensive logistics solutions for all your shipping needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Why Choose BUAN?</h2>
            <p className="text-gray-600 text-lg">We make international logistics simple, reliable, and affordable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock size={40} />, title: 'Fast Delivery', description: 'Express shipping options available' },
              { icon: <Shield size={40} />, title: 'Secure Shipping', description: 'Insurance and tracking included' },
              { icon: <Globe size={40} />, title: 'Global Reach', description: 'Delivering to 50+ countries' },
              { icon: <Users size={40} />, title: '24/7 Support', description: 'Always here to help you' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="text-center min-h-[180px] flex flex-col justify-center">
                  <div className="text-[#003366] mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive logistics solutions for all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="text-center mt-8">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => navigate('/services')}
              icon={<ArrowRight />}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of satisfied customers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} hover>
                <div className="flex items-start mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold font-poppins">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent-gold">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#3399FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers enjoying authentic Nigerian food worldwide</p>
          <Button 
            variant="outline" 
            size="large"
            onClick={() => navigate('/register')}
            className="bg-white text-[#003366] hover:bg-white/90"
          >
            Create Your Account Today
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}

