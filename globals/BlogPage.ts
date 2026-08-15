// globals/BlogPage.ts
import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: 'Blog Page',
  admin: { group: 'Site Content' },
  fields: [
    {
      name: 'blogHero',
      type: 'group',
      label: 'Header',
      fields: [
        { name: 'blogBadgeLabel', type: 'text', defaultValue: 'Blogs' },
        { name: 'blogTitleLine1', type: 'text', defaultValue: 'The Optimal Dive' },
        { name: 'blogTitleHighlight', type: 'text', defaultValue: 'Insights' },
        { name: 'blogHeroImage', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/blog')
      },
    ],
  },
}