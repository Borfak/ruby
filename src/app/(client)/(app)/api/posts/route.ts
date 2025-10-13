import { NextRequest, NextResponse } from 'next/server'

import { restApiFetcher } from '@/pkg/libraries/rest-api/fetcher'

// GET posts with optional search
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const q = (searchParams.get('q') || '').trim().toLowerCase()

  const posts = await restApiFetcher
    .get('posts', { cache: 'force-cache', next: { revalidate: 30 } })
    .json<Array<{ id: number; title: string; body: string; userId: number }>>()

  if (!q) {
    return NextResponse.json(posts)
  }

  const filtered = posts.filter((p) => {
    const title = String(p?.title || '').toLowerCase()
    const body = String(p?.body || '').toLowerCase()
    return title.includes(q) || body.includes(q)
  })

  return NextResponse.json(filtered)
}
