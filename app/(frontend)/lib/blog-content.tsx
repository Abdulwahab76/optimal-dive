import { ReactNode } from "react";

export interface BlogPostContent {
  toc: {
    id: string;
    title: string;
  }[];
  content: ReactNode;
}

export const blogContent: Record<string, BlogPostContent> = {
  "building-a-brand-identity-that-actually-sticks-1": {
    toc: [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "what-is-brand-identity",
        title: "What Is Brand Identity?",
      },
      {
        id: "core-elements",
        title: "Core Elements of a Strong Brand",
      },
      {
        id: "consistency",
        title: "Why Consistency Matters",
      },
      {
        id: "common-mistakes",
        title: "Common Branding Mistakes",
      },
      {
        id: "building-system",
        title: "Building a Scalable Brand System",
      },
      {
        id: "conclusion",
        title: "Conclusion",
      },
    ],

    content: `
<section id="introduction" className='pros'>
  <h2 >Introduction</h2>

  <p>
    A memorable brand is much more than a logo...
  </p>

  <p>
    Companies with strong brand identities...
  </p>
</section>

<section id="what-is-brand-identity">
  <h2>What Is Brand Identity?</h2>

  <p>
    Brand identity is the collection...
  </p>
</section>

<section id="core-elements">
  <h2>Core Elements of a Strong Brand</h2>

  <ul>
    <li>A recognizable logo</li>
    <li>A consistent color palette</li>
    <li>Typography</li>
  </ul>
</section>

<section id="what-is-brand-identity">
  <h2>What Is Brand Identity?</h2>

  <p>
    Brand identity is the collection of visual, verbal, and emotional
    elements that represent your business. It includes your logo,
    typography, colors, imagery, messaging, and tone of voice.
  </p>

  <p>
    Together, these elements communicate what your business stands for
    and why customers should choose you over competitors.
  </p>

  <h3 id="visual-identity">Visual Identity</h3>

  <p>
    Visual identity includes the logo, typography, color palette,
    photography, illustrations, icons, and layout system used across all
    digital and print materials. These elements should remain consistent
    to improve recognition and build trust.
  </p>

  <h3 id="brand-voice">Brand Voice</h3>

  <p>
    Your brand voice defines how you communicate with your audience.
    Whether your tone is professional, friendly, or playful, consistency
    across websites, emails, and social media helps create a memorable
    customer experience.
  </p>
</section>
`,
  },
};
