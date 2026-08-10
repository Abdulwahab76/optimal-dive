"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { AutomotivePage } from "@/payload-types";

const defaultFaqs = [
  { faqQuestion: "How long does the branding process take?", faqAnswer: "Most branding projects take between 2–6 weeks depending on the scope, revisions, and required deliverables." },
  { faqQuestion: "What deliverables do I receive?", faqAnswer: "You'll receive your logo, color palette, typography, brand guidelines, social assets, and all source files depending on your package." },
  { faqQuestion: "Can you rebrand an existing company?", faqAnswer: "Absolutely. We help businesses modernize their identity while preserving the equity they've already built." },
  { faqQuestion: "Do you provide brand guidelines?", faqAnswer: "Yes. Every branding project includes a comprehensive brand guideline document to ensure consistency." },
  { faqQuestion: "How do you ensure brand consistency?", faqAnswer: "We create clear visual systems, messaging frameworks, and documentation that your entire team can follow." },
];

export default function BrandingFAQ({ autoFaq }: { autoFaq?: AutomotivePage["autoFaq"] }) {
  const heading = autoFaq?.autoFaqHeading ?? "Common Branding Questions";
  const faqs = autoFaq?.autoFaqItems?.length ? autoFaq.autoFaqItems : defaultFaqs;

  const [active, setActive] = useState<number | null>(0);
  const toggleFAQ = (index: number) => setActive((prev) => (prev === index ? null : index));

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111] md:text-5xl">{heading}</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;
            return (
              <div key={faq.faqQuestion + index} className="overflow-hidden rounded-2xl border border-[#EEF0FF] bg-[#FAFAFF] transition-all duration-300">
                <button onClick={() => toggleFAQ(index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-lg font-semibold text-[#111] md:text-base">{faq.faqQuestion}</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5157F7] text-white transition-transform duration-300">
                    {open ? <Minus size={14} strokeWidth={6} /> : <Plus size={14} strokeWidth={6} />}
                  </div>
                </button>
                <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="max-w-4xl text-[15px] leading-7 text-[#666]">{faq.faqAnswer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}