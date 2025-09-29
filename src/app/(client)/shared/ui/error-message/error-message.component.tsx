import { AlertTriangle } from 'lucide-react'
import { type FC } from 'react'

import { Alert } from '@heroui/react'

// interface
interface IProps {
  message: string
  title?: string
  variant?: 'flat' | 'faded' | 'bordered' | 'solid'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

// component
const ErrorMessage: FC<Readonly<IProps>> = ({ message, title = 'Error', variant = 'faded', color = 'danger' }) => {
  // return
  return (
    <Alert
      color={color}
      variant={variant}
      startContent={<AlertTriangle size={20} />}
      title={title}
      description={message}
      className='mb-4'
    />
  )
}

export default ErrorMessage
