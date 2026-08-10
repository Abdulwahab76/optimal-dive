// collections/Pages.ts
import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true }, // e.g. "branding", "automative"
    { name: 'content', type: 'richText', editor: lexicalEditor() },
  ],
}