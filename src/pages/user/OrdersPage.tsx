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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by order ID or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
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
          <div className="space-y-4">
            {userOrders.map((order) => (
              <Card key={order.id} hover>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="text-primary-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-poppins">{order.id}</h3>
                      <p className="text-gray-600">{order.service}</p>
                      <p className="text-sm text-gray-500">Placed on {order.createdAt}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[order.status]} mt-4 md:mt-0`}>
                    {order.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Items</p>
                    <div className="font-semibold">
                      {order.items.map(item => item.name).join(', ')}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Destination</p>
                    <div className="font-semibold">{order.destination}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <div className="font-semibold text-primary-orange text-xl">
                      ${order.totalAmount.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="primary" 
                    size="small"
                    onClick={() => navigate(`/tracking?number=${order.trackingNumber}`)}
                  >
                    Track Order
                  </Button>
                  <Button variant="outline" size="small">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16">
            <Package size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No orders found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or start a new order</p>
            <Button 
              variant="primary"
              onClick={() => navigate('/services')}
            >
              Browse Services
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}

