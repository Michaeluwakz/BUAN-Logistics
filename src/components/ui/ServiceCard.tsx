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
        <div className="flex flex-col h-full">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          
          <div className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <span className="text-[#3399FF] mr-2">✓</span>
                {feature}
              </div>
            ))}
          </div>
          
          <motion.div 
            className="flex items-center text-[#003366] font-medium"
            whileHover={{ x: 5 }}
          >
            Learn More <ArrowRight size={18} className="ml-2" />
          </motion.div>
        </div>
      </Link>
    </Card>
  )
}

