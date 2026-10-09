// collections/Subscribers.ts
import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  labels: { singular: 'Subscriber', plural: 'Newsletter Subscribers' },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'source', 'createdAt'],
    group: 'Site Content',
  },
  access: {
    // Public REST se koi direct create/read nahi kar sakta.
    // Website sirf neeche wale /api/newsletter route se subscribe karegi.
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true, index: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'subscribed',
      options: ['subscribed', 'unsubscribed'],
      admin: { position: 'sidebar' },
    },
    {
      name: 'source',
      type: 'text',
      admin: { position: 'sidebar', description: 'Konse page se subscribe hua' },
    },
  ],
  timestamps: true,
}