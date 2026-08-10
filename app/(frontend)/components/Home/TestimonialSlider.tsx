// app/(frontend)/components/Home/TestimonialSlider.tsx
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";
import { AvatarNavigation } from "./AvatarNavigation";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultTestimonials: Testimonial[] = [
  { id: 1, name: "Jackie Dallas", review: "Optimal Dive managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client.", rating: 5 },
  { id: 2, name: "John Carter", review: "Amazing communication and delivery throughout the project.", rating: 5 },
  { id: 3, name: "Emily Brown", review: "Professional team with great attention to detail.", rating: 5 },
];

export default function TestimonialSlider({ testimonials }: { testimonials?: HomePage["testimonials"] }) {
  const items: Testimonial[] = testimonials?.testimonialItems?.length
    ? testimonials.testimonialItems.map((t, i) => ({
        id: i + 1,
        name: t.testimonialName,
        review: t.testimonialReview,
        rating: t.testimonialRating ?? 5,
        avatar: mediaUrl(t.testimonialAvatar, ""),
      }))
    : defaultTestimonials;

  const [active, setActive] = useState(0);
  const next = () => setActive((p) => (p + 1) % items.length);
  const prev = () => setActive((p) => (p === 0 ? items.length - 1 : p - 1));

  return (
    <section className="w-full bg-white pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">
            {testimonials?.testimonialsHeading1 ?? "Our Clients Simply Love"}
          </h2>
          <p className="mt-2 text-3xl md:text-5xlfont-semibold text-primary-1">
            {testimonials?.testimonialsHeading2 ?? "What We Do"}
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-5">
          <button onClick={prev} className="hidden md:flex h-14 w-14 items-center justify-center rounded-full hover:bg-gray-100">
            <ChevronLeft size={42} />
          </button>

          <TestimonialCard item={items[active]} />

          <button onClick={next} className="hidden md:flex h-14 w-14 items-center justify-center rounded-full hover:bg-gray-100">
            <ChevronRight size={42} />
          </button>
        </div>

        <div className="mt-10">
          <AvatarNavigation active={active} setActive={setActive} items={items} />
        </div>

        <div className="mt-8 flex justify-center gap-6 md:hidden">
          <button onClick={prev} className="rounded-full border p-3">
            <ChevronLeft />
          </button>
          <button onClick={next} className="rounded-full border p-3">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}