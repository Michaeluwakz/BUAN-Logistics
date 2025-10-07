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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and complete your order</p>
        </div>

        {state.cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.cart.map((item) => (
                <Card key={item.foodItem.id}>
                  <div className="flex gap-4">
                    <img 
                      src={item.foodItem.image} 
                      alt={item.foodItem.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold font-poppins">{item.foodItem.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.foodItem.category}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleUpdateQuantity(item.foodItem.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.foodItem.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-lg font-bold text-primary-orange">
                          ${(item.foodItem.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.foodItem.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <h2 className="text-2xl font-bold font-poppins mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-orange">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="large" 
                  className="w-full mb-3"
                  icon={<CreditCard />}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline" 
                  size="medium" 
                  className="w-full"
                  onClick={() => navigate('/services/food-export')}
                >
                  Continue Shopping
                </Button>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Shipping Details</h3>
                  <p className="text-sm text-gray-600">
                    {state.user?.address}<br />
                    {state.user?.country}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="text-center py-16">
            <ShoppingCart size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <Button 
              variant="primary"
              onClick={() => navigate('/services/food-export')}
            >
              Browse Food Items
            </Button>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}

