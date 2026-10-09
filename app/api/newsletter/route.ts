// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { z } from 'zod'

const schema = z.object({
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(254),
  website: z.string().optional(), // honeypot, real users yeh khali chhodte hain
  source: z.string().max(200).optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid email.' },
        { status: 400 }
      )
    }

    const { email, website, source } = parsed.data

    // Bot ne hidden field bhar di: chup chaap success dikha do, save mat karo
    if (website) return NextResponse.json({ success: true })

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'subscribers',
      where: { email: { equals: email } },
      limit: 1,
      depth: 0,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({ success: true, alreadySubscribed: true })
    }

    await payload.create({
      collection: 'subscribers',
      data: { email, source, status: 'subscribed' },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}