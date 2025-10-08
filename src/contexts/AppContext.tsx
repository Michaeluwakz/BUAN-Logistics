import { createContext, useContext, useReducer, ReactNode } from 'react'
import { AppState, AppAction } from '../types'

const initialState: AppState = {
  cart: [],
  user: null,
  isAuthenticated: false,
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.cart.findIndex(
        item => item.foodItem.id === action.payload.foodItem.id
      )
      if (existingIndex >= 0) {
        const newCart = [...state.cart]
        newCart[existingIndex].quantity += action.payload.quantity
        return { ...state, cart: newCart }
      }
      return { ...state, cart: [...state.cart, action.payload] }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.foodItem.id !== action.payload),
      }
    case 'UPDATE_CART_QUANTITY': {
      const newCart = state.cart.map(item =>
        item.foodItem.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return { ...state, cart: newCart }
    }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'SET_USER':
      return { ...state, user: action.payload, isAuthenticated: true }
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false, cart: [] }
    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

