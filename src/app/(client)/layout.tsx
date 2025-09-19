import '@/config/styles/global.css'
import { type FC, type ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const RootLayout: FC<Readonly<IProps>> = props => {
    const { children } = props
    return (
        <html suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
