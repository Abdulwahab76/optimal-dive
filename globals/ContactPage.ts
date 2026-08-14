// globals/ContactPage.ts
import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  admin: { group: 'Site Content' },
  fields: [
    // ---------- HERO ----------
    {
      name: 'hero',
      type: 'group',
      label: 'Header',
      fields: [
        { name: 'badgeLabel', type: 'text', defaultValue: 'Contact Us' },
        { name: 'titleLine1', type: 'text', defaultValue: "Let's Build Something" },
        { name: 'titleHighlight', type: 'text', defaultValue: 'Amazing Together' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Have a project in mind? Tell us about your goals and our team will help turn your ideas into powerful digital solutions.',
        },
      ],
    },

    // ---------- FORM SECTION SIDE PANEL ----------
    {
      name: 'formPanel',
      type: 'group',
      label: 'Form Section — Left Panel',
      fields: [
        { name: 'panelImage', type: 'upload', relationTo: 'media' },
        { name: 'panelEyebrow', type: 'text', defaultValue: 'Contact Optimal Dive' },
        { name: 'panelTitleLine1', type: 'text', defaultValue: "Let's build your next" },
        { name: 'panelTitleHighlight', type: 'text', defaultValue: 'digital solution' },
        {
          name: 'panelDescription',
          type: 'textarea',
          defaultValue: "Share your idea with our team and let's create something powerful together.",
        },
      ],
    },

    // ---------- CONTACT CARDS ----------
    {
      name: 'contactCards',
      type: 'array',
      dbName: 'contact_page_cards',
      minRows: 1,
      defaultValue: [
        { ccTitle: 'Call Any Time', ccValue: '+1 (307) 291-4467', ccIcon: 'Phone' },
        { ccTitle: 'Say Hello', ccValue: 'info@optimaldive.com', ccIcon: 'Send' },
        { ccTitle: 'Address', ccValue: 'New York, United States', ccIcon: 'MapPin' },
      ],
      fields: [
        { name: 'ccTitle', type: 'text', required: true },
        { name: 'ccValue', type: 'text', required: true },
        {
          name: 'ccIcon',
          type: 'select',
          defaultValue: 'Phone',
          options: ['Phone', 'Send', 'MapPin'],
        },
      ],
    },

    // ---------- PROCESS SECTION ----------
    {
      name: 'process',
      type: 'group',
      label: 'Our Process Section',
      fields: [
        { name: 'processEyebrow', type: 'text', defaultValue: 'Our Process' },
        { name: 'processHeading', type: 'text', defaultValue: 'How We Work Together' },
        {
          name: 'processSteps',
          type: 'array',
          dbName: 'contact_page_process_steps',
          minRows: 1,
          defaultValue: [
            { psTitle: 'Discovery Meeting', psIcon: 'Video', psDescription: 'We schedule a video call to learn about your practice, understand your goals, and identify the challenges that are holding your growth back.' },
            { psTitle: 'Strategy Presentation', psIcon: 'PhoneCall', psDescription: 'If we are the right fit, we build a custom marketing plan for your practice and walk you through it on a follow up call.' },
            { psTitle: 'Launch and Grow', psIcon: 'TrendingUp', psDescription: 'Once the plan is approved, execution begins. Your dedicated team gets to work and you start seeing real, measurable growth.' },
          ],
          fields: [
            { name: 'psTitle', type: 'text', required: true },
            {
              name: 'psIcon',
              type: 'select',
              defaultValue: 'Video',
              options: ['Video', 'PhoneCall', 'TrendingUp'],
            },
            { name: 'psDescription', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        const { revalidatePath } = await import('next/cache')
        revalidatePath('/contact-us')
      },
    ],
  },
}