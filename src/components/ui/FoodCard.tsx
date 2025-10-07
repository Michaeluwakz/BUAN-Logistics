import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { FoodItem } from '../../types'
import { useApp } from '../../contexts/AppContext'

interface FoodCardProps {
  foodItem: FoodItem
}

export default function FoodCard({ foodItem }: FoodCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useApp()

  const availabilityColors = {
    'in-stock': 'text-green-600 bg-green-50',
    'low-stock': 'text-yellow-600 bg-yellow-50',
    'out-of-stock': 'text-red-600 bg-red-50'
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { foodItem, quantity }
    })
    setQuantity(1)
  }

  return (
    <Card hover padding="none" className="overflow-hidden">
      <div className="relative">
        <img 
          src={foodItem.image} 
          alt={foodItem.name}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium ${availabilityColors[foodItem.availability]}`}>
          {foodItem.availability.replace('-', ' ').toUpperCase()}
        </span>
      </div>
      
      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase tracking-wide">{foodItem.category}</span>
        <h3 className="text-lg font-semibold font-poppins mt-1 mb-2">{foodItem.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{foodItem.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-[#003366]">${foodItem.price}</span>
            <span className="text-gray-500 text-sm">/{foodItem.unit}</span>
          </div>
          <span className="text-xs text-gray-500">From {foodItem.origin}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <Button
            variant="secondary"
            size="small"
            icon={<ShoppingCart size={16} />}
            onClick={handleAddToCart}
            disabled={foodItem.availability === 'out-of-stock'}
            className="flex-grow"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  )
}

