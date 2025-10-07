import { useState } from 'react'
import { Package, Search, Filter, Eye } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import { mockOrders } from '../../data/mockData'
import { TrendingUp, Users } from 'lucide-react'
import { Order } from '../../types'

export default function AdminOrders() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const sidebarLinks = [
    { to: '/admin', icon: <TrendingUp size={20} />, label: 'Overview' },
    { to: '/admin/orders', icon: <Package size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { to: '/admin/customers', icon: <Users size={20} />, label: 'Customers' },
    { to: '/admin/reports', icon: <TrendingUp size={20} />, label: 'Reports' },
  ]

  const filteredOrders = mockOrders.filter(order =>
    (statusFilter === 'all' || order.status === statusFilter) &&
    (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
     order.customerName.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    processing: 'bg-blue-100 text-blue-700',
    'in-transit': 'bg-purple-100 text-purple-700',
    delivered: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700'
  }

  return (
    <PageLayout showFooter={false}>
      <div className="flex">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-grow bg-neutral-50 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold font-poppins mb-8">Order Management</h1>

            {/* Filters */}
            <Card className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by order ID or customer..."
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

            {/* Orders Table */}
            <Card padding="none">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.service}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                            {order.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-primary-orange">
                          ${order.totalAmount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.createdAt}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button 
                            variant="ghost" 
                            size="small"
                            icon={<Eye size={16} />}
                            onClick={() => setSelectedOrder(order)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      <Modal 
        isOpen={selectedOrder !== null} 
        onClose={() => setSelectedOrder(null)}
        title="Order Details"
        size="large"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold">{selectedOrder.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-semibold">{selectedOrder.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-semibold">{selectedOrder.service}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[selectedOrder.status]}`}>
                  {selectedOrder.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Items</p>
              <div className="space-y-2">
                {selectedOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>{item.name} ({item.quantity} {item.unit})</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-lg font-semibold">Total Amount</span>
              <span className="text-2xl font-bold text-primary-orange">${selectedOrder.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        )}
      </Modal>
    </PageLayout>
  )
}

