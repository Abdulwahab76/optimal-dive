// collections/Submissions.ts
import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  labels: { singular: 'Contact Submission', plural: 'Contact Submissions' },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['firstName', 'lastName', 'email', 'phone', 'createdAt'],
    group: 'Site Content',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),   // sirf logged-in admin dekh sake
    create: () => true,                            // public form se submit ho sake
    update: () => false,                            // koi edit na kar sake
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'contacted', 'closed'],
      admin: { position: 'sidebar' },
    },
    {
      name: 'source',
      type: 'text',
      admin: { position: 'sidebar', description: 'Konse page se submit hua' },
    },
  ],
  timestamps: true, // createdAt automatically milega

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create') {
          try {
            await req.payload.sendEmail({
              to: process.env.CONTACT_NOTIFICATION_EMAIL || 'owner@optimaldive.com',
              subject: `New Contact Form Submission — ${doc.firstName} ${doc.lastName}`,
              html: `
                <h2>New Contact Submission</h2>
                <p><strong>Name:</strong> ${doc.firstName} ${doc.lastName}</p>
                <p><strong>Email:</strong> ${doc.email}</p>
                <p><strong>Phone:</strong> ${doc.phone}</p>
                <p><strong>Message:</strong></p>
                <p>${doc.message}</p>
                <hr />
                <p style="color:#888">View in admin: ${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/submissions/${doc.id}</p>
              `,
            })
          } catch (error) {
            console.error('Failed to send notification email:', error)
            // email fail ho to bhi submission save rahega — data loss nahi hoga
          }
        }
      },
    ],
  },
}