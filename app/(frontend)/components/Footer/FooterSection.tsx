import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, Phone, Mail } from "lucide-react";
import type { Footer as FooterType, Media } from "@payload-types";

type Props = {
  footer: FooterType;
};

export default function Footer({ footer }: Props) {
  const logo =
    typeof footer.logo === "object" && footer.logo
      ? (footer.logo as Media)
      : null;

  return (
    <footer className="relative overflow-hidden border-t border-[#EAEAEA] bg-white">
      {/* Background Image */}
      {logo?.url && (
        <Image
        src="/images/footer-bg.png"
        alt=""
        width={360}
        height={360}
        className="pointer-events-none absolute bottom-0 right-0   opacity-100 lg:block hidden"
      />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6  pb-2 pt-6">

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1.1fr]">
          {/* Left */}
          <div>
            {logo?.url && (
               <Image
              src="/images/footer-logo.png"
              alt="Optimal Dive"
              width={440}
              height={440}
              className="h-auto lg:w-auto w-50"
            />

            )}

            <p className="mt-10 mb-3 text-xs font-medium text-[#222]">
              {footer.newsletter?.title}
            </p>

            <form className="flex h-12 w-full max-w-md overflow-hidden rounded-full border border-primary-1 bg-white">
              <input
                type="email"
                placeholder={footer.newsletter?.placeholder || ""}
                className="min-w-0 flex-1 bg-[#F8F8FF] px-5 text-sm outline-none"
              />

              <button
                type="submit"
                className="m-1 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-5 text-sm text-white"
              >
                {footer.newsletter?.buttonLabel}
                <ChevronRight size={14} />
              </button>
            </form>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {footer.companyLinks?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 text-[15px] hover:text-primary-1"
                  >
                    <ChevronRight
                      size={15}
                      className="text-primary-1"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="space-y-5">
              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="mt-1 text-primary-1"
                />
                <span>{footer.contact?.workingHours}</span>
              </div>

              <a
                href={`tel:${footer.contact?.phone}`}
                      className="flex items-start gap-3 transition hover:text-primary-1"

              >
                <Phone
                  size={18}
                  className="mt-1 text-primary-1"
                />
                <span>{footer.contact?.phone}</span>
              </a>

              <a
                href={`mailto:${footer.contact?.email}`}
                               className="flex items-start gap-3 transition hover:text-primary-1"

              >
                <Mail
                  size={18}
                  className="mt-1 text-primary-1"
                />
                <span>{footer.contact?.email}</span>
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {footer.socialLinks?.facebook && (
                <Link
                  href={footer.socialLinks.facebook}
                  target="_blank"
                >
                 {/* Facebook */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                  className="h-4 w-4"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
                </Link>
              )}

              {footer.socialLinks?.instagram && (
                <Link
                  href={footer.socialLinks.instagram}
                  target="_blank"
                >
                  {/* Instagram */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="h-4 w-4"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
                </Link>
              )}

              {footer.socialLinks?.linkedin && (
                <Link
                  href={footer.socialLinks.linkedin}
                  target="_blank"
                >
                  {/* LinkedIn */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="h-4 w-4"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14   pt-6 text-sm">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}