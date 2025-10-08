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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/services')} size="small" className="text-sm sm:text-base">Back to Services</Button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#003366] to-[#3399FF]">
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
              className="flex items-center text-white/90 hover:text-white mb-3 sm:mb-4 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
              Back to Services
            </button>
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4">{service.icon}</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-2 sm:mb-3 md:mb-4">{service.name}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Features */}
            <div className="lg:col-span-2">
              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins mb-4 sm:mb-6">Service Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3399FF] text-white flex items-center justify-center mr-2 sm:mr-3">
                        <Check size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins mb-4 sm:mb-6">How It Works</h2>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { step: 1, title: 'Place Your Order', description: 'Select your service and provide shipping details' },
                    { step: 2, title: 'We Process', description: 'Our team handles packaging, documentation, and logistics' },
                    { step: 3, title: 'Track Shipment', description: 'Monitor your order in real-time with our tracking system' },
                    { step: 4, title: 'Receive', description: 'Your items arrive safely at your doorstep' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Pricing Sidebar */}
            <div>
              <Card className="lg:sticky lg:top-24 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-3 sm:mb-4">Pricing</h3>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center pb-3 sm:pb-4 border-b">
                    <span className="text-gray-600 text-sm sm:text-base">Base Fee</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#003366]">${service.pricing.base}</span>
                  </div>
                  {service.pricing.perKg && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Per Kilogram</span>
                      <span className="font-semibold text-sm sm:text-base">${service.pricing.perKg}</span>
                    </div>
                  )}
                  {service.pricing.perCbm && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Per CBM</span>
                      <span className="font-semibold text-sm sm:text-base">${service.pricing.perCbm}</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="primary" 
                  size="small" 
                  className="w-full text-sm sm:text-base"
                  icon={<Package className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3 sm:mt-4">
                  * Final pricing may vary based on weight, destination, and additional services
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Food Items Section (for food-export service) */}
      {serviceId === 'food-export' && (
        <section className="py-8 sm:py-12 md:py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins mb-6 sm:mb-8 text-center">Popular Food Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

