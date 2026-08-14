import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/payload-types'

import SingleBlogHeader from '@/app/(frontend)/components/Blog/BlogHeader'
import BlogContent from '@/app/(frontend)/components/Blog/BlogContent'
import LatestInsights from '@/app/(frontend)/components/Home/LatestInsights'
import { generateSEOMetadata, generateJsonLD } from "@/lib/seo";
import { getPost } from '@/lib/getBlogPage'
import JsonLd from '../../components/JsonLd'
import { getContactFormData } from '@/lib/getContactForm'
import { extractTOC } from '../../lib/extractTOC'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { Metadata } from 'next'
 


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return generateSEOMetadata(post.meta);
}



export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
    limit: 1,
    depth: 2,
  })

  const post = docs[0]

  if (!post) {
    notFound()
  }

  const image = post.image as Media

  const category =
    typeof post.category === 'object'
      ? post.category
      : { slug: '', label: '' }
  const formConfig = await getContactFormData();
  const toc = extractTOC(post.content as SerializedEditorState);

  return (
    <div>
      <JsonLd data={generateJsonLD(post.meta)} />
      <SingleBlogHeader
        post={{
          title: post.title,
          image: image?.url ?? '',
          author: post.author ?? 'Optimal Dive',
          category: {
            slug: category.slug ?? '',
            label: category.label ?? '',
          },
          createdAt: post.publishedAt ?? post.createdAt,
        }}
      />

      <BlogContent
        image={image?.url ?? ''}
        title={post.title}
        content={post.content as SerializedEditorState}
        formConfig={formConfig}
         toc={toc}
      />

      <LatestInsights />
    </div>
  )
}