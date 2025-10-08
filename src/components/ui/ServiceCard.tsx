import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Card from './Card'

interface ServiceCardProps {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ id, icon, title, description, features }: ServiceCardProps) {
  return (
    <Card hover className="h-full">
      <Link to={`/services/${id}`} className="block h-full">
        <div className="flex flex-col h-full p-2 sm:p-4">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{icon}</div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex-grow">{description}</p>
          
          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs sm:text-sm text-gray-700">
                <span className="text-[#3399FF] mr-1.5 sm:mr-2 text-sm sm:text-base">✓</span>
                {feature}
              </div>
            ))}
          </div>
          
          <motion.div 
            className="flex items-center text-[#003366] font-medium text-xs sm:text-sm md:text-base"
            whileHover={{ x: 5 }}
          >
            Learn More <ArrowRight size={16} className="ml-1.5 sm:ml-2 sm:w-[18px] sm:h-[18px]" />
          </motion.div>
        </div>
      </Link>
    </Card>
  )
}

