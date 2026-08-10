// collections/Media.ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    // if you're on Vercel Blob storage (you already have the package installed)
    // otherwise this just stores locally in /media
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
  ],
}