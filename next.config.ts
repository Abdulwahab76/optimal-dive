// next.config.ts
import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'lh3.googleusercontent.com'],
  },

   typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)