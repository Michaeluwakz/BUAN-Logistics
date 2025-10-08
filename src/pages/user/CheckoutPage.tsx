import { useNavigate } from 'react-router-dom'
import { Trash2, ShoppingCart, CreditCard } from 'lucide-react'
import PageLayout from '../../components/layout/PageLayout'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { useApp } from '../../contexts/AppContext'

export default function CheckoutPage() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()

  const total = state.cart.reduce((sum, item) => sum + (item.foodItem.price * item.quantity), 0)
  const shipping = 25
  const grandTotal = total + shipping

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } })
  }

  const handleCheckout = () => {
    alert('Order placed successfully! (Mock checkout)')
    dispatch({ type: 'CLEAR_CART' })
    navigate('/dashboard')
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-1 sm:mb-2">Shopping Cart</h1>
          <p className="text-gray-600 text-sm sm:text-base">Review your items and complete your order</p>
        </div>

        {state.cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {state.cart.map((item) => (
                <Card key={item.foodItem.id} className="p-3 sm:p-4 md:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <img 
                      src={item.foodItem.image} 
                      alt={item.foodItem.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold font-poppins truncate">{item.foodItem.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">{item.foodItem.category}</p>
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleUpdateQuantity(item.foodItem.id, item.quantity - 1)}
                            className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base"
                          >
                            -
                          </button>
                          <span className="px-2 sm:px-3 md:px-4 py-1 font-medium text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.foodItem.id, item.quantity + 1)}
                            className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-primary-orange">
                          ${(item.foodItem.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.foodItem.id)}
                      className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                    >
                      <Trash2 size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="lg:sticky lg:top-24 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins mb-4 sm:mb-6">Order Summary</h2>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-orange">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="small" 
                  className="w-full mb-2 sm:mb-3 text-sm sm:text-base"
                  icon={<CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline" 
                  size="small" 
                  className="w-full text-sm sm:text-base"
                  onClick={() => navigate('/services/food-export')}
                >
                  Continue Shopping
                </Button>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Shipping Details</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {state.user?.address}<br />
                    {state.user?.country}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="text-center py-12 sm:py-16 p-4 sm:p-6">
            <ShoppingCart size={48} className="text-gray-300 mx-auto mb-3 sm:mb-4 sm:w-16 sm:h-16" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Add some items to get started</p>
            <Button 
              variant="primary"
              size="small"
              onClick={() => navigate('/services/food-export')}
              className="text-sm sm:text-base"
            >
              Browse Food Items
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}

