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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins mb-2">
            Welcome back, {state.user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600">Here's what's happening with your orders</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Orders"
            value={state.user?.totalOrders || 0}
            icon={<Package size={24} />}
            color="orange"
          />
          <StatCard
            title="Cart Items"
            value={state.cart.length}
            icon={<ShoppingCart size={24} />}
            color="green"
          />
          <StatCard
            title="Total Spent"
            value={`$${state.user?.totalSpent.toFixed(2) || '0.00'}`}
            icon={<TrendingUp size={24} />}
            color="blue"
          />
          <StatCard
            title="Member Since"
            value={state.user?.joinedDate.split('-')[0] || '2025'}
            icon={<User size={24} />}
            color="gold"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-poppins">Recent Orders</h2>
                <Button 
                  variant="ghost" 
                  size="small"
                  onClick={() => navigate('/orders')}
                >
                  View All
                </Button>
              </div>

              {userOrders.length > 0 ? (
                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-orange transition-colors cursor-pointer"
                      onClick={() => navigate(`/orders#${order.id}`)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.service}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                          {order.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
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
                <div className="text-center py-12">
                  <Package size={64} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No orders yet</p>
                  <Button 
                    variant="primary"
                    onClick={() => navigate('/services')}
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-bold font-poppins mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  className="w-full justify-start"
                  icon={<Package />}
                  onClick={() => navigate('/services')}
                >
                  Place New Order
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  icon={<Clock />}
                  onClick={() => navigate('/tracking')}
                >
                  Track Order
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  icon={<ShoppingCart />}
                  onClick={() => navigate('/checkout')}
                >
                  View Cart ({state.cart.length})
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  icon={<User />}
                  onClick={() => navigate('/profile')}
                >
                  Edit Profile
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-orange to-primary-green text-white">
              <div className="flex items-start mb-4">
                <CheckCircle size={40} className="mr-3" />
                <div>
                  <h3 className="font-bold font-poppins text-lg mb-2">Premium Member</h3>
                  <p className="text-sm text-white/90">
                    Enjoy exclusive benefits and faster shipping
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-primary-orange"
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

