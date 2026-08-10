// globals/HomePage.ts
import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: { group: 'Site Content' },
  fields: [
    // ---------- HERO ----------
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'heroTitleLine1', type: 'text', defaultValue: 'Transforming' },
        { name: 'heroTitleHighlight', type: 'text', defaultValue: 'Digital Futures' },
        { name: 'heroCtaLabel', type: 'text', defaultValue: 'Start Your Project' },
        { name: 'heroCtaLink', type: 'text', defaultValue: '/contact-us' },
        { name: 'heroBackgroundImage', type: 'upload', relationTo: 'media' },
        { name: 'heroForegroundImage', type: 'upload', relationTo: 'media' },
      ],
    },

    // ---------- ABOUT ----------
    {
      name: 'about',
      type: 'group',
      label: 'About / Who We Are',
      fields: [
        { name: 'aboutHeading', type: 'text', defaultValue: 'Who We Are' },
        {
          name: 'aboutHighlightText',
          type: 'text',
          defaultValue: 'Optimal Dive is a full-cycle product development company',
        },
        {
          name: 'aboutBodyText',
          type: 'textarea',
          defaultValue:
            'built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact.',
        },
      ],
    },

    // ---------- STATS ----------
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      defaultValue: [
        { statValue: '500+', statLabel: 'Projects Delivered' },
        { statValue: '98%', statLabel: 'Client Satisfaction' },
        { statValue: '10+', statLabel: 'Years Experience' },
        { statValue: '50M+', statLabel: 'Revenue Generated' },
      ],
      fields: [
        { name: 'statValue', type: 'text', required: true },
        { name: 'statLabel', type: 'text', required: true },
      ],
    },

    // ---------- CLIENTS ----------
    {
      name: 'clients',
      type: 'group',
      label: 'Clients Section',
      fields: [
        { name: 'clientsHeading', type: 'text', defaultValue: "Clients We've Served" },
        {
          name: 'clientLogos',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { clientName: 'sony' }, { clientName: 'amazon' }, { clientName: 'deloitte' },
            { clientName: 'walmart' }, { clientName: 'starbucks' }, { clientName: 'allianz' },
            { clientName: 'Healthcare' }, { clientName: 'shell' }, { clientName: 'visa' },
            { clientName: 'att' },
          ],
          fields: [
            { name: 'clientName', type: 'text', required: true },
            { name: 'clientLogo', type: 'upload', relationTo: 'media' }, // optional override
          ],
        },
      ],
    },

    // ---------- SUCCESS STORIES ----------
    {
      name: 'successStories',
      type: 'group',
      label: 'Success Stories',
      fields: [
        { name: 'successHeading', type: 'text', defaultValue: 'Our Success Stories' },
        { name: 'successViewMoreLabel', type: 'text', defaultValue: 'View More' },
        { name: 'successCtaLabel', type: 'text', defaultValue: 'Start Your Project' },
        { name: 'successCtaLink', type: 'text', defaultValue: '/contact-us' },
        {
          name: 'projects',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { projectTitle: 'Vyro', projectCategory: 'Website', projectLarge: true },
            { projectTitle: 'Bloom', projectCategory: 'Mobile App', projectLarge: false },
            { projectTitle: 'Orvion', projectCategory: 'Crm Design', projectLarge: false },
          ],
          fields: [
            { name: 'projectTitle', type: 'text', required: true },
            { name: 'projectCategory', type: 'text', required: true },
            { name: 'projectImage', type: 'upload', relationTo: 'media' },
            { name: 'projectLarge', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },

    // ---------- SERVICES ----------
    {
      name: 'services',
      type: 'group',
      label: 'Services Section',
      fields: [
        { name: 'servicesHeading', type: 'text', defaultValue: 'Services We Provide' },
        {
          name: 'serviceItems',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { serviceTitle: 'Branding', serviceDescription: 'We craft iconic brand identities that combine visual design, strategic messaging, and precise positioning. Build trust, convey your value, and become unforgettable.' },
            { serviceTitle: 'Websites Development', serviceDescription: 'Custom, high-performance websites built for speed, scale, and user experience. From sleek landing pages to complex platforms—we engineer digital presence that converts.' },
            { serviceTitle: 'Digital Marketing', serviceDescription: 'Strategic digital campaigns that turn attention into action. From content to paid media, we drive engagement, leads, and conversions.' },
            { serviceTitle: 'Search Engine Optimization', serviceDescription: 'Data-driven search optimization that puts your business in front of the right audience. Higher rankings, organic growth, and measurable ROI.' },
            { serviceTitle: 'Mobile Application Development', serviceDescription: "Native and cross-platform apps built for iOS and Android. Intuitive design, robust architecture, and seamless performance—right in your users' pockets." },
            { serviceTitle: 'AI Solution', serviceDescription: 'Intelligent automation and machine learning solutions that streamline operations, unlock insights, and give your business a competitive edge.' },
          ],
          fields: [
            { name: 'serviceTitle', type: 'text', required: true },
            { name: 'serviceDescription', type: 'textarea', required: true },
            { name: 'serviceImage', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },

    // ---------- PROCESS ----------
    {
      name: 'process',
      type: 'group',
      label: 'Product Development Process',
      fields: [
        { name: 'processHeading', type: 'text', defaultValue: 'Our Product Development Process' },
        {
          name: 'processSteps',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { stepTitle: 'Ideate', stepDescription: 'We analyze your vision thoroughly to ensure the roadmap aligns perfectly with your end goals.' },
            { stepTitle: 'Design', stepDescription: 'We craft MVPs that balance stunning design with core functionality.' },
            { stepTitle: 'Develop', stepDescription: 'We build end-to-end solutions using agile processes and robust architecture.' },
            { stepTitle: 'Test', stepDescription: 'We ensure quality and reliability through extensive QA across every touchpoint.' },
            { stepTitle: 'Launch', stepDescription: 'We execute smooth rollouts with tailored deployment plans and dedicated support.' },
            { stepTitle: 'Support', stepDescription: 'We provide ongoing enhancements to ensure your product continues to succeed.' },
          ],
          fields: [
            { name: 'stepTitle', type: 'text', required: true },
            { name: 'stepDescription', type: 'textarea', required: true },
            { name: 'stepIcon', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },

    // ---------- TECHNOLOGIES ----------
    {
      name: 'technologies',
      type: 'group',
      label: 'Technologies Section',
      fields: [
        { name: 'techHeading', type: 'text', defaultValue: 'Technologies We Use' },
        {
          name: 'techDescription',
          type: 'textarea',
          defaultValue:
            'Hire from our pool of 350+ specialized experts in web, mobile and software engineering, specializing in the latest technologies and frameworks ready to scale your development team effortlessly.',
        },
        { name: 'techCtaHeading', type: 'text', defaultValue: 'Ready to build something lasting?' },
        { name: 'techCtaLabel', type: 'text', defaultValue: 'Start Your Project' },
        { name: 'techCtaLink', type: 'text', defaultValue: '/contact-us' },
      ],
    },

    // ---------- TESTIMONIALS ----------
    {
      name: 'testimonials',
      type: 'group',
      label: 'Testimonials',
      fields: [
        { name: 'testimonialsHeading1', type: 'text', defaultValue: 'Our Clients Simply Love' },
        { name: 'testimonialsHeading2', type: 'text', defaultValue: 'What We Do' },
        {
          name: 'testimonialItems',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { testimonialName: 'Jackie Dallas', testimonialReview: 'Optimal Dive managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client.', testimonialRating: 5 },
            { testimonialName: 'John Carter', testimonialReview: 'Amazing communication and delivery throughout the project.', testimonialRating: 5 },
            { testimonialName: 'Emily Brown', testimonialReview: 'Professional team with great attention to detail.', testimonialRating: 5 },
          ],
          fields: [
            { name: 'testimonialName', type: 'text', required: true },
            { name: 'testimonialReview', type: 'textarea', required: true },
            { name: 'testimonialRating', type: 'number', min: 1, max: 5, defaultValue: 5 },
            { name: 'testimonialAvatar', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },

    // ---------- INDUSTRIES ----------
    {
      name: 'industries',
      type: 'group',
      label: 'Industries We Serve',
      fields: [
        { name: 'industriesHeading', type: 'text', defaultValue: 'Industries We Serve' },
        {
          name: 'industriesDescription',
          type: 'textarea',
          defaultValue:
            'We provide tailored solutions that address the unique demands across various industries, delivering transformative experiences to drive significant impact.',
        },
        {
          name: 'industryItems',
          type: 'array',
          minRows: 1,
          defaultValue: [
            { industryTitle: 'Automotive', industryDescription: 'Enhance vehicle management, driver experience, and connected mobility with secure software solutions.' },
            { industryTitle: 'Finance', industryDescription: 'Build reliable digital banking, fintech platforms, and payment systems with security at their core.' },
            { industryTitle: 'Real Estate', industryDescription: 'CRM, property management, online portals, and modern real-estate solutions.' },
            { industryTitle: 'Food', industryDescription: 'Restaurant systems, online ordering, inventory management, and delivery platforms.' },
            { industryTitle: 'Education', industryDescription: 'E-learning platforms, LMS solutions, student portals, and digital education experiences.' },
            { industryTitle: 'Healthcare', industryDescription: 'Healthcare applications, EMR systems, appointment booking, and patient management.' },
          ],
          fields: [
            { name: 'industryTitle', type: 'text', required: true },
            { name: 'industryDescription', type: 'textarea', required: true },
            { name: 'industryIcon', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },

    // ---------- LATEST INSIGHTS (heading only — posts come from Posts collection) ----------
    {
      name: 'latestInsights',
      type: 'group',
      label: 'Latest Insights Section',
      fields: [
        { name: 'insightsHeading', type: 'text', defaultValue: 'Latest Insights' },
        { name: 'insightsCtaLabel', type: 'text', defaultValue: 'View All' },
      ],
    },
  ],
}