import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, Package } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import FoodCard from '../../components/ui/FoodCard'
import { mockServices, mockFoodItems } from '../../data/mockData'

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  
  const service = mockServices.find(s => s.id === serviceId)

  if (!service) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/services')}>Back to Services</Button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#003366] to-[#3399FF]">
        {service.image && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${service.image})` }}
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <button
              onClick={() => navigate('/services')}
              className="flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </button>
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-5xl font-bold font-poppins mb-4">{service.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-3xl font-bold font-poppins mb-6">Service Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3399FF] text-white flex items-center justify-center mr-3">
                        <Check size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="mt-8">
                <h2 className="text-3xl font-bold font-poppins mb-6">How It Works</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: 'Place Your Order', description: 'Select your service and provide shipping details' },
                    { step: 2, title: 'We Process', description: 'Our team handles packaging, documentation, and logistics' },
                    { step: 3, title: 'Track Shipment', description: 'Monitor your order in real-time with our tracking system' },
                    { step: 4, title: 'Receive', description: 'Your items arrive safely at your doorstep' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-4">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-poppins mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Pricing Sidebar */}
            <div>
              <Card className="sticky top-24">
                <h3 className="text-2xl font-bold font-poppins mb-4">Pricing</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Base Fee</span>
                    <span className="text-2xl font-bold text-[#003366]">${service.pricing.base}</span>
                  </div>
                  {service.pricing.perKg && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Per Kilogram</span>
                      <span className="font-semibold">${service.pricing.perKg}</span>
                    </div>
                  )}
                  {service.pricing.perCbm && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Per CBM</span>
                      <span className="font-semibold">${service.pricing.perCbm}</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="primary" 
                  size="large" 
                  className="w-full"
                  icon={<Package />}
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  * Final pricing may vary based on weight, destination, and additional services
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Food Items Section (for food-export service) */}
      {serviceId === 'food-export' && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-poppins mb-8 text-center">Popular Food Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockFoodItems.slice(0, 4).map((item) => (
                <FoodCard key={item.id} foodItem={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

