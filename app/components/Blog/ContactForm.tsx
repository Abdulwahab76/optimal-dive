"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "./InputField";

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(60, "Full name is too long.")
    .regex(/^[A-Za-z\s.'-]+$/, "Only letters are allowed."),

  email: z.string().trim().email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?[\d\s-]{6,15}$/,
      "Please enter a valid phone number."
    ),

  business: z.string().trim().min(2, "Business name is required.").max(100),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(1000),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);

    // Later
    // await fetch("/api/contact",{
    //   method:"POST",
    //   headers:{
    //      "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(data)
    // })

    reset();
  };

  return (
    <div className="rounded-3xl bg-[#1D1D1D] text-white">
      <h3 className="mb-6 text-xl font-semibold border-b  p-6">
        Let's get connected
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        <InputField label="Full Name" required error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className="h-9 w-full mt-px rounded-lg border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1"
            
          />
        </InputField>

        <InputField
          label="Email Address"
          required
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            className="h-9 w-full mt-px rounded-xl border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1"
            
          />
        </InputField>

        <InputField label="Phone Number" required error={errors.phone?.message}>
          <input
            {...register("phone")}
            className="h-9 w-full mt-px rounded-xl border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1"
             
          />
        </InputField>

        <InputField
          label="Business Name"
          required
          error={errors.business?.message}
        >
          <input
            {...register("business")}
            className="h-9 w-full mt-px rounded-xl border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1"
           />
        </InputField>

        <InputField label="Message" required error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full mt-px rounded-xl border border-white/10 bg-[#4C4C4C] p-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1"
           
          />
        </InputField>

        <button
          disabled={isSubmitting}
          className="h-9 w-full rounded-full bg-gradient-to-r from-primary-1 to-primary-2 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
