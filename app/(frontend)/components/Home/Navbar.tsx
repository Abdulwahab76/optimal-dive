// app/(frontend)/components/Home/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Menu, X, ChevronDown, ChevronRight,
  PenTool, Code2, Smartphone, Sparkles, Megaphone, Search, ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import type { Navbar as NavbarType } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const iconMap: Record<string, LucideIcon> = {
  PenTool, Code2, Smartphone, Sparkles, Megaphone, Search, ShoppingCart,
};

const defaultNavLinks = [
  { navLabel: "Home", navHref: "/" },
  { navLabel: "About", navHref: "/about" },
  { navLabel: "Portfolio", navHref: "/portfolio" },
  { navLabel: "Blog", navHref: "/blog" },
];

const defaultServices = [
  { smTitle: "Web Development", smDesc: "Digital Experience that scale.", smHref: "/services/web-development", smIcon: "Code2" },
  { smTitle: "Mobile Apps", smDesc: "Native Power in your pocket.", smHref: "/services/mobile-apps", smIcon: "Smartphone" },
  { smTitle: "Ai Solution", smDesc: "Intelligence Woven into code.", smHref: "/services/ai-solution", smIcon: "Sparkles" },
  { smTitle: "Digital Marketing", smDesc: "Our marketing automation solutions.", smHref: "/services/digital-marketing", smIcon: "Megaphone" },
  { smTitle: "Search Engine Optimization", smDesc: "By optimizing content, performance analysis.", smHref: "/services/seo", smIcon: "Search" },
  { smTitle: "E-Commerce Solution", smDesc: "We develop intelligent e-commerce systems.", smHref: "/services/e-commerce", smIcon: "ShoppingCart" },
];

const defaultIndustries = [
  { imTitle: "Automate", imDesc: "Automotive software development Services.", imHref: "/automative" },
  { imTitle: "Hospitality", imDesc: "Hospitality software development services.", imHref: "/industries/hospitality" },
  { imTitle: "Finance", imDesc: "Financial software development services.", imHref: "/industries/finance" },
  { imTitle: "Education", imDesc: "Education software development services.", imHref: "/industries/education" },
  { imTitle: "Real Estate", imDesc: "Real Estate software development services.", imHref: "/industries/real-estate" },
  { imTitle: "Food", imDesc: "Food software development services.", imHref: "/industries/food" },
];

