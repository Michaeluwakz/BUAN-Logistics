import { Service, FoodItem, Order, Customer, Analytics, TrackingInfo } from '../types'

export const mockServices: Service[] = [
  {
    id: 'food-export',
    name: 'Nigerian Food Export',
    icon: '🍛',
    description: 'Authentic Nigerian food delivered worldwide',
    features: ['Fresh Produce', 'Packaged Foods', 'Custom Orders', 'Cold Chain Logistics'],
    pricing: { base: 50, perKg: 5 },
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=800'
  },
  {
    id: 'air-cargo',
    name: 'Air & Sea Cargo',
    icon: '✈️',
    description: 'Fast and reliable cargo shipping services',
    features: ['Express Delivery', 'Freight Consolidation', 'Door-to-Door', 'Real-time Tracking'],
    pricing: { base: 200, perKg: 12 },
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800'
  },
  {
    id: 'procurement',
    name: 'International Procurement',
    icon: '🛒',
    description: 'Source and deliver products globally',
    features: ['Product Sourcing', 'Quality Inspection', 'Bulk Orders', 'Custom Requirements'],
    pricing: { base: 100 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'
  },
  {
    id: 'container',
    name: 'Container Services',
    icon: '📦',
    description: 'Full and partial container shipping',
    features: ['20ft & 40ft Containers', 'FCL & LCL Options', 'Port-to-Port', 'Insurance Coverage'],
    pricing: { base: 2500, perCbm: 50 },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800'
  },
  {
    id: 'agro-export',
    name: 'Agro Export Services',
    icon: '🌾',
    description: 'Agricultural products export solutions',
    features: ['Farm Fresh', 'Quality Certification', 'Phytosanitary Compliance', 'Temperature Control'],
    pricing: { base: 150, perKg: 8 },
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800'
  },
  {
    id: 'customs',
    name: 'Custom Clearance',
    icon: '📋',
    description: 'Hassle-free customs documentation',
    features: ['Documentation', 'Duty Calculation', 'Compliance', 'Fast Processing'],
    pricing: { base: 250 },
    image: 'https://images.unsplash.com/photo-1554224311-3f9c0f60ba4d?w=800'
  },
  {
    id: 'warehousing',
    name: 'Warehousing Solutions',
    icon: '🏭',
    description: 'Secure storage and inventory management',
    features: ['Climate Control', '24/7 Security', 'Inventory Management', 'Distribution Services'],
    pricing: { base: 500 },
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800'
  },
  {
    id: 'consultation',
    name: 'Export Consultation',
    icon: '💼',
    description: 'Expert advice for export success',
    features: ['Market Research', 'Compliance Guidance', 'Cost Optimization', 'Route Planning'],
    pricing: { base: 300 },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  }
]

export const mockFoodItems: FoodItem[] = [
  {
    id: 'f1',
    name: 'Jollof Rice Mix',
    category: 'Packaged Foods',
    price: 15.99,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400',
    availability: 'in-stock',
    description: 'Authentic Nigerian Jollof rice spice mix',
    origin: 'Lagos, Nigeria'
  },
  {
    id: 'f2',
    name: 'Palm Oil',
    category: 'Fresh Produce',
    price: 12.50,
    unit: 'liter',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
    availability: 'in-stock',
    description: 'Pure red palm oil',
    origin: 'Delta State, Nigeria'
  },
  {
    id: 'f3',
    name: 'Egusi Seeds',
    category: 'Packaged Foods',
    price: 18.00,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1587527909949-5208f38950e0?w=400',
    availability: 'in-stock',
    description: 'Ground egusi for soup',
    origin: 'Ogun State, Nigeria'
  },
  {
    id: 'f4',
    name: 'Plantain Chips',
    category: 'Packaged Foods',
    price: 8.99,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1621508505794-f2f41c07d0e1?w=400',
    availability: 'low-stock',
    description: 'Crispy plantain chips',
    origin: 'Ibadan, Nigeria'
  },
  {
    id: 'f5',
    name: 'Stockfish',
    category: 'Fresh Produce',
    price: 45.00,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400',
    availability: 'in-stock',
    description: 'Premium dried stockfish',
    origin: 'Norway (via Lagos)'
  },
  {
    id: 'f6',
    name: 'Yam Flour (Elubo)',
    category: 'Packaged Foods',
    price: 14.50,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    availability: 'in-stock',
    description: 'Yam flour for Amala',
    origin: 'Oyo State, Nigeria'
  },
  {
    id: 'f7',
    name: 'Crayfish (Ground)',
    category: 'Packaged Foods',
    price: 22.00,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=400',
    availability: 'in-stock',
    description: 'Dried ground crayfish',
    origin: 'Rivers State, Nigeria'
  },
  {
    id: 'f8',
    name: 'Suya Spice',
    category: 'Packaged Foods',
    price: 10.99,
    unit: 'pack',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b676e2b7e4?w=400',
    availability: 'in-stock',
    description: 'Authentic suya seasoning',
    origin: 'Kano, Nigeria'
  }
]

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerId: 'C001',
    customerName: 'Chioma Adeleke',
    service: 'Nigerian Food Export',
    status: 'in-transit',
    items: [
      { id: 'f1', name: 'Jollof Rice Mix', quantity: 5, price: 15.99, unit: 'kg' },
      { id: 'f2', name: 'Palm Oil', quantity: 3, price: 12.50, unit: 'liter' }
    ],
    totalAmount: 117.45,
    createdAt: '2025-09-15',
    estimatedDelivery: '2025-10-20',
    trackingNumber: 'BUAN-TRK-001',
    destination: 'London, UK',
    origin: 'Lagos, Nigeria'
  },
  {
    id: 'ORD-002',
    customerId: 'C002',
    customerName: 'Emmanuel Okonkwo',
    service: 'Air Cargo',
    status: 'processing',
    items: [
      { id: 'f5', name: 'Stockfish', quantity: 10, price: 45.00, unit: 'kg' }
    ],
    totalAmount: 450.00,
    createdAt: '2025-10-01',
    estimatedDelivery: '2025-10-25',
    trackingNumber: 'BUAN-TRK-002',
    destination: 'New York, USA',
    origin: 'Lagos, Nigeria'
  },
  {
    id: 'ORD-003',
    customerId: 'C003',
    customerName: 'Ngozi Williams',
    service: 'Nigerian Food Export',
    status: 'delivered',
    items: [
      { id: 'f3', name: 'Egusi Seeds', quantity: 2, price: 18.00, unit: 'kg' },
      { id: 'f7', name: 'Crayfish (Ground)', quantity: 1, price: 22.00, unit: 'kg' }
    ],
    totalAmount: 58.00,
    createdAt: '2025-08-20',
    estimatedDelivery: '2025-09-15',
    trackingNumber: 'BUAN-TRK-003',
    destination: 'Toronto, Canada',
    origin: 'Lagos, Nigeria'
  }
]

