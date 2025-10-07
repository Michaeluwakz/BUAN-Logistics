import { Package, TrendingUp, Users, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { mockAnalytics } from '../../data/mockData'

export default function AdminReports() {
  const sidebarLinks = [
    { to: '/admin', icon: <TrendingUp size={20} />, label: 'Overview' },
    { to: '/admin/orders', icon: <Package size={20} />, label: 'Orders' },
    { to: '/admin/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { to: '/admin/customers', icon: <Users size={20} />, label: 'Customers' },
    { to: '/admin/reports', icon: <TrendingUp size={20} />, label: 'Reports' },
  ]

  return (
    <PageLayout showFooter={false}>
      <div className="flex">
        <Sidebar links={sidebarLinks} />
        
        <div className="flex-grow bg-neutral-50 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold font-poppins">Revenue Reports</h1>
              <Button variant="primary" icon={<Download />}>
                Export Report
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-primary-green">${mockAnalytics.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-2">+{mockAnalytics.revenueGrowth}% from last month</p>
              </Card>
              <Card>
                <p className="text-gray-600 text-sm mb-1">Avg Order Value</p>
                <p className="text-3xl font-bold text-primary-orange">
                  ${(mockAnalytics.totalRevenue / mockAnalytics.totalOrders).toFixed(2)}
                </p>
              </Card>
              <Card>
                <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-secondary-blue">{mockAnalytics.totalOrders}</p>
              </Card>
              <Card>
                <p className="text-gray-600 text-sm mb-1">Active Customers</p>
                <p className="text-3xl font-bold text-accent-gold">{mockAnalytics.activeCustomers}</p>
              </Card>
            </div>

            {/* Revenue Trend */}
            <Card className="mb-8">
              <h2 className="text-2xl font-bold font-poppins mb-6">Revenue Trend (2025)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={mockAnalytics.revenueByMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Top Products Performance */}
            <Card>
              <h2 className="text-2xl font-bold font-poppins mb-6">Top Products Performance</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={mockAnalytics.topProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

