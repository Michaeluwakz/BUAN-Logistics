import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { DollarSign, Package, Users, TrendingUp } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Sidebar from '../../components/layout/Sidebar'
import Card from '../../components/ui/Card'
import StatCard from '../../components/ui/StatCard'
import { mockAnalytics } from '../../data/mockData'

const COLORS = ['#22c55e', '#f97316', '#3b82f6', '#eab308']

export default function AdminDashboard() {
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
            <h1 className="text-4xl font-bold font-poppins mb-8">Admin Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Revenue"
                value={`$${mockAnalytics.totalRevenue.toLocaleString()}`}
                change={mockAnalytics.revenueGrowth}
                icon={<DollarSign size={24} />}
                color="green"
              />
              <StatCard
                title="Total Orders"
                value={mockAnalytics.totalOrders}
                change={mockAnalytics.ordersGrowth}
                icon={<Package size={24} />}
                color="orange"
              />
              <StatCard
                title="Active Customers"
                value={mockAnalytics.activeCustomers}
                change={mockAnalytics.customersGrowth}
                icon={<Users size={24} />}
                color="blue"
              />
              <StatCard
                title="Delivery Rate"
                value={`${mockAnalytics.deliveryRate}%`}
                icon={<TrendingUp size={24} />}
                color="gold"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Revenue Chart */}
              <Card>
                <h2 className="text-xl font-bold font-poppins mb-4">Revenue by Month</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockAnalytics.revenueByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Orders by Status */}
              <Card>
                <h2 className="text-xl font-bold font-poppins mb-4">Orders by Status</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={mockAnalytics.ordersByStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {mockAnalytics.ordersByStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Top Products */}
            <Card>
              <h2 className="text-xl font-bold font-poppins mb-4">Top Selling Products</h2>
              <ResponsiveContainer width="100%" height={300}>
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

