// lib/getAutomotivePage.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { AutomotivePage as AutomotivePageType } from '@/payload-types'

export async function getAutomotivePage(): Promise<AutomotivePageType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'automotive-page', depth: 2 })
}