export default function Navbar({ data }: { data?: NavbarType }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const logo = mediaUrl(data?.logo, "/images/logo.png");
  const navLinks = data?.navLinks?.length ? data.navLinks : defaultNavLinks;
  const services = data?.servicesMenu?.serviceMenuItems?.length
    ? data.servicesMenu.serviceMenuItems
    : defaultServices;
  const industries = data?.industriesMenu?.industriesMenuItems?.length
    ? data.industriesMenu.industriesMenuItems
    : defaultIndustries;

  const highlightTitle = data?.servicesMenu?.highlightTitle ?? "Branding";
  const highlightDescription =
    data?.servicesMenu?.highlightDescription ?? "We design iconic brand identities that work via visual design……";
  const highlightLink = data?.servicesMenu?.highlightLink ?? "/branding";
  const highlightCtaLabel = data?.servicesMenu?.highlightCtaLabel ?? "Explore Branding";
  const contactCtaLabel = data?.contactCtaLabel ?? "contact";
  const contactCtaLink = data?.contactCtaLink ?? "/contact-us";

  return (
    <nav className="fixed w-full mx-auto z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between lg:rounded-b-3xl border border-gray-100 bg-white px-5 py-4 shadow-[0px_-26px_15px_0px_#2A4CE0]">
        <Link href="/">
          <div className="relative h-10 w-44">
            <Image src={logo} alt="Logo" fill priority sizes="176px" className="object-contain" />
          </div>
        </Link>

        <ul className="hidden items-center gap-8 rounded-full border border-primary-1 px-8 py-2 text-sm md:flex">
          {/* Services mega menu */}
          <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 transition hover:text-primary-1" aria-expanded={servicesOpen}>
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full h-4 w-200 -translate-x-1/2" />
            <div
              className={`absolute left-1/2 top-full z-50 w-200 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                servicesOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible pointer-events-none"
              }`}
            >
              <div className="flex gap-3 rounded-3xl border border-gray-100 bg-[#E8E8E8] p-3 shadow-2xl shadow-black/10">
                <Link
                  href={highlightLink}
                  className="flex w-56 shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br from-primary-1 to-primary-2 p-5"
                >
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <PenTool size={18} className="text-white" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">{highlightTitle}</h3>
                    <p className="text-sm leading-snug text-white/80">{highlightDescription}</p>
                  </div>
                  <span className="mt-6 flex w-fit items-center gap-1 text-sm font-semibold text-white">
                    {highlightCtaLabel}
                    <ArrowRight size={14} />
                  </span>
                </Link>

                <div className="grid flex-1 grid-cols-2 gap-2 bg-[#E8E8E8]">
                  {services.map((item, i) => {
                    const Icon = iconMap[item.smIcon ?? "Code2"] ?? Code2;
                    return (
                      <Link
                        key={item.smTitle + i}
                        href={item.smHref}
                        className="flex items-start gap-3 rounded-xl p-3 transition duration-300 hover:bg-white hover:shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-1/10">
                          <Icon size={16} className="text-primary-1" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-gray-900">{item.smTitle}</span>
                          <span className="block truncate text-xs text-gray-400">{item.smDesc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>

          {/* Industries mega menu */}
          <li className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 transition hover:text-primary-1" aria-expanded={industriesOpen}>
              Industries
              <ChevronDown size={14} className={`transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full h-4 w-[680px] -translate-x-1/2" />
            <div
              className={`absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                industriesOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-3 rounded-3xl border border-gray-100 bg-[#E8E8E8] p-3 shadow-2xl shadow-black/10">
                {industries.map((item, i) => (
                  <Link
                    key={item.imTitle + i}
                    href={item.imHref}
                    className="group flex items-center gap-3 rounded-xl p-3 transition duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-primary-2"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition">
                      <ChevronRight size={18} strokeWidth={3} className="text-gray-900 transition" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 transition group-hover:text-white">{item.imTitle}</span>
                      <span className="block truncate text-xs text-gray-400 transition group-hover:text-white/80">{item.imDesc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks
            .filter((item) => item.navLabel !== "Home")
            .map((item, i) => (
              <li key={item.navLabel + i}>
                <Link href={item.navHref} className="transition hover:text-primary-1">
                  {item.navLabel}
                </Link>
              </li>
            ))}
        </ul>

        <div className="hidden md:flex">
          <Link href={contactCtaLink} className="flex items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-2 text-white">
            <span className="text-sm font-semibold">{contactCtaLabel}</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden border-b border-primary-1 rounded-br-xl rounded-bl-xl ${
          open ? "max-h-[40rem] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 bg-white px-6 py-6">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between text-gray-700 transition hover:text-primary-1">
              Services
              <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-3 space-y-3 pl-2">
              {services.map((item, i) => (
                <Link key={item.smTitle + i} href={item.smHref} onClick={() => setOpen(false)} className="block text-sm text-gray-500 transition hover:text-primary-1">
                  {item.smTitle}
                </Link>
              ))}
            </div>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between text-gray-700 transition hover:text-primary-1">
              Industries
              <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-3 space-y-3 pl-2">
              {industries.map((item, i) => (
                <Link key={item.imTitle + i} href={item.imHref} onClick={() => setOpen(false)} className="block text-sm text-gray-500 transition hover:text-primary-1">
                  {item.imTitle}
                </Link>
              ))}
            </div>
          </details>

          {navLinks
            .filter((item) => item.navLabel !== "Home")
            .map((item, i) => (
              <Link key={item.navLabel + i} href={item.navHref} onClick={() => setOpen(false)} className="block text-gray-700 transition hover:text-primary-1">
                {item.navLabel}
              </Link>
            ))}

          <Link href={contactCtaLink} onClick={() => setOpen(false)} className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white">
            {contactCtaLabel}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}