// app/(frontend)/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/FooterSection";
import VisionCta from "./components/Footer/VisionCta";
import Navbar from "./components/Home/Navbar";
import { getNavbarData } from "@/lib/getNavbar";
import { getFooter } from "@/lib/footer";
import { getVisionCTA } from "@/lib/vision";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://optimal-dive.vercel.app",
  ),
  robots: {
    index: process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true",
    follow: process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true",
  },
  title: "Optimal Dive",
  description:
    "Optimal Dive is a leading digital agency that specializes in creating innovative and effective digital solutions for businesses of all sizes. We offer a wide range of services, including web design and development, digital marketing, branding, and more. Our team of experts is dedicated to helping our clients achieve their goals and grow their businesses in the digital world.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navbarData = await getNavbarData();
  const footer = await getFooter();
  const visionCTA = await getVisionCTA();

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div>
          <Navbar data={navbarData} />
          {children}
          <VisionCta visionCTA={visionCTA} />
          <Footer footer={footer} />
        </div>
      </body>
    </html>
  );
}
