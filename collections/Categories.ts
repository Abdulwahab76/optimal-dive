// collections/Categories.ts
import type { CollectionConfig } from 'payload'
 
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'label' },
  access: { read: () => true },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
  
}