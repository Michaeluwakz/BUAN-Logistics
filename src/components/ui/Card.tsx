import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'medium'
}: CardProps) {
  const paddingClasses = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-xl shadow-md ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

