export interface Service {
  id: string
  name: string
  icon: string
  description: string
  features: string[]
  pricing: {
    base: number
    perKg?: number
    perCbm?: number
  }
  image?: string
}

export interface FoodItem {
  id: string
  name: string
  category: string
  price: number
  unit: string
  image: string
  availability: 'in-stock' | 'low-stock' | 'out-of-stock'
  description: string
  origin: string
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  service: string
  status: 'pending' | 'processing' | 'in-transit' | 'delivered' | 'cancelled'
  items: OrderItem[]
  totalAmount: number
  createdAt: string
  estimatedDelivery: string
  trackingNumber: string
  destination: string
  origin: string
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  unit: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  country: string
  totalOrders: number
  totalSpent: number
  joinedDate: string
  avatar?: string
}

export interface Analytics {
  totalRevenue: number
  totalOrders: number
  activeCustomers: number
  deliveryRate: number
  revenueGrowth: number
  ordersGrowth: number
  customersGrowth: number
  revenueByMonth: { month: string; revenue: number }[]
  ordersByStatus: { status: string; count: number }[]
  topProducts: { name: string; sales: number }[]
}

export interface TrackingInfo {
  trackingNumber: string
  status: string
  currentLocation: string
  estimatedDelivery: string
  history: TrackingEvent[]
  coordinates: { lat: number; lng: number }[]
}

export interface TrackingEvent {
  date: string
  time: string
  location: string
  status: string
  description: string
}

export interface CartItem {
  foodItem: FoodItem
  quantity: number
}

export interface AppState {
  cart: CartItem[]
  user: Customer | null
  isAuthenticated: boolean
}

export type AppAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_USER'; payload: Customer }
  | { type: 'LOGOUT' }

