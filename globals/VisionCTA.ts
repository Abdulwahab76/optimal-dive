import type { GlobalConfig } from "payload";
import { revalidatePath } from 'next/cache'   // 👈 static import (top pe)

export const VisionCTA: GlobalConfig = {
  slug: "vision-cta",

  label: "Vision CTA",

  fields: [
    {
      name: "heading",

      type: "text",

      required: true,

      defaultValue: "Let's bring your Vision to life",
    },

    {
      name: "buttonLabel",

      type: "text",

      defaultValue: "Start Your Project",
    },

    {
      name: "buttonLink",

      type: "text",

      defaultValue: "/contact-us",
    },
  ],
  hooks: {
      afterChange: [
        async () => {
          revalidatePath('/')
        },
      ],
    },
};