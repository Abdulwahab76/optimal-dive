import Script from "next/script";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { Phone, Send, MapPin, Video, PhoneCall, TrendingUp, type LucideIcon } from "lucide-react";
import { getContactFormData } from "@/lib/getContactForm";
import { getContactPageData } from "@/lib/getContactPage";
import { generateSEOMetadata, generateJsonLD,   } from "@/lib/seo";
import { mediaUrl } from "@/lib/media";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";

const cardIconMap: Record<string, LucideIcon> = { Phone, Send, MapPin };
const stepIconMap: Record<string, LucideIcon> = { Video, PhoneCall, TrendingUp };

const defaultCards = [
  { ccTitle: "Call Any Time", ccValue: "+1 (307) 291-4467", ccIcon: "Phone" },
  { ccTitle: "Say Hello", ccValue: "info@optimaldive.com", ccIcon: "Send" },
  { ccTitle: "Address", ccValue: "New York, United States", ccIcon: "MapPin" },
];

const defaultSteps = [
  { psTitle: "Discovery Meeting", psIcon: "Video", psDescription: "We schedule a video call to learn about your practice, understand your goals, and identify the challenges that are holding your growth back." },
  { psTitle: "Strategy Presentation", psIcon: "PhoneCall", psDescription: "If we are the right fit, we build a custom marketing plan for your practice and walk you through it on a follow up call." },
  { psTitle: "Launch and Grow", psIcon: "TrendingUp", psDescription: "Once the plan is approved, execution begins. Your dedicated team gets to work and you start seeing real, measurable growth." },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPageData();
  return generateSEOMetadata(page.meta);
}

export default async function ContactPage() {
  const page = await getContactPageData();
  const formConfig = await getContactFormData();

  const hero = page.hero;
  const panel = page.formPanel;
  const cards = page.contactCards?.length ? page.contactCards : defaultCards;
  const steps = page.process?.processSteps?.length ? page.process.processSteps : defaultSteps;
  const panelImage = mediaUrl(panel?.panelImage, "/images/last.webp");

  return (
    <main className="flex-1 bg-slate-50">
      <JsonLd data={generateJsonLD(page?.meta)} />

      <section className="relative mt-6 overflow-hidden bg-[#1D1D1D] text-white lg:mt-0">
        <div
          className="absolute top-[70%] h-40 w-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, rgba(110, 92, 255, 0.55) 0%, rgba(110, 92, 255, 0.35) 30%, rgba(110, 92, 255, 0.18) 55%, rgba(110, 92, 255, 0.08) 72%, transparent 100%)`,
            filter: "blur(100px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 text-center md:py-32">
          <p className="text-lg font-semibold text-[#8B7CFF]">{hero?.badgeLabel ?? "Contact Us"}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {hero?.titleLine1 ?? "Let's Build Something"}
            <span className="block bg-gradient-to-r from-[#8B7CFF] to-[#3EAEC2] bg-clip-text text-transparent">
              {hero?.titleHighlight ?? "Amazing Together"}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            {hero?.description ??
              "Have a project in mind? Tell us about your goals and our team will help turn your ideas into powerful digital solutions."}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-6">
          <div className="relative min-h-[450px] overflow-hidden rounded-3xl bg-gray-50">
            <Image src={panelImage} alt="Contact us" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-primary-1 font-semibold">{panel?.panelEyebrow ?? "Contact Optimal Dive"}</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
                {panel?.panelTitleLine1 ?? "Let's build your next"}
                <span className="block bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                  {panel?.panelTitleHighlight ?? "digital solution"}
                </span>
              </h2>
              <p className="mt-4 max-w-md text-gray-300">
                {panel?.panelDescription ?? "Share your idea with our team and let's create something powerful together."}
              </p>
            </div>
          </div>

          <ContactForm config={formConfig} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, i) => {
            const Icon = cardIconMap[item.ccIcon ?? "Phone"] ?? Phone;
            return (
              <div
                key={item.ccTitle + i}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#F8FAFF] p-5 transition-all duration-300 hover:border-primary-1/50 hover:shadow-[0_10px_40px_rgba(109,123,248,0.15)]"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-1 to-primary-2">
                  <Icon size={28} strokeWidth={2} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-1">{item.ccTitle}</p>
                  <p className="mt-1 text-sm font-bold text-black md:text-base">{item.ccValue}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold text-primary-1">{page.process?.processEyebrow ?? "Our Process"}</p>
            <h2 className="mt-3 text-3xl font-bold text-[#181818] md:text-5xl">
              {page.process?.processHeading ?? "How We Work Together"}
            </h2>
          </div>

          <div className="grid gap-6 gap-y-12 mt-4 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = stepIconMap[step.psIcon ?? "Video"] ?? Video;
              return (
                <div
                  key={step.psTitle + i}
                  className="relative rounded-3xl border border-gray-100 bg-[#F8FAFF] px-6 pb-8 pt-14 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-primary-1 to-primary-2 shadow-lg">
                    <Icon size={30} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#181818]">{step.psTitle}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{step.psDescription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}