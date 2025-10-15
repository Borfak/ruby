import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: boolean
}

export const Card = ({ children, className = '', padding = true }: CardProps) => {
  return (
    <div className={`rounded-xl border-1 border-gray-200 bg-white ${padding ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  )
}
