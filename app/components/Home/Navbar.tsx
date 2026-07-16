"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-b-3xl border border-gray-100 bg-white px-5 py-4 shadow-[0px_-26px_15px_0px_#2A4CE0]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 rounded-full border  border-primary-1 px-8 py-2 text-sm md:flex">
          {navLinks.map((item) => (
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
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-2 text-white"
          >
            <span className="text-sm font-semibold">Contact</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden border-b   border-primary-1 rounded-br-xl rounded-bl-xl ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5    bg-white px-6 py-6  ">
          {navLinks.map((item) => (
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
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white"
          >
            Contact
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
