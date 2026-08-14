import type { GlobalConfig } from "payload";

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
};