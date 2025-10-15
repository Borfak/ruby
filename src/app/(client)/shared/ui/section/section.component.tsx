import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gradient' | 'default'
}

export const Section = ({ children, className = '', background = 'white' }: SectionProps) => {
  const backgroundStyles = {
    white: 'flex w-full justify-center gap-6 bg-white px-4',
    gradient: 'flex w-full justify-center gap-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 to-white px-4',
    default: 'flex w-full justify-center gap-6 bg-[#F6FBFF] px-4',
  }

  return <section className={`py-16 ${backgroundStyles[background]} ${className}`}>{children}</section>
}
