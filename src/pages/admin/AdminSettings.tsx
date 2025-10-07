import { Package, TrendingUp, Users, Settings, Save } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

export default function AdminSettings() {
  const sidebarLinks = [
    { to: '/admin', icon: <TrendingUp size={20} />, label: 'Overview' },
    { to: '/admin/orders', icon: <Package size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { to: '/admin/customers', icon: <Users size={20} />, label: 'Customers' },
    { to: '/admin/reports', icon: <TrendingUp size={20} />, label: 'Reports' },
    { to: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ]

  return (
    <PageLayout showFooter={false}>
      <div className="flex">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-grow bg-neutral-50 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-poppins mb-8">Settings & Configuration</h1>

            <div className="space-y-6">
              <Card>
                <h2 className="text-xl font-bold font-poppins mb-4">General Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      defaultValue="BUAN Logistics"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="info@buanlogistics.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+234 800 123 4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-xl font-bold font-poppins mb-4">Shipping Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Shipping Fee</label>
                    <input
                      type="number"
                      defaultValue="25"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Delivery Days</label>
                    <input
                      type="number"
                      defaultValue="14"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-xl font-bold font-poppins mb-4">Notifications</h2>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-3" />
                    <span>Email notifications for new orders</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-3" />
                    <span>SMS notifications for order status</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Weekly revenue reports</span>
                  </label>
                </div>
              </Card>

              <Button variant="primary" size="large" icon={<Save />}>
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

