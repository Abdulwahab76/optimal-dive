// lib/getBlogPage.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { BlogPage as BlogPageType } from '@/payload-types'

export async function getBlogPage(): Promise<Partial<BlogPageType>> {
  try {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: 'blog-page', depth: 2 })
  } catch (error) {
    console.error('Failed to fetch blog-page global:', error)
    return {} // component apne default fallback text use kar lega
  }
}