export const mockCustomers: Customer[] = [
  {
    id: 'C001',
    name: 'Chioma Adeleke',
    email: 'chioma@example.com',
    phone: '+44 20 1234 5678',
    address: '123 Baker Street, London',
    country: 'United Kingdom',
    totalOrders: 12,
    totalSpent: 1450.00,
    joinedDate: '2024-03-15',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 'C002',
    name: 'Emmanuel Okonkwo',
    email: 'emma@example.com',
    phone: '+1 555 123 4567',
    address: '456 Park Avenue, New York',
    country: 'United States',
    totalOrders: 8,
    totalSpent: 980.50,
    joinedDate: '2024-05-20',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 'C003',
    name: 'Ngozi Williams',
    email: 'ngozi@example.com',
    phone: '+1 416 555 7890',
    address: '789 Queen Street, Toronto',
    country: 'Canada',
    totalOrders: 15,
    totalSpent: 2100.75,
    joinedDate: '2024-01-10',
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
]

export const mockAnalytics: Analytics = {
  totalRevenue: 125000,
  totalOrders: 342,
  activeCustomers: 156,
  deliveryRate: 98.5,
  revenueGrowth: 23.5,
  ordersGrowth: 18.2,
  customersGrowth: 12.8,
  revenueByMonth: [
    { month: 'Jan', revenue: 8500 },
    { month: 'Feb', revenue: 9200 },
    { month: 'Mar', revenue: 11000 },
    { month: 'Apr', revenue: 10500 },
    { month: 'May', revenue: 12800 },
    { month: 'Jun', revenue: 14200 },
    { month: 'Jul', revenue: 13500 },
    { month: 'Aug', revenue: 15000 },
    { month: 'Sep', revenue: 14800 },
    { month: 'Oct', revenue: 15500 }
  ],
  ordersByStatus: [
    { status: 'Delivered', count: 280 },
    { status: 'In Transit', count: 42 },
    { status: 'Processing', count: 15 },
    { status: 'Cancelled', count: 5 }
  ],
  topProducts: [
    { name: 'Palm Oil', sales: 450 },
    { name: 'Jollof Rice Mix', sales: 380 },
    { name: 'Egusi Seeds', sales: 320 },
    { name: 'Stockfish', sales: 280 },
    { name: 'Crayfish', sales: 240 }
  ]
}

export const mockTrackingInfo: TrackingInfo = {
  trackingNumber: 'BUAN-TRK-001',
  status: 'In Transit',
  currentLocation: 'Dubai, UAE',
  estimatedDelivery: '2025-10-20',
  history: [
    {
      date: '2025-09-15',
      time: '10:30 AM',
      location: 'Lagos, Nigeria',
      status: 'Order Placed',
      description: 'Your order has been received and is being processed'
    },
    {
      date: '2025-09-17',
      time: '02:45 PM',
      location: 'Lagos, Nigeria',
      status: 'Processing Complete',
      description: 'Items packaged and ready for shipment'
    },
    {
      date: '2025-09-20',
      time: '08:00 AM',
      location: 'Lagos Airport, Nigeria',
      status: 'Departed',
      description: 'Package departed from origin facility'
    },
    {
      date: '2025-10-05',
      time: '11:20 AM',
      location: 'Dubai, UAE',
      status: 'In Transit',
      description: 'Package arrived at transit hub'
    }
  ],
  coordinates: [
    { lat: 6.5244, lng: 3.3792 },    // Lagos
    { lat: 25.2048, lng: 55.2708 },   // Dubai
    { lat: 51.5074, lng: -0.1278 }    // London
  ]
}

export const testimonials = [
  {
    id: 1,
    name: 'Amaka Johnson',
    location: 'Manchester, UK',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'BUAN Logistics made it so easy for me to get authentic Nigerian food in the UK. The quality is excellent and delivery is always on time!'
  },
  {
    id: 2,
    name: 'Tunde Bakare',
    location: 'Houston, USA',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    text: 'I have been using their services for over a year now. They are reliable, professional, and the food always arrives fresh. Highly recommend!'
  },
  {
    id: 3,
    name: 'Grace Nwankwo',
    location: 'Sydney, Australia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'Best logistics service for Nigerian food export! They handle everything from customs to delivery. I can finally enjoy my favorite Nigerian dishes here in Australia.'
  }
]

