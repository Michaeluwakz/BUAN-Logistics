# BUAN Logistics - Mobile Responsive - Web Application

> **Live Abroad, Eat From Home** 🌍🍛

A comprehensive logistics web application for Nigerian food export and international shipping services.

## 🎨 Design System

### Color Palette
- **Primary Green**: `#22c55e` - Growth & Agriculture
- **Primary Orange**: `#f97316` - Nigerian Vibrancy  
- **Secondary Blue**: `#3b82f6` - Trust & Logistics
- **Accent Gold**: `#eab308` - Premium Service

### Typography
- **Headings**: Poppins (Bold, SemiBold, Medium)
- **Body**: Inter (Regular, Light)

## 🚀 Features

### Public Pages
- ✅ Landing page with hero section, services showcase, and testimonials
- ✅ Services catalog with search and filtering
- ✅ Individual service detail pages
- ✅ Real-time order tracking interface
- ✅ User authentication (Login/Register)

### User Dashboard
- ✅ Personal dashboard with order overview
- ✅ Order management and history
- ✅ Profile management
- ✅ Shopping cart and checkout
- ✅ Food catalog with cart functionality

### Admin Dashboard
- ✅ Analytics overview with charts
- ✅ Order management system
- ✅ Inventory management
- ✅ Customer database
- ✅ Revenue reports
- ✅ Settings and configuration

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useReducer
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Charts**: Recharts
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Maps**: React Leaflet (static mockups)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server (on port 4000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The app runs on **http://localhost:4000** (configured in vite.config.ts)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── FoodCard.tsx
│   │   ├── StatCard.tsx
│   │   └── OrderTracker.tsx
│   └── layout/          # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Sidebar.tsx
│       └── PageLayout.tsx
├── pages/
│   ├── public/          # Public pages
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── TrackingPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── user/            # User dashboard pages
│   │   ├── UserDashboard.tsx
│   │   ├── OrdersPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── CheckoutPage.tsx
│   └── admin/           # Admin dashboard pages
│       ├── AdminDashboard.tsx
│       ├── AdminOrders.tsx
│       ├── AdminInventory.tsx
│       ├── AdminCustomers.tsx
│       ├── AdminReports.tsx
│       └── AdminSettings.tsx
├── contexts/
│   └── AppContext.tsx   # Global state management
├── types/
│   └── index.ts         # TypeScript type definitions
├── data/
│   └── mockData.ts      # Mock data for all features
├── App.tsx              # Main app component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles + Tailwind
```

## 🎯 Key Features Implementation

### State Management
- Global cart state
- User authentication state
- Mock login/logout functionality

### Mock Data
- 8 different services
- 8 food items with categories
- 3 sample orders with tracking
- 3 customer profiles
- Complete analytics data

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Fully responsive navigation with mobile menu

### Animations
- Page transitions with Framer Motion
- Hover effects on cards and buttons
- Smooth scroll behavior
- Loading states with skeleton screens

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 🎨 Component Library

### Button Component
```tsx
<Button variant="primary" size="large" icon={<Icon />}>
  Click Me
</Button>
```
Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `small`, `medium`, `large`

### Card Component
```tsx
<Card hover padding="medium">
  Content here
</Card>
```

### Modal Component
```tsx
<Modal isOpen={true} onClose={handleClose} title="Title" size="medium">
  Modal content
</Modal>
```

## 📊 Mock Data Features

- **Services**: 8 comprehensive logistics services
- **Food Items**: Nigerian food catalog with pricing
- **Orders**: Sample orders with different statuses
- **Customers**: User profiles with order history
- **Analytics**: Revenue trends, order statistics, top products
- **Tracking**: Real-time order tracking simulation

## 🎭 Demo Accounts

### User Account (Mock Login)
- Use any email/password to login
- Automatically logged in as: Chioma Adeleke

### Admin Access
- Navigate to `/admin` for admin dashboard
- Full CRUD interface (frontend only)

## 🚦 Available Routes

### Public Routes
- `/` - Home page
- `/services` - All services
- `/services/:id` - Service details
- `/tracking` - Order tracking
- `/login` - User login
- `/register` - User registration

### User Routes
- `/dashboard` - User dashboard
- `/orders` - Order history
- `/profile` - Profile management
- `/checkout` - Shopping cart & checkout

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/orders` - Order management
- `/admin/inventory` - Inventory management
- `/admin/customers` - Customer database
- `/admin/reports` - Revenue reports
- `/admin/settings` - Settings

## 🎨 Tailwind Configuration

Custom colors added to `tailwind.config.js`:
- `primary.green` and `primary.orange`
- `secondary.blue`
- `accent.gold`

Custom fonts: Poppins (headings) and Inter (body)

## 📱 Responsive Features

- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized images for all screen sizes

## ⚡ Performance Optimizations

- Code splitting with React.lazy()
- Lazy loading for images
- Optimized bundle size
- Fast refresh in development

## 🔮 Future Backend Integration

The app is designed to easily integrate with a backend:
- All mock data in `/src/data/mockData.ts` can be replaced with API calls
- Context API ready for backend state synchronization
- Authentication flow prepared for real auth service
- Form validation ready for API integration

## 🎉 Ready for Production

- TypeScript for type safety
- ESLint configuration included
- Production build optimization
- Environment-ready architecture

## 📝 Notes

- All data is mocked for demonstration
- No backend required to run
- Fully functional UI/UX
- Ready for backend integration
- All animations and interactions included

---

Built with ❤️ for BUAN Logistics - Bringing home to you, wherever you are! 🌍

