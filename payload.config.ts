// payload.config.ts
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
// import type { SharpDependency } from 'payload'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Categories, Posts, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
     connectionString: process.env.DATABASE_URI!,
    },
    push: process.env.NODE_ENV === 'development',
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['posts', 'pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc?.title} | Optimal Dive`,
      generateDescription: ({ doc }) => doc?.excerpt,
    }),
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})