import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import Card from './Card'

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  icon: ReactNode
  color?: string
}

export default function StatCard({ title, value, change, icon, color = 'orange' }: StatCardProps) {
  const colorClasses = {
    primary: 'bg-blue-100 text-primary-blue',
    secondary: 'bg-blue-50 text-primary-light',
    accent: 'bg-gray-100 text-gray-700',
    gold: 'bg-yellow-100 text-accent-gold'
  }

  return (
    <Card hover className="p-3 sm:p-4 md:p-6">
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <p className="text-gray-600 text-xs sm:text-sm mb-1">{title}</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-1 sm:mb-2">{value}</h3>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              {change >= 0 ? (
                <>
                  <TrendingUp size={14} className="text-green-600 sm:w-4 sm:h-4" />
                  <span className="text-green-600 text-xs sm:text-sm font-medium">+{change}%</span>
                </>
              ) : (
                <>
                  <TrendingDown size={14} className="text-red-600 sm:w-4 sm:h-4" />
                  <span className="text-red-600 text-xs sm:text-sm font-medium">{change}%</span>
                </>
              )}
              <span className="text-gray-500 text-xs sm:text-sm ml-1">vs last month</span>
            </div>
          )}
        </div>
        <motion.div 
          className={`p-2 sm:p-3 rounded-xl ${colorClasses[color as keyof typeof colorClasses]}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
      </div>
    </Card>
  )
}

