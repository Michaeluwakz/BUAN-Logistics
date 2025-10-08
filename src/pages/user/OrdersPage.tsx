import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Package, Search, Filter } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { useApp } from '../../contexts/AppContext'
import { mockOrders } from '../../data/mockData'

export default function OrdersPage() {
  const { state } = useApp()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  if (!state.isAuthenticated) {
    navigate('/login')
    return null
  }

  const userOrders = mockOrders.filter(order => 
    (statusFilter === 'all' || order.status === statusFilter) &&
    (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
     order.service.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    processing: 'bg-blue-100 text-blue-700',
    'in-transit': 'bg-purple-100 text-purple-700',
    delivered: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700'
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-1 sm:mb-2">My Orders</h1>
          <p className="text-gray-600 text-sm sm:text-base">Track and manage all your orders</p>
        </div>

        {/* Filters */}
        <Card className="mb-4 sm:mb-6 p-3 sm:p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 sm:pr-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-orange"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-600 sm:w-5 sm:h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-grow md:flex-grow-0 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-orange"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="in-transit">In Transit</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Orders List */}
        {userOrders.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {userOrders.map((order) => (
              <Card key={order.id} hover className="p-3 sm:p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="text-primary-orange" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins">{order.id}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{order.service}</p>
                      <p className="text-xs sm:text-sm text-gray-500">Placed on {order.createdAt}</p>
                    </div>
                  </div>
                  <span className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium ${statusColors[order.status]} mt-3 md:mt-0 self-start md:self-auto`}>
                    {order.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Items</p>
                    <div className="font-semibold text-sm sm:text-base line-clamp-2">
                      {order.items.map(item => item.name).join(', ')}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Destination</p>
                    <div className="font-semibold text-sm sm:text-base">{order.destination}</div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Amount</p>
                    <div className="font-semibold text-primary-orange text-lg sm:text-xl">
                      ${order.totalAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    variant="primary" 
                    size="small"
                    onClick={() => navigate(`/tracking?number=${order.trackingNumber}`)}
                    className="text-xs sm:text-sm"
                  >
                    Track Order
                  </Button>
                  <Button 
                    variant="outline" 
                    size="small"
                    className="text-xs sm:text-sm"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 sm:py-16 p-4 sm:p-6">
            <Package size={48} className="text-gray-300 mx-auto mb-3 sm:mb-4 sm:w-16 sm:h-16" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No orders found</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Try adjusting your filters or start a new order</p>
            <Button 
              variant="primary"
              size="small"
              onClick={() => navigate('/services')}
              className="text-sm sm:text-base"
            >
              Browse Services
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}

