import { useNavigate } from 'react-router-dom'
import { Package, ShoppingCart, User, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import StatCard from '../../components/ui/StatCard'
import { useApp } from '../../contexts/AppContext'
import { mockOrders } from '../../data/mockData'

export default function UserDashboard() {
  const { state } = useApp()
  const navigate = useNavigate()

  if (!state.isAuthenticated) {
    navigate('/login')
    return null
  }

  const userOrders = mockOrders.filter(order => order.customerId === state.user?.id).slice(0, 3)

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
        {/* Welcome Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-1 sm:mb-2">
            Welcome back, {state.user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">Here's what's happening with your orders</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
          <StatCard
            title="Total Orders"
            value={state.user?.totalOrders || 0}
            icon={<Package size={20} className="sm:w-6 sm:h-6" />}
            color="orange"
          />
          <StatCard
            title="Cart Items"
            value={state.cart.length}
            icon={<ShoppingCart size={20} className="sm:w-6 sm:h-6" />}
            color="green"
          />
          <StatCard
            title="Total Spent"
            value={`$${state.user?.totalSpent.toFixed(2) || '0.00'}`}
            icon={<TrendingUp size={20} className="sm:w-6 sm:h-6" />}
            color="blue"
          />
          <StatCard
            title="Member Since"
            value={state.user?.joinedDate.split('-')[0] || '2025'}
            icon={<User size={20} className="sm:w-6 sm:h-6" />}
            color="gold"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins">Recent Orders</h2>
                <Button 
                  variant="ghost" 
                  size="small"
                  onClick={() => navigate('/orders')}
                  className="text-xs sm:text-sm"
                >
                  View All
                </Button>
              </div>

              {userOrders.length > 0 ? (
                <div className="space-y-3 sm:space-y-4">
                  {userOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-primary-orange transition-colors cursor-pointer"
                      onClick={() => navigate(`/orders#${order.id}`)}
                    >
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg">{order.id}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{order.service}</p>
                        </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${statusColors[order.status]}`}>
                          {order.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">
                          {order.items.length} item(s) • {order.destination}
                        </span>
                        <span className="font-semibold text-primary-orange">
                          ${order.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <Package size={48} className="text-gray-300 mx-auto mb-3 sm:mb-4 sm:w-16 sm:h-16" />
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">No orders yet</p>
                  <Button 
                    variant="primary"
                    size="small"
                    onClick={() => navigate('/services')}
                    className="text-sm sm:text-base"
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg md:text-xl font-bold font-poppins mb-3 sm:mb-4">Quick Actions</h2>
              <div className="space-y-2 sm:space-y-3">
                <Button 
                  variant="primary" 
                  size="small"
                  className="w-full justify-start text-xs sm:text-sm"
                  icon={<Package className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={() => navigate('/services')}
                >
                  Place New Order
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  className="w-full justify-start text-xs sm:text-sm"
                  icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={() => navigate('/tracking')}
                >
                  Track Order
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  className="w-full justify-start text-xs sm:text-sm"
                  icon={<ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={() => navigate('/checkout')}
                >
                  View Cart ({state.cart.length})
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  className="w-full justify-start text-xs sm:text-sm"
                  icon={<User className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={() => navigate('/profile')}
                >
                  Edit Profile
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-orange to-primary-green text-white p-4 sm:p-6">
              <div className="flex items-start mb-3 sm:mb-4">
                <CheckCircle size={32} className="mr-2 sm:mr-3 sm:w-10 sm:h-10 flex-shrink-0" />
                <div>
                  <h3 className="font-bold font-poppins text-base sm:text-lg mb-1 sm:mb-2">Premium Member</h3>
                  <p className="text-xs sm:text-sm text-white/90">
                    Enjoy exclusive benefits and faster shipping
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="small"
                className="w-full border-white text-white hover:bg-white hover:text-primary-orange text-xs sm:text-sm"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

