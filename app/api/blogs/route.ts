// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Where } from 'payload'
import type { Media, Category as PayloadCategory } from '@/payload-types'
import type { Blog } from '@/types/blog'

 // app/api/blogs/route.ts
function toBlog(post: any): Blog {
  const image = post.image as Media | null
  const category = post.category as PayloadCategory | null
  const dateSource = post.publishedAt ?? post.createdAt
  const dateObj = new Date(dateSource)

  return {
    id: String(post.id),
    slug: post.slug,
    title: post.title,
    image: image?.url ?? '/images/blog-placeholder.png',
    author: post.author ?? 'Optimal Dive',
    category: {
      slug: category?.slug ?? 'all',
      label: category?.label ?? 'General',
    },
    date: {
      day: String(dateObj.getDate()),
      month: dateObj.toLocaleString('en-US', { month: 'short' }).toLowerCase(),
    },
    excerpt: post.excerpt ?? undefined,
    publishedAt: post.publishedAt ?? post.createdAt,   // 👈 added
    createdAt: post.createdAt,                          // 👈 raw createdAt (not dateSource)
    updatedAt: post.updatedAt,                           // 👈 added
    status: post.status ?? undefined,                    // 👈 added
    meta: post.meta
      ? {
          title: post.meta.title ?? undefined,
          description: post.meta.description ?? undefined,
          image:
            post.meta.image && typeof post.meta.image === 'object'
              ? {
                  id: post.meta.image.id,
                  url: post.meta.image.url ?? '',
                  alt: post.meta.image.alt ?? undefined,
                }
              : undefined,
          canonicalURL: post.meta.canonicalURL ?? null,
        }
      : undefined,
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')?.trim() || ''
  const category = searchParams.get('category') ?? 'all'
  const page = Math.max(1, Number(searchParams.get('page') ?? '1') || 1)
  const limit = Math.max(1, Number(searchParams.get('limit') ?? '6') || 6)

  const payload = await getPayload({ config })

  const andConditions: Where[] = [{ status: { equals: 'published' } }]

  if (title) {
    andConditions.push({ title: { like: title } })
  }

  if (category !== 'all') {
    // 'category' relationship field ke andar linked category doc ka slug match karein
    const { docs: matchedCategories } = await payload.find({
      collection: 'categories',
      where: { slug: { equals: category } },
      limit: 1,
    })

    if (matchedCategories[0]) {
      andConditions.push({ category: { equals: matchedCategories[0].id } })
    } else {
      // category exist hi nahi karti — empty result return karein
      return NextResponse.json({
        data: [],
        pagination: { page: 1, limit, totalItems: 0, totalPages: 0 },
      })
    }
  }

  const where: Where = { and: andConditions }

  const result = await payload.find({
    collection: 'posts',
    where,
    page,
    limit,
    sort: '-publishedAt',
    depth: 2,
  })

  return NextResponse.json({
    data: result.docs.map(toBlog),
    pagination: {
      page: result.page,
      limit: result.limit,
      totalItems: result.totalDocs,
      totalPages: result.totalPages,
    },
  })
}