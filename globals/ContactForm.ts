// globals/ContactForm.ts

import type { GlobalConfig } from "payload";

export const ContactForm: GlobalConfig = {
  slug: "contact-form",
  label: "Contact Form",
  admin: { group: "Site Settings" },

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",

          fields: [
            {
              name: "showForm",
              label: "Show Contact Form",
              type: "checkbox",
              defaultValue: true,
            },

            {
              name: "heading",
              label: "Heading",
              type: "text",
              required: true,
              defaultValue: "Get Your Free Consultation",
            },

            {
              name: "submitButtonLabel",
              label: "Submit Button",
              type: "text",
              required: true,
              defaultValue: "Book A Time",
            },

            {
              name: "successMessage",
              label: "Success Message",
              type: "text",
              defaultValue: "Thank you! We will contact you soon.",
            },
          ],
        },

        {
          label: "Fields",

          fields: [
            {
              name: "firstName",
              label: "First Name",
              type: "group",

              fields: [
                {
                  name: "placeholder",
                  type: "text",
                  defaultValue: "First Name",
                },
                {
                  name: "requiredMessage",
                  type: "text",
                  defaultValue: "First Name is required",
                },
              ],
            },

            {
              name: "lastName",
              label: "Last Name",
              type: "group",

              fields: [
                {
                  name: "placeholder",
                  type: "text",
                  defaultValue: "Last Name",
                },
                {
                  name: "requiredMessage",
                  type: "text",
                  defaultValue: "Last Name is required",
                },
              ],
            },

            {
              name: "email",
              label: "Email",
              type: "group",

              fields: [
                {
                  name: "placeholder",
                  type: "text",
                  defaultValue: "Email",
                },
                {
                  name: "requiredMessage",
                  type: "text",
                  defaultValue: "Email is required",
                },
                {
                  name: "invalidMessage",
                  type: "text",
                  defaultValue: "Enter a valid email",
                },
              ],
            },

            {
              name: "phone",
              label: "Phone",
              type: "group",

              fields: [
                {
                  name: "placeholder",
                  type: "text",
                  defaultValue: "Phone",
                },
                {
                  name: "requiredMessage",
                  type: "text",
                  defaultValue: "Phone is required",
                },
                {
                  name: "invalidMessage",
                  type: "text",
                  defaultValue: "Enter a valid phone number",
                },
              ],
            },

            {
              name: "message",
              label: "Message",
              type: "group",

              fields: [
                {
                  name: "placeholder",
                  type: "text",
                  defaultValue: "How can we help?",
                },
                {
                  name: "requiredMessage",
                  type: "text",
                  defaultValue: "Message is required",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};