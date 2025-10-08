import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, MapPin, Clock } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { mockTrackingInfo } from '../../data/mockData'

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingData, setTrackingData] = useState<typeof mockTrackingInfo | null>(null)
  const [loading, setLoading] = useState(false)

  const handleTrack = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingData(mockTrackingInfo)
      setLoading(false)
    }, 1000)
  }

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
            <Package size={40} className="mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-2 sm:mb-3 md:mb-4">Track Your Order</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 px-2">
              Enter your tracking number to see real-time updates
            </p>

            {/* Tracking Input */}
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-grow px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
                <Button 
                  variant="primary" 
                  size="small"
                  icon={<Search className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={handleTrack}
                  loading={loading}
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  Track
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Status Overview */}
              <Card className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Tracking Number</div>
                    <div className="font-semibold text-sm sm:text-base md:text-lg truncate">{trackingData.trackingNumber}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Status</div>
                    <div className="font-semibold text-sm sm:text-base md:text-lg text-[#003366]">{trackingData.status}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Current Location</div>
                    <div className="font-semibold text-sm sm:text-base md:text-lg">{trackingData.currentLocation}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Est. Delivery</div>
                    <div className="font-semibold text-sm sm:text-base md:text-lg">{trackingData.estimatedDelivery}</div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="mb-4 sm:mb-6 md:mb-8 bg-gray-100 h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center p-4">
                <div className="text-center">
                  <MapPin size={40} className="text-[#003366] mx-auto mb-2 sm:mb-3 md:mb-4 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">Interactive map visualization would go here</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2">Showing route: Lagos → Dubai → London</p>
                </div>
              </Card>

              {/* Tracking History */}
              <Card className="p-3 sm:p-4 md:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4 sm:mb-6">Tracking History</h2>
                <div className="space-y-4 sm:space-y-6">
                  {trackingData.history.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-2 sm:gap-3 md:gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-[#003366]' : 'bg-[#3399FF]'
                        } text-white`}>
                          {index === 0 ? <Clock size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" /> : <Package size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />}
                        </div>
                        {index < trackingData.history.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-300 my-1 sm:my-2" />
                        )}
                      </div>
                      <div className="flex-grow pb-4 sm:pb-6">
                        <div className="flex items-start justify-between mb-1 sm:mb-2 gap-2">
                          <div className="flex-grow">
                            <h3 className="font-semibold text-sm sm:text-base md:text-lg">{event.status}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base">{event.description}</p>
                          </div>
                          <div className="text-right text-[10px] sm:text-xs md:text-sm text-gray-500 flex-shrink-0">
                            <div>{event.date}</div>
                            <div>{event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <MapPin size={14} className="mr-1 sm:w-4 sm:h-4" />
                          {event.location}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Info Section */}
      {!trackingData && (
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <Card className="text-center p-4 sm:p-6">
                <Search size={32} className="text-[#003366] mx-auto mb-3 sm:mb-4 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Find Your Tracking Number</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">Check your order confirmation email or SMS</p>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Clock size={32} className="text-[#3399FF] mx-auto mb-3 sm:mb-4 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Real-Time Updates</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">Track your package every step of the way</p>
              </Card>
              <Card className="text-center p-4 sm:p-6">
                <Package size={32} className="text-[#003366] mx-auto mb-3 sm:mb-4 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-1 sm:mb-2">Delivery Notifications</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">Get alerts when your package is near</p>
              </Card>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

