import { Spinner } from '@heroui/react'
import { type FC } from 'react'

interface IProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    className?: string
}

export const LoadingSpinner: FC<IProps> = ({ size = 'md', color = 'primary', className }) => {
    return (
        <div className={`flex justify-center items-center p-4 ${className || ''}`}>
            <Spinner size={size} color={color} />
        </div>
    )
}
