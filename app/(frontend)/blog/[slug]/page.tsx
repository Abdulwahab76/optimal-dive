// app/(frontend)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/payload-types'
 import SingleBlogHeader from '@/app/(frontend)/components/Blog/BlogHeader'
import BlogContent from '@/app/(frontend)/components/Blog/BlogContent'
import LatestInsights from '@/app/(frontend)/components/Home/LatestInsights'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })

  const post = docs[0]
  if (!post) notFound()

  const image = post.image as Media
  const category =
    typeof post.category === 'object' ? post.category : { slug: '', label: '' }

  return (
    <div>
      <SingleBlogHeader
        post={{
          title: post.title,
          image: image?.url ?? '',
          author: post.author ?? 'Optimal Dive',
          category: { slug: category.slug ?? '', label: category.label ?? '' },
          createdAt: post.publishedAt ?? post.createdAt,
        }}
      />
      <BlogContent image={image?.url ?? ''} title={post.title} content={post.content} />
      <LatestInsights />
    </div>
  )
}