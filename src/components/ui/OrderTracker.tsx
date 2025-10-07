import { Check } from 'lucide-react'

interface OrderTrackerProps {
  status: string
  steps: string[]
  currentStep: number
}

export default function OrderTracker({ steps, currentStep }: OrderTrackerProps) {
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              index < currentStep 
                ? 'bg-[#3399FF] text-white' 
                : index === currentStep
                ? 'bg-[#003366] text-white animate-pulse'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {index < currentStep ? <Check size={20} /> : index + 1}
            </div>
            <span className={`text-xs mt-2 text-center ${
              index <= currentStep ? 'text-gray-900 font-medium' : 'text-gray-500'
            }`}>
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className={`absolute top-5 left-[50%] w-full h-1 ${
                index < currentStep ? 'bg-[#3399FF]' : 'bg-gray-200'
              }`} style={{ zIndex: -1 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

