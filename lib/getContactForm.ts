// lib/getContactForm.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { ContactForm as ContactFormType } from '@/payload-types'

export async function getContactFormData(): Promise<ContactFormType> {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'contact-form', depth: 1 })
}