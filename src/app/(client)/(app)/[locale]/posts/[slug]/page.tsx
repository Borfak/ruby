import { ArrowLeft } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { type FC } from 'react'
import { PostDetail } from '../../../../features/post-detail'

interface IProps {
    params: Promise<{ locale: string; slug: string }>
}

export const revalidate = 30

export async function generateStaticParams() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        return posts.slice(0, 20).map((post: { id: number }) => ({
            slug: post.id.toString(),
        }))
    } catch (error) {
        console.error('Error generating static params:', error)
        return []
    }
}

const PostPage: FC<IProps> = async ({ params }) => {
    const { locale, slug } = await params
    const t = await getTranslations({ locale, namespace: 'pages.post' })

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='mb-6'>
                <Link
                    href={`/${locale}`}
                    className='inline-flex items-center gap-2 text-foreground-600 hover:text-foreground'
                >
                    <ArrowLeft size={16} />
                    <span>{t('backToPosts')}</span>
                </Link>
            </div>

            <PostDetail slug={slug} />
        </div>
    )
}

export default PostPage
