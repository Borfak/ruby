import { type FC } from 'react'
import { HomeModule } from '../../modules/home/index'

interface IProps {
    params: Promise<{ locale: string }>
}

export const revalidate = 30

const HomePage: FC<IProps> = async ({ params }) => {
    const { locale } = await params

    return <HomeModule locale={locale} />
}

export default HomePage
