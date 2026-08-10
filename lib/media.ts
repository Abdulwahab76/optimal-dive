// lib/media.ts  ← client-safe, NO payload/sharp imports
import type { Media } from '@/payload-types'

export function mediaUrl(field: number | Media | null | undefined, fallback: string): string {
  if (field && typeof field === 'object' && field.url) return field.url
  return fallback
}