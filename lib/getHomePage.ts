// lib/getHomePage.ts  ← server-only, keeps the Payload import
import { getPayload } from 'payload'
import config from '@payload-config'
import type { HomePage as HomePageType } from '@/payload-types'

export async function getHomePage(): Promise<HomePageType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'home-page', depth: 2 })
}