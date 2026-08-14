// lib/getNavbar.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Navbar as NavbarType } from '@/payload-types'

export async function getNavbarData(): Promise<NavbarType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'navbar', depth: 2 })
}