"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long does the branding process take?",
    answer:
      "Most branding projects take between 2–6 weeks depending on the scope, revisions, and required deliverables.",
  },
  {
    id: 2,
    question: "What deliverables do I receive?",
    answer:
      "You'll receive your logo, color palette, typography, brand guidelines, social assets, and all source files depending on your package.",
  },
  {
    id: 3,
    question: "Can you rebrand an existing company?",
    answer:
      "Absolutely. We help businesses modernize their identity while preserving the equity they've already built.",
  },
  {
    id: 4,
    question: "Do you provide brand guidelines?",
    answer:
      "Yes. Every branding project includes a comprehensive brand guideline document to ensure consistency.",
  },
  {
    id: 5,
    question: "How do you ensure brand consistency?",
    answer:
      "We create clear visual systems, messaging frameworks, and documentation that your entire team can follow.",
  },
];

export default function BrandingFAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111] md:text-5xl">
            Common Branding Questions
          </h2>
        </div>

        {/* FAQ */}

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => {
            const open = active === faq.id;

            return (
              <div
                key={faq.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#EEF0FF]
                  bg-[#FAFAFF]
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-6
                    py-5
                    text-left
                  "
                >
                  <span className="text-lg font-semibold text-[#111] md:text-base">
                    {faq.question}
                  </span>

                  <div
                    className={`
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-primary-1
                      text-white
                      transition-transform
                      duration-300

                      ${open ? "rotate-45" : ""}
                    `}
                  >
                    <Plus size={14} strokeWidth={3} />
                  </div>
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-500

                    ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="max-w-4xl text-[15px] leading-7 text-[#666]">
                        {faq.answer}
                      </p>
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
