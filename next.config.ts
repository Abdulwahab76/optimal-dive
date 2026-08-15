// next.config.ts
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sharp"], // 👈 add karein
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },  
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPayload(nextConfig);
