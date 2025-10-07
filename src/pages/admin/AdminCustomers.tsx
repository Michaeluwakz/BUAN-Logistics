import { useState } from 'react'
import { Package, TrendingUp, Users, Search, Mail, Phone } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import { mockCustomers } from '../../data/mockData'

export default function AdminCustomers() {
  const [searchQuery, setSearchQuery] = useState('')

  const sidebarLinks = [
    { to: '/admin', icon: <TrendingUp size={20} />, label: 'Overview' },
    { to: '/admin/orders', icon: <Package size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { to: '/admin/customers', icon: <Users size={20} />, label: 'Customers' },
    { to: '/admin/reports', icon: <TrendingUp size={20} />, label: 'Reports' },
  ]

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout showFooter={false}>
      <div className="flex">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-grow bg-neutral-50 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold font-poppins mb-8">Customer Management</h1>

            {/* Search */}
            <Card className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                />
              </div>
            </Card>

            {/* Customers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCustomers.map((customer) => (
                <Card key={customer.id} hover>
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={customer.avatar} 
                      alt={customer.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold font-poppins">{customer.name}</h3>
                      <p className="text-sm text-gray-600">{customer.country}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail size={16} className="mr-2" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone size={16} className="mr-2" />
                      {customer.phone}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600">Total Orders</p>
                      <p className="text-lg font-bold text-primary-orange">{customer.totalOrders}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Total Spent</p>
                      <p className="text-lg font-bold text-primary-green">${customer.totalSpent.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500">Member since: {customer.joinedDate}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

