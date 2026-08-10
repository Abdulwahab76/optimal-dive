// globals/BrandingPage.ts
import type { GlobalConfig } from 'payload'

export const BrandingPage: GlobalConfig = {
  slug: 'branding-page',
  label: 'Branding Page',
  admin: { group: 'Site Content' },
  fields: [
    // ---------- HEADER ----------
    {
      name: 'brandHero',
      type: 'group',
      label: 'Header',
      fields: [
        { name: 'brandHeroBadgeLabel', type: 'text', defaultValue: 'Brand Identity Design' },
        { name: 'brandHeroTitleLine1', type: 'text', defaultValue: 'Crafting Identities' },
        { name: 'brandHeroTitleHighlight', type: 'text', defaultValue: 'That Resonate' },
        {
          name: 'brandHeroDescription',
          type: 'textarea',
          defaultValue:
            'We design iconic brand identities that work via visual design, messaging, and positioning. We help you convey your value, build trust, and become a brand that performs well and is remembered by your audience.',
        },
        { name: 'brandHeroCtaLabel', type: 'text', defaultValue: 'Start Your Project' },
        { name: 'brandHeroCtaLink', type: 'text', defaultValue: '/contact-us' },
        { name: 'brandHeroImage', type: 'upload', relationTo: 'media' },
      ],
    },

    // ---------- SHOWCASE ----------
    {
      name: 'brandShowcase',
      type: 'group',
      label: 'Showcase Section',
      fields: [
        { name: 'showcaseSideImage', type: 'upload', relationTo: 'media' },
        { name: 'showcaseHeading', type: 'text', defaultValue: 'More Than Just a Logo' },
        {
          name: 'showcaseDescription',
          type: 'textarea',
          defaultValue:
            'Branding is the strategic process of creating a unique identity for your business. It encompasses everything from your visual identity and tone of voice to your values and customer experience. At Optimal Dev, we believe great branding tells a story that connects, converts, and creates loyalty.',
        },
        { name: 'showcaseImageOne', type: 'upload', relationTo: 'media' },
        { name: 'showcaseImageTwo', type: 'upload', relationTo: 'media' },
      ],
    },

    // ---------- SERVICES ----------
    {
      name: 'brandServices',
      type: 'group',
      label: 'Branding Services Section',
      fields: [
        { name: 'brandServicesHeading', type: 'text', defaultValue: 'Our Branding Services' },
        {
          name: 'brandServicesDescription',
          type: 'textarea',
          defaultValue: 'From strategic foundations to visual execution, we provide end-to-end branding solutions.',
        },
        {
          name: 'brandServiceItems',
          type: 'array',
          dbName: 'brand_service_items',
          minRows: 1,
          defaultValue: [
            { bsTitle: 'Brand Strategy', bsIcon: 'BadgeCheck', bsDescription: "We define your brand's purpose, positioning, and personality to create a powerful foundation for all marketing efforts." },
            { bsTitle: 'Visual Identity Design', bsIcon: 'Palette', bsDescription: 'Logos, color palettes, typography, and comprehensive brand guidelines that ensure consistency everywhere.' },
            { bsTitle: 'Brand Messaging', bsIcon: 'MessageSquare', bsDescription: 'Crafting your voice, messaging, and tone guides that speak directly to the right audience.' },
            { bsTitle: 'Brand Guidelines', bsIcon: 'BookOpen', bsDescription: 'Detailed documentation that ensures your brand stays consistent across all platforms and touchpoints.' },
            { bsTitle: 'Rebranding', bsIcon: 'RefreshCw', bsDescription: 'Transform existing brands to stay relevant, modern, and aligned with evolving business goals.' },
            { bsTitle: 'Brand Collateral', bsIcon: 'LayoutGrid', bsDescription: 'Business cards, presentations, social media templates, and marketing materials that reflect your identity.' },
          ],
          fields: [
            { name: 'bsTitle', type: 'text', required: true },
            {
              name: 'bsIcon',
              type: 'select',
              defaultValue: 'BadgeCheck',
              options: ['BadgeCheck', 'Palette', 'MessageSquare', 'BookOpen', 'RefreshCw', 'LayoutGrid'],
            },
            { name: 'bsDescription', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ---------- PROCESS ----------
    {
      name: 'brandProcess',
      type: 'group',
      label: 'Branding Process Section',
      fields: [
        { name: 'processHeading', type: 'text', defaultValue: 'Our Branding Process' },
        { name: 'processSubheading', type: 'text', defaultValue: 'A proven methodology to bring your brand to life.' },
        {
          name: 'processStepsList',
          type: 'array',
          dbName: 'brand_process_steps',
          minRows: 1,
          defaultValue: [
            { bpTitle: 'Ideate', bpDescription: 'We analyze your vision thoroughly to ensure the roadmap aligns perfectly with your end goals.' },
            { bpTitle: 'Design', bpDescription: 'We craft MVPs that balance stunning design with core functionality.' },
            { bpTitle: 'Develop', bpDescription: 'We build end-to-end solutions using agile processes and robust architecture.' },
            { bpTitle: 'Test', bpDescription: 'We ensure quality and reliability through extensive QA across every touchpoint.' },
            { bpTitle: 'Launch', bpDescription: 'We execute smooth rollouts with tailored deployment plans and dedicated support.' },
            { bpTitle: 'Support', bpDescription: 'We provide ongoing enhancements to ensure your product continues to succeed.' },
          ],
          fields: [
            { name: 'bpTitle', type: 'text', required: true },
            { name: 'bpDescription', type: 'textarea', required: true },
            { name: 'bpIcon', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },

    // ---------- STATS ----------
    {
      name: 'brandStats',
      type: 'group',
      label: 'Branding Stats Section',
      fields: [
        { name: 'statsHeading', type: 'text', defaultValue: 'The Power of a Strong Brand' },
        {
          name: 'statsDescription',
          type: 'textarea',
          defaultValue: "Branding isn't just about aesthetics; it's a measurable driver of business growth.",
        },
        {
          name: 'statsItems',
          type: 'array',
          dbName: 'brand_stats_items',
          minRows: 1,
          defaultValue: [
            { bStatValue: '94%', bStatLabel: 'First impressions are design-related' },
            { bStatValue: '89%', bStatLabel: 'Shoppers stay loyal to brands that share their values' },
            { bStatValue: '77%', bStatLabel: 'Consumers buy based on brand name rather than product name' },
            { bStatValue: '60%', bStatLabel: 'Increase in revenue from consistent brand presentation' },
          ],
          fields: [
            { name: 'bStatValue', type: 'text', required: true },
            { name: 'bStatLabel', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        const { revalidatePath } = await import('next/cache')
        revalidatePath('/branding')
      },
    ],
  },
}