import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, Phone, Mail } from "lucide-react";

const links = ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#EAEAEA] bg-white">
      {/* Background Logo */}
      <Image
        src="/images/footer-bg.png"
        alt=""
        width={360}
        height={360}
        className="pointer-events-none absolute bottom-0 right-0   opacity-100 "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6  pb-2 pt-6">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1.1fr]">
          {/* Left */}
          <div>
            <Image
              src="/images/footer-logo.png"
              alt="Optimal Dive"
              width={440}
              height={440}
              className="h-auto "
            />

            <p className="mt-10 mb-3 text-xs font-medium text-[#222]">
              Subscribe Newsletter
            </p>

            <form className="flex h-12 max-w-md overflow-hidden rounded-full border border-[#6D7BF8] bg-white">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-[#9E9E9E]"
              />

              <button
                type="submit"
                className="m-1 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-6 text-sm font-medium text-white"
              >
                Subscribe
                <ChevronRight size={14} />
              </button>
            </form>
          </div>

          {/* Center */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#111]">Company</h3>

            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-[15px] text-[#444] transition hover:text-primary-1"
                  >
                    <ChevronRight size={15} className="text-primary-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-1 text-primary-1" />
                <span className="text-[15px] text-[#444]">
                  Mon–Fri: 11:00 AM - 8:00 PM
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-primary-1" />
                <span className="text-[15px] text-[#444]">0300 1234567</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-primary-1" />
                <span className="text-[15px] text-[#444]">
                  info@optimaldive.com
                </span>
              </div>
            </div>

            {/* <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-primary-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        <div className="mt-14 border-t border-[#E8E8E8] pt-6 text-left text-sm text-black">
          © 2026 Optimal Dive. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
