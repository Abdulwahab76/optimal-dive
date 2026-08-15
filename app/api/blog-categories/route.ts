 import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'categories',
    limit: 100,
    sort: 'label',
  })

  const categories = [
    { slug: 'all', label: 'All' },
    ...docs.map((c) => ({ slug: c.slug, label: c.label })),
  ]

  return NextResponse.json({ data: categories })
}