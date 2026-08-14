// lib/getContactPage.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { ContactPage as ContactPageType } from '@/payload-types'

export async function getContactPageData(): Promise<ContactPageType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'contact-page', depth: 2 })
}