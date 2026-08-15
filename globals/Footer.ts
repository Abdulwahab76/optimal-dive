import type { GlobalConfig } from "payload";
 
export const Footer: GlobalConfig = {
  slug: "footer",

  label: "Footer",

  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "newsletter",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          defaultValue: "Subscribe Newsletter",
        },
        {
          name: "placeholder",
          type: "text",
          defaultValue: "Enter Email",
        },
        {
          name: "buttonLabel",
          type: "text",
          defaultValue: "Subscribe",
        },
      ],
    },

    {
      name: "companyLinks",
      type: "array",

      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },

        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },

    {
      name: "contact",
      type: "group",

      fields: [
        {
          name: "workingHours",
          type: "text",
        },

        {
          name: "phone",
          type: "text",
        },

        {
          name: "email",
          type: "email",
        },
      ],
    },

    {
      name: "socialLinks",
      type: "group",

      fields: [
        {
          name: "facebook",
          type: "text",
        },

        {
          name: "instagram",
          type: "text",
        },

        {
          name: "linkedin",
          type: "text",
        },
      ],
    },

    {
      name: "copyright",

      type: "text",

      defaultValue: "© 2026 Optimal Dive. All Rights Reserved.",
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
};