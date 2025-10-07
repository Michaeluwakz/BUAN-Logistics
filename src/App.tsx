import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'

// Public Pages
import HomePage from './pages/public/HomePage'
import ServicesPage from './pages/public/ServicesPage'
import ServiceDetailPage from './pages/public/ServiceDetailPage'
import TrackingPage from './pages/public/TrackingPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

// User Pages
import UserDashboard from './pages/user/UserDashboard'
import OrdersPage from './pages/user/OrdersPage'
import ProfilePage from './pages/user/ProfilePage'
import CheckoutPage from './pages/user/CheckoutPage'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminOrders from './pages/admin/AdminOrders'
import AdminInventory from './pages/admin/AdminInventory'
import AdminCustomers from './pages/admin/AdminCustomers'
import AdminReports from './pages/admin/AdminReports'
import AdminSettings from './pages/admin/AdminSettings'

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App

