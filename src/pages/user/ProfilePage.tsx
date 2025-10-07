import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { User, Mail, Phone, MapPin, LogOut, Save } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { useApp } from '../../contexts/AppContext'

interface ProfileFormData {
  name: string
  email: string
  phone: string
  address: string
  country: string
}

export default function ProfilePage() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: state.user?.name || '',
      email: state.user?.email || '',
      phone: state.user?.phone || '',
      address: state.user?.address || '',
      country: state.user?.country || ''
    }
  })

  if (!state.isAuthenticated) {
    navigate('/login')
    return null
  }

  const onSubmit = (data: ProfileFormData) => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      dispatch({ 
        type: 'SET_USER', 
        payload: { ...state.user!, ...data }
      })
      setLoading(false)
      alert('Profile updated successfully!')
    }, 1000)
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-orange to-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={48} className="text-white" />
            </div>
            <h3 className="text-xl font-bold font-poppins mb-1">{state.user?.name}</h3>
            <p className="text-gray-600 mb-4">{state.user?.email}</p>
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-semibold">{state.user?.joinedDate}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">Orders</p>
                <p className="text-xl font-bold text-primary-orange">{state.user?.totalOrders}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">Spent</p>
                <p className="text-xl font-bold text-primary-green">${state.user?.totalSpent}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              icon={<LogOut />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Card>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold font-poppins mb-6">Account Information</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      {...register('country', { required: 'Country is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin size={20} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      {...register('address', { required: 'Address is required' })}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  className="w-full"
                  icon={<Save />}
                  loading={loading}
                >
                  Save Changes
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

