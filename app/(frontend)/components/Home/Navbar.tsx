"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  PenTool,
  Code2,
  Smartphone,
  Sparkles,
  Megaphone,
  Search,
  ShoppingCart,
} from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
];

const services = [
  {
    title: "Web Development",
    desc: "Digital Experience that scale.",
    href: "/services/web-development",
    icon: Code2,
    highlight: true,
  },
  {
    title: "Mobile Apps",
    desc: "Native Power in your pocket.",
    href: "/services/mobile-apps",
    icon: Smartphone,
  },
  {
    title: "Ai Solution",
    desc: "Intelligence Woven into code.",
    href: "/services/ai-solution",
    icon: Sparkles,
  },
  {
    title: "Digital Marketing",
    desc: "Our marketing automation solutions.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Search Engine Optimization",
    desc: "By optimizing content, performance analysis.",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "E-Commerce Solution",
    desc: "We develop intelligent e-commerce systems.",
    href: "/services/e-commerce",
    icon: ShoppingCart,
  },
];

const industries = [
  {
    title: "Automate",
    desc: "Automotive software development Services.",
    href: "/automative",
  },
  {
    title: "Hospitality",
    desc: "Hospitality software development services.",
    href: "/industries/hospitality",
  },
  {
    title: "Finance",
    desc: "Financial software development services.",
    href: "/industries/finance",
  },
  {
    title: "Education",
    desc: "Education software development services.",
    href: "/industries/education",
  },
  {
    title: "Real Estate",
    desc: "Real Estate software development services.",
    href: "/industries/real-estate",
  },
  {
    title: "Food",
    desc: "Food software development services.",
    href: "/industries/food",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="fixed w-full mx-auto z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between lg:rounded-b-3xl border border-gray-100 bg-white px-5 py-4 shadow-[0px_-26px_15px_0px_#2A4CE0]">
        <Link href="/">
          <div className="relative h-10 w-44">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              priority
              sizes="176px"
              className="object-contain"
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-8 rounded-full border border-primary-1 px-8 py-2 text-sm md:flex">
          {/* Services with mega menu */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 transition hover:text-primary-1"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Invisible bridge so the menu doesn't close on the gap */}
            <div className="absolute left-1/2 top-full h-4 w-200 -translate-x-1/2" />

            {/* Mega menu panel */}
            <div
              className={`absolute left-1/2 top-full z-50 w-200  -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                servicesOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "-translate-y-2 opacity-0 invisible pointer-events-none"
              }`}
            >
              <div className="flex gap-3 rounded-3xl border border-gray-100 bg-[#E8E8E8] p-3 shadow-2xl shadow-black/10">
                {/* Left highlight card */}
                <Link
                  href="/branding"
                  className="flex w-56 shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br from-primary-1 to-primary-2 p-5"
                >
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <PenTool size={18} className="text-white" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">
                      Branding
                    </h3>
                    <p className="text-sm leading-snug text-white/80">
                      We design iconic brand identities that work via visual
                      design……
                    </p>
                  </div>
                  <span className="mt-6 flex w-fit items-center gap-1 text-sm font-semibold text-white">
                    Explore Branding
                    <ArrowRight size={14} />
                  </span>
                </Link>

                {/* Right grid */}
                <div className="grid flex-1 grid-cols-2 gap-2 bg-[#E8E8E8]">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl p-3 transition duration-300 hover:bg-white hover:shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-1/10">
                          <Icon size={16} className="text-primary-1" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-gray-900">
                            {item.title}
                          </span>
                          <span className="block truncate text-xs text-gray-400">
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>

          {/* Industries with mega menu */}
          <li
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 transition hover:text-primary-1"
              aria-expanded={industriesOpen}
            >
              Industries
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Invisible bridge */}
            <div className="absolute left-1/2 top-full h-4 w-[680px] -translate-x-1/2" />

            {/* Mega menu panel */}
            <div
              className={`absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                industriesOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "-translate-y-2 opacity-0 invisible pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-3 rounded-3xl border border-gray-100 bg-[#E8E8E8]  p-3 shadow-2xl shadow-black/10">
                {industries.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl p-3 transition duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-primary-2"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition  ">
                      <ChevronRight
                        size={18}
                        strokeWidth={3}
                        className="text-gray-900 transition  "
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 transition group-hover:text-white">
                        {item.title}
                      </span>
                      <span className="block truncate text-xs text-gray-400 transition group-hover:text-white/80">
                        {item.desc}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks
            .filter((item) => item.title !== "Home")
            .map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="transition hover:text-primary-1"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>

        <div className="hidden md:flex">
          <Link
            href="/contact-us"
            className="flex items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-2 text-white"
          >
            <span className="text-sm font-semibold">contact</span>
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
          open
            ? "max-h-[40rem] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 bg-white px-6 py-6">
          {/* Mobile services */}
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between text-gray-700 transition hover:text-primary-1">
              Services
              <ChevronDown
                size={16}
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="mt-3 space-y-3 pl-2">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-gray-500 transition hover:text-primary-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile industries */}
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between text-gray-700 transition hover:text-primary-1">
              Industries
              <ChevronDown
                size={16}
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="mt-3 space-y-3 pl-2">
              {industries.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-gray-500 transition hover:text-primary-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>

          {navLinks
            .filter((item) => item.title !== "Home")
            .map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 transition hover:text-primary-1"
              >
                {item.title}
              </Link>
            ))}

          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white"
          >
            contact
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
