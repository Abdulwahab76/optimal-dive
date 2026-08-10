// lib/getBrandingPage.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { BrandingPage as BrandingPageType } from '@/payload-types'

export async function getBrandingPage(): Promise<BrandingPageType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'branding-page', depth: 2 })
}