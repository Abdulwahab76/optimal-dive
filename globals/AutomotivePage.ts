// globals/AutomotivePage.ts
import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { lightTextEditor } from '@/lib/lightRichText'
import { toLexicalDefault } from '@/lib/toLexicalDefault'

export const AutomotivePage: GlobalConfig = {
  slug: 'automotive-page',
  label: 'Automotive Page',
  admin: { group: 'Site Content' },
  fields: [
    {
      name: 'autoHero',
      type: 'group',
      label: 'Header',
      fields: [
        { name: 'autoHeroBadgeLabel', type: 'text', defaultValue: 'Brand Identity Design' },
        { name: 'autoHeroTitleLine1', type: 'text', defaultValue: 'Automotive Software' },
        { name: 'autoHeroTitleHighlight', type: 'text', defaultValue: 'Development Services' },
        {
          name: 'autoHeroDescription',
          type: 'richText',
          editor: lightTextEditor,
          defaultValue: toLexicalDefault(
            'We provide expert automotive software development services for vehicle automation, safety, connectivity, and performance optimization.'
          ),
        },
        { name: 'autoHeroCtaLabel', type: 'text', defaultValue: 'Start Your Project' },
        { name: 'autoHeroCtaLink', type: 'text', defaultValue: '/contact-us' },
        { name: 'autoHeroImage', type: 'upload', relationTo: 'media' },
        {
          name: 'autoHeroStats',
          type: 'array',
          dbName: 'auto_hero_stats',
          minRows: 1,
          defaultValue: [
            { autoStatValue: '500+', autoStatLabel: 'Projects Delivered' },
            { autoStatValue: '98%', autoStatLabel: 'Client Satisfaction' },
            { autoStatValue: '10+', autoStatLabel: 'Years Experience' },
            { autoStatValue: '50M+', autoStatLabel: 'Revenue Generated' },
          ],
          fields: [
            { name: 'autoStatValue', type: 'text', required: true },
            { name: 'autoStatLabel', type: 'text', required: true },
          ],
        },
      ],
    },

    {
      name: 'autoSolutions',
      type: 'group',
      label: 'Software Solutions Section',
      fields: [
        { name: 'autoSolutionsTitle', type: 'text', defaultValue: 'Software Solutions for' },
        { name: 'autoSolutionsHighlight', type: 'text', defaultValue: 'Automotive Industry' },
        {
          name: 'autoSolutionsItems',
          type: 'array',
          dbName: 'auto_solutions_items',
          minRows: 1,
          defaultValue: [
            {
              autoSolutionNumber: '01',
              autoSolutionTitle: 'Autonomous Driving Systems',
              autoSolutionDescription: toLexicalDefault(
                'Autonomous Driving Systems enhance safety and efficiency by enabling self-navigation using AI, sensors, and real-time data for precision.'
              ),
              autoSolutionFeatures: [
                { featureText: 'Smart Navigation' },
                { featureText: 'Adaptive Cruise Control' },
                { featureText: 'Automatic Parking' },
                { featureText: 'Night Vision Assistance' },
                { featureText: 'Real-time Object Detection' },
                { featureText: 'Traffic Signal Recognition' },
              ],
            },
            {
              autoSolutionNumber: '02',
              autoSolutionTitle: 'Predictive Maintenance',
              autoSolutionDescription: toLexicalDefault(
                'Predictive Maintenance uses AI to detect issues before breakdowns, ensuring smooth and safe vehicle operation.'
              ),
              autoSolutionFeatures: [
                { featureText: 'AI-driven Diagnostics' },
                { featureText: 'Automated Alerts' },
                { featureText: 'Early Issue Detection' },
                { featureText: 'Data-driven Maintenance' },
                { featureText: 'Performance Monitoring' },
                { featureText: 'Improved Vehicle Longevity' },
              ],
            },
            {
              autoSolutionNumber: '03',
              autoSolutionTitle: 'AI-powered Safety Features',
              autoSolutionDescription: toLexicalDefault(
                'AI-powered safety features improve autonomous driving by detecting hazards and preventing collisions using real-time sensor data.'
              ),
              autoSolutionFeatures: [
                { featureText: 'Collision Prevention' },
                { featureText: 'Emergency Braking' },
                { featureText: 'Blind Spot Detection' },
                { featureText: 'Weather Condition Alerts' },
                { featureText: 'Cross Traffic Alerts' },
                { featureText: 'Lane Keeping Assistance' },
              ],
            },
          ],
          fields: [
            { name: 'autoSolutionNumber', type: 'text', required: true },
            { name: 'autoSolutionTitle', type: 'text', required: true },
            {
              name: 'autoSolutionDescription',
              type: 'richText',
              editor: lightTextEditor,
              required: true,
              defaultValue: toLexicalDefault('Enter solution description...'),
            },
            {
              name: 'autoSolutionFeatures',
              type: 'array',
              dbName: 'auto_solution_features',
              minRows: 1,
              fields: [{ name: 'featureText', type: 'text', required: true }],
            },
          ],
        },
      ],
    },

    {
      name: 'autoWhyChooseUs',
      type: 'group',
      label: 'Why Choose Us Section',
      fields: [
        { name: 'autoWhyTitle', type: 'text', defaultValue: 'Why us for Automotive business' },
        {
          name: 'autoWhyItems',
          type: 'array',
          dbName: 'auto_why_items',
          minRows: 1,
          defaultValue: [
            {
              whyTitle: 'Automobile Experts',
              whyIcon: 'UserRound',
              whyDescription: toLexicalDefault(
                'Our team of experienced automotive specialists provides deep industry expertise, delivering optimized and reliable software solutions.'
              ),
            },
            {
              whyTitle: 'Custom Solutions',
              whyIcon: 'Cog',
              whyDescription: toLexicalDefault(
                'Every automotive business is unique. We build scalable, efficient, and custom software tailored to your requirements.'
              ),
            },
            {
              whyTitle: 'Data Security',
              whyIcon: 'ShieldCheck',
              whyDescription: toLexicalDefault(
                'Enterprise-grade security practices ensure your sensitive business and vehicle data remains protected.'
              ),
            },
            {
              whyTitle: 'QA & Testing',
              whyIcon: 'ClipboardCheck',
              whyDescription: toLexicalDefault(
                'Comprehensive testing guarantees high performance, stability, and long-term reliability.'
              ),
            },
            {
              whyTitle: 'Digital Cockpits',
              whyIcon: 'LayoutDashboard',
              whyDescription: toLexicalDefault(
                'Modern digital dashboards with AI-powered experiences create seamless interactions.'
              ),
            },
            {
              whyTitle: 'Effective Onboarding',
              whyIcon: 'Megaphone',
              whyDescription: toLexicalDefault(
                'A smooth onboarding process enables your teams to become productive quickly.'
              ),
            },
          ],
          fields: [
            { name: 'whyTitle', type: 'text', required: true },
            {
              name: 'whyIcon',
              type: 'select',
              defaultValue: 'UserRound',
              options: ['UserRound', 'Cog', 'ShieldCheck', 'ClipboardCheck', 'LayoutDashboard', 'Megaphone'],
            },
            {
              name: 'whyDescription',
              type: 'richText',
              editor: lightTextEditor,
              required: true,
              defaultValue: toLexicalDefault('Enter description...'),
            },
          ],
        },
      ],
    },

    {
      name: 'autoFaq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'autoFaqHeading', type: 'text', defaultValue: 'Common Branding Questions' },
        {
          name: 'autoFaqItems',
          type: 'array',
          dbName: 'auto_faq_items',
          minRows: 1,
          defaultValue: [
            {
              faqQuestion: 'How long does the branding process take?',
              faqAnswer: toLexicalDefault(
                'Most branding projects take between 2–6 weeks depending on the scope, revisions, and required deliverables.'
              ),
            },
            {
              faqQuestion: 'What deliverables do I receive?',
              faqAnswer: toLexicalDefault(
                "You'll receive your logo, color palette, typography, brand guidelines, social assets, and all source files depending on your package."
              ),
            },
            {
              faqQuestion: 'Can you rebrand an existing company?',
              faqAnswer: toLexicalDefault(
                "Absolutely. We help businesses modernize their identity while preserving the equity they've already built."
              ),
            },
            {
              faqQuestion: 'Do you provide brand guidelines?',
              faqAnswer: toLexicalDefault(
                'Yes. Every branding project includes a comprehensive brand guideline document to ensure consistency.'
              ),
            },
            {
              faqQuestion: 'How do you ensure brand consistency?',
              faqAnswer: toLexicalDefault(
                'We create clear visual systems, messaging frameworks, and documentation that your entire team can follow.'
              ),
            },
          ],
          fields: [
            { name: 'faqQuestion', type: 'text', required: true },
            {
              name: 'faqAnswer',
              type: 'richText',
              editor: lightTextEditor,
              required: true,
              defaultValue: toLexicalDefault('Enter answer...'),
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/automative')
      },
    ],
  },
}