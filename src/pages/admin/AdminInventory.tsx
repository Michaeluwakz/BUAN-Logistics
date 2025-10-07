import { useState } from 'react'
import { Package, TrendingUp, Users, Search, Plus } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { mockFoodItems } from '../../data/mockData'

export default function AdminInventory() {
  const [searchQuery, setSearchQuery] = useState('')

  const sidebarLinks = [
    { to: '/admin', icon: <TrendingUp size={20} />, label: 'Overview' },
    { to: '/admin/orders', icon: <Package size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { to: '/admin/customers', icon: <Users size={20} />, label: 'Customers' },
    { to: '/admin/reports', icon: <TrendingUp size={20} />, label: 'Reports' },
  ]

  const filteredItems = mockFoodItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const availabilityColors = {
    'in-stock': 'bg-green-100 text-green-700',
    'low-stock': 'bg-yellow-100 text-yellow-700',
    'out-of-stock': 'bg-red-100 text-red-700'
  }

  return (
    <PageLayout showFooter={false}>
      <div className="flex">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-grow bg-neutral-50 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold font-poppins">Inventory Management</h1>
              <Button variant="primary" icon={<Plus />}>
                Add New Item
              </Button>
            </div>

            {/* Search */}
            <Card className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                />
              </div>
            </Card>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} hover>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold font-poppins mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary-orange">${item.price}</span>
                    <span className="text-sm text-gray-600">per {item.unit}</span>
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${availabilityColors[item.availability]}`}>
                    {item.availability.replace('-', ' ').toUpperCase()}
                  </span>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Origin: {item.origin}</p>
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

