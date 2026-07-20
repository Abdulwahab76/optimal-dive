import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/FooterSection";
import VisionCta from "./components/Footer/VisionCta";
import Navbar from "./components/Home/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Optimal Dive",
  description:
    "Optimal Dive is a leading digital agency that specializes in creating innovative and effective digital solutions for businesses of all sizes. We offer a wide range of services, including web design and development, digital marketing, branding, and more. Our team of experts is dedicated to helping our clients achieve their goals and grow their businesses in the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`  ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div>
          <Navbar />
          {children}
          <VisionCta />
          <Footer />
        </div>
      </body>
    </html>
  );
}
