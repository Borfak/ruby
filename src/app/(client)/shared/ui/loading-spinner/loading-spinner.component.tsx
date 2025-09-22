import { type FC } from 'react'

import { Spinner } from '@heroui/react'

interface IProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  className?: string
}

export const LoadingSpinner: FC<Readonly<IProps>> = ({ size = 'md', color = 'primary', className }) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className || ''}`}>
      <Spinner size={size} color={color} />
    </div>
  )
}
