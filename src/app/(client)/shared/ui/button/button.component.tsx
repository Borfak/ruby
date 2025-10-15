import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled' | 'outlineSecondary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseStyles = 'rounded-lg font-semibold cursor-pointer transition-all duration-200'

  const variantStyles = {
    primary: 'bg-teal-700 text-white hover:bg-teal-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white',
    disabled: 'cursor-not-allowed',
    outlineSecondary: 'border-1 border-blue-500 text-blue-200',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
