// collections/Posts.ts
import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { revalidatePath } from "next/cache";
export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Blog Post', plural: 'Blog Posts' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'status', 'publishedAt'] },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Optimal Dive',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'excerpt', type: 'textarea' },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    // SEO plugin injects a "meta" group automatically — see Step 5
  ],
  hooks: {
  afterChange: [
    async ({ doc }) => {
      revalidatePath("/blog");
      revalidatePath(`/blog/${doc.slug}`);
    },
  ],

  afterDelete: [
    async ({ doc }) => {
      revalidatePath("/blog");
      revalidatePath(`/blog/${doc.slug}`);
    },
  ],
},
}