// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Where } from 'payload'

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
    andConditions.push({ 'category.slug': { equals: category } })
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
    data: result.docs,
    pagination: {
      page: result.page,
      limit: result.limit,
      totalItems: result.totalDocs,
      totalPages: result.totalPages,
    },
  })
}