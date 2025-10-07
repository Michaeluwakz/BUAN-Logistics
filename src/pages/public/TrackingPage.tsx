import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, MapPin, Calendar, Clock } from 'lucide-react'
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
      <section className="bg-gradient-to-r from-[#003366] to-[#3399FF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Package size={64} className="mx-auto mb-4" />
            <h1 className="text-5xl font-bold font-poppins mb-4">Track Your Order</h1>
            <p className="text-xl text-white/90 mb-8">
              Enter your tracking number to see real-time updates
            </p>

            {/* Tracking Input */}
            <div className="max-w-xl mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number (e.g., BUAN-TRK-001)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
                <Button 
                  variant="primary" 
                  size="large"
                  icon={<Search />}
                  onClick={handleTrack}
                  loading={loading}
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
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Status Overview */}
              <Card className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-600 mb-1">Tracking Number</div>
                    <div className="font-semibold text-lg">{trackingData.trackingNumber}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-600 mb-1">Status</div>
                    <div className="font-semibold text-lg text-[#003366]">{trackingData.status}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-600 mb-1">Current Location</div>
                    <div className="font-semibold text-lg">{trackingData.currentLocation}</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-600 mb-1">Est. Delivery</div>
                    <div className="font-semibold text-lg">{trackingData.estimatedDelivery}</div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="mb-8 bg-gray-100 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-[#003366] mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map visualization would go here</p>
                  <p className="text-sm text-gray-500 mt-2">Showing route: Lagos → Dubai → London</p>
                </div>
              </Card>

              {/* Tracking History */}
              <Card>
                <h2 className="text-2xl font-bold font-poppins mb-6">Tracking History</h2>
                <div className="space-y-6">
                  {trackingData.history.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-[#003366]' : 'bg-[#3399FF]'
                        } text-white`}>
                          {index === 0 ? <Clock size={20} /> : <Package size={20} />}
                        </div>
                        {index < trackingData.history.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-300 my-2" />
                        )}
                      </div>
                      <div className="flex-grow pb-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{event.status}</h3>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <div>{event.date}</div>
                            <div>{event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={16} className="mr-1" />
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
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <Search size={40} className="text-[#003366] mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-poppins mb-2">Find Your Tracking Number</h3>
                <p className="text-gray-600">Check your order confirmation email or SMS</p>
              </Card>
              <Card className="text-center">
                <Clock size={40} className="text-[#3399FF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-poppins mb-2">Real-Time Updates</h3>
                <p className="text-gray-600">Track your package every step of the way</p>
              </Card>
              <Card className="text-center">
                <Package size={40} className="text-[#003366] mx-auto mb-4" />
                <h3 className="text-xl font-semibold font-poppins mb-2">Delivery Notifications</h3>
                <p className="text-gray-600">Get alerts when your package is near</p>
              </Card>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

