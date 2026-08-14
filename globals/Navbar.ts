// globals/Navbar.ts
import type { GlobalConfig } from 'payload'

export const NavbarGlobal: GlobalConfig = {
  slug: 'navbar',
  label: 'Navbar / Mega Menu',
  admin: { group: 'Site Content' },
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },

    {
      name: 'navLinks',
      type: 'array',
      label: 'Main Nav Links',
      dbName: 'navbar_nav_links',
      minRows: 1,
      defaultValue: [
        { navLabel: 'Home', navHref: '/' },
        { navLabel: 'About', navHref: '/about' },
        { navLabel: 'Portfolio', navHref: '/portfolio' },
        { navLabel: 'Blog', navHref: '/blog' },
      ],
      fields: [
        { name: 'navLabel', type: 'text', required: true },
        { name: 'navHref', type: 'text', required: true },
      ],
    },

    { name: 'contactCtaLabel', type: 'text', defaultValue: 'contact' },
    { name: 'contactCtaLink', type: 'text', defaultValue: '/contact-us' },

    // ---------- SERVICES MEGA MENU ----------
    {
      name: 'servicesMenu',
      type: 'group',
      label: 'Services Mega Menu',
      fields: [
        { name: 'highlightTitle', type: 'text', defaultValue: 'Branding' },
        {
          name: 'highlightDescription',
          type: 'textarea',
          defaultValue: 'We design iconic brand identities that work via visual design……',
        },
        { name: 'highlightLink', type: 'text', defaultValue: '/branding' },
        { name: 'highlightCtaLabel', type: 'text', defaultValue: 'Explore Branding' },
        {
          name: 'serviceMenuItems',
          type: 'array',
          dbName: 'navbar_service_items',
          minRows: 1,
          defaultValue: [
            { smTitle: 'Web Development', smDesc: 'Digital Experience that scale.', smHref: '/services/web-development', smIcon: 'Code2' },
            { smTitle: 'Mobile Apps', smDesc: 'Native Power in your pocket.', smHref: '/services/mobile-apps', smIcon: 'Smartphone' },
            { smTitle: 'Ai Solution', smDesc: 'Intelligence Woven into code.', smHref: '/services/ai-solution', smIcon: 'Sparkles' },
            { smTitle: 'Digital Marketing', smDesc: 'Our marketing automation solutions.', smHref: '/services/digital-marketing', smIcon: 'Megaphone' },
            { smTitle: 'Search Engine Optimization', smDesc: 'By optimizing content, performance analysis.', smHref: '/services/seo', smIcon: 'Search' },
            { smTitle: 'E-Commerce Solution', smDesc: 'We develop intelligent e-commerce systems.', smHref: '/services/e-commerce', smIcon: 'ShoppingCart' },
          ],
          fields: [
            { name: 'smTitle', type: 'text', required: true },
            { name: 'smDesc', type: 'text', required: true },
            { name: 'smHref', type: 'text', required: true },
            {
              name: 'smIcon',
              type: 'select',
              defaultValue: 'Code2',
              options: ['PenTool', 'Code2', 'Smartphone', 'Sparkles', 'Megaphone', 'Search', 'ShoppingCart'],
            },
          ],
        },
      ],
    },

    // ---------- INDUSTRIES MEGA MENU ----------
    {
      name: 'industriesMenu',
      type: 'group',
      label: 'Industries Mega Menu',
      fields: [
        {
          name: 'industriesMenuItems',
          type: 'array',
          dbName: 'navbar_industries_items',
          minRows: 1,
          defaultValue: [
            { imTitle: 'Automate', imDesc: 'Automotive software development Services.', imHref: '/automative' },
            { imTitle: 'Hospitality', imDesc: 'Hospitality software development services.', imHref: '/industries/hospitality' },
            { imTitle: 'Finance', imDesc: 'Financial software development services.', imHref: '/industries/finance' },
            { imTitle: 'Education', imDesc: 'Education software development services.', imHref: '/industries/education' },
            { imTitle: 'Real Estate', imDesc: 'Real Estate software development services.', imHref: '/industries/real-estate' },
            { imTitle: 'Food', imDesc: 'Food software development services.', imHref: '/industries/food' },
          ],
          fields: [
            { name: 'imTitle', type: 'text', required: true },
            { name: 'imDesc', type: 'text', required: true },
            { name: 'imHref', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        const { revalidatePath } = await import('next/cache')
        revalidatePath('/', 'layout') // navbar is global — revalidate every page
      },
    ],
  },
}