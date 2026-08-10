// payload.config.ts
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
// import type { SharpDependency } from 'payload'
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import { HomePage } from "./globals/HomePage";
import { AutomotivePage } from "./globals/AutomotivePage";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Posts } from "./collections/Posts";
import { Pages } from "./collections/Pages";
import { BrandingPage } from "./globals/BrandingPage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Categories, Posts, Pages],
  globals: [HomePage, AutomotivePage, BrandingPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
    push: process.env.NODE_ENV === "development",
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ["posts", "pages"],
      globals: ["home-page", "automotive-page", "branding-page"],
      uploadsCollection: "media",
      tabbedUI: true,

      generateTitle: ({ doc }) => `${doc?.title} | Optimal Dive`,
      generateDescription: ({ doc }) => doc?.excerpt,
      fields: ({ defaultFields }) => [
        ...defaultFields,

        {
          name: "canonicalURL",
          label: "Canonical URL",
          type: "text",
          admin: {
            description: "Override canonical URL if needed.",
          },
        },

        {
          name: "robots",
          type: "group",
          fields: [
            {
              name: "noIndex",
              type: "checkbox",
              defaultValue: false,
            },
            {
              name: "noFollow",
              type: "checkbox",
              defaultValue: false,
            },
          ],
        },

        {
          name: "social",
          type: "group",
          fields: [
            {
              name: "ogTitle",
              label: "Open Graph Title",
              type: "text",
            },
            {
              name: "ogDescription",
              label: "Open Graph Description",
              type: "textarea",
            },
            {
              name: "ogImage",
              label: "Open Graph Image",
              type: "upload",
              relationTo: "media",
            },

            {
              name: "twitterTitle",
              type: "text",
            },
            {
              name: "twitterDescription",
              type: "textarea",
            },
            {
              name: "twitterImage",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "twitterCard",
              type: "select",
              defaultValue: "summary_large_image",
              options: [
                {
                  label: "Summary Large Image",
                  value: "summary_large_image",
                },
                {
                  label: "Summary",
                  value: "summary",
                },
              ],
            },
          ],
        },

        {
          name: "schema",
          type: "group",
          fields: [
            {
              name: "schemaType",
              type: "select",
              defaultValue: "WebPage",
              options: [
                { label: "Web Page", value: "WebPage" },
                { label: "Article", value: "Article" },
                { label: "Blog Posting", value: "BlogPosting" },
                { label: "Service", value: "Service" },
                { label: "FAQ Page", value: "FAQPage" },
                { label: "Medical Organization", value: "MedicalOrganization" },
                { label: "Physician", value: "Physician" },
              ],
            },

            {
              name: "customSchema",
              type: "json",
              admin: {
                description: "Optional custom JSON-LD schema.",
              },
            },
          ],
        },

        {
          name: "keywords",
          type: "text",
          admin: {
            description: "Comma separated keywords.",
          },
        },
      ],
    }),
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
