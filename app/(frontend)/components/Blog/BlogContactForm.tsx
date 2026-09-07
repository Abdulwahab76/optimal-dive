
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "./InputField";
import type { ContactForm as BlogContactForm } from "@/payload-types";
import { useState } from "react";

/**
 * IMPORTANT:
 * Business was removed because the Business field is currently
 * commented out from the form.
 */
const schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(60, "First name is too long.")
    .regex(
      /^[A-Za-z\s.'-]+$/,
      "Only letters are allowed."
    ),
  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(60, "Last name is too long.")
    .regex(
      /^[A-Za-z\s.'-]+$/,
      "Only letters are allowed."
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?[\d\s-]{6,15}$/,
      "Please enter a valid phone number."
    ),

  message: z
    .string()
    .trim()
    .min(
      20,
      "Message must be at least 20 characters."
    )
    .max(
      1000,
      "Message is too long."
    ),
});

type FormData = z.infer<typeof schema>;

interface Props {
  formConfig?: BlogContactForm;
}

export default function BlogContactForm({
  formConfig,
}: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  if (formConfig?.showForm === false) {
    return null;
  }

  const onSubmit = async (data: FormData) => {
    // Extra protection against duplicate submission
    if (isSubmitting || isSubmitted) {
      return;
    }

    setServerError(null);

    try {
      console.log("Submitting contact form:", data);

      const res = await fetch("/api/submissions", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName: data.firstName.trim(),
          lastName: data.lastName   .trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          message: data.message.trim(),

          source:
            typeof window !== "undefined"
              ? window.location.pathname
              : undefined,
        }),
      });

      /**
       * Read response body so we can see the actual API error.
       */
      const responseText = await res.text();

      let responseData: unknown = null;

      try {
        responseData = responseText
          ? JSON.parse(responseText)
          : null;
      } catch {
        responseData = responseText;
      }

      console.log("Submission API response:", {
        status: res.status,
        data: responseData,
      });

      if (!res.ok) {
        throw new Error(
          typeof responseData === "object" &&
            responseData !== null &&
            "message" in responseData
            ? String(
                (responseData as { message: unknown })
                  .message
              )
            : "Submission failed"
        );
      }

      /**
       * SUCCESS
       */

      setIsSubmitted(true);

      reset();

    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="rounded-3xl bg-[#1D1D1D] text-white">
      <h3 className="mb-0 border-b p-6 text-xl font-semibold">
        {formConfig?.heading ?? "Let's get connected"}
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-6"
        noValidate
      >
        {/* FULL NAME */}

        <InputField
          label={
            formConfig?.firstName?.placeholder ??
            "Full Name"
          }
          required={true}
          error={errors.firstName?.message}
        >
          <input
            {...register("firstName")}
            placeholder="Enter your fIrst name"
            disabled={isSubmitting || isSubmitted}
            className="mt-px h-9 w-full rounded-lg border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </InputField>

           <InputField
          label={
            formConfig?.lastName?.placeholder ??
            "Full Name"
          }
          required={true}
          error={errors.lastName?.message}
        >
          <input
            {...register("lastName")}
            placeholder="Enter your last name"
            disabled={isSubmitting || isSubmitted}
            className="mt-px h-9 w-full rounded-lg border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </InputField>

        {/* EMAIL */}

        <InputField
          label={
            formConfig?.email?.placeholder ??
            "Email Address"
          }
          required={true}
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            disabled={isSubmitting || isSubmitted}
            className="mt-px h-9 w-full rounded-xl border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </InputField>

        {/* PHONE */}

        <InputField
          label={
            formConfig?.phone?.placeholder ??
            "Phone Number"
          }
          required={true}
          error={errors.phone?.message}
        >
          <input
            {...register("phone")}
            type="tel"
            placeholder="Enter your phone number"
            disabled={isSubmitting || isSubmitted}
            className="mt-px h-9 w-full rounded-xl border border-white/10 bg-[#4C4C4C] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </InputField>

        {/* MESSAGE */}

        <InputField
          label={
            formConfig?.message?.placeholder ??
            "Message"
          }
          required={true}
          error={errors.message?.message}
        >
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us how we can help..."
            disabled={isSubmitting || isSubmitted}
            className="mt-px w-full rounded-xl border border-white/10 bg-[#4C4C4C] p-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-primary-1 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </InputField>

        {/* SERVER ERROR */}

        {serverError && (
          <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
            {serverError}
          </p>
        )}

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="h-9 w-full rounded-full bg-gradient-to-r from-primary-1 to-primary-2 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitted
            ? "Message Sent ✓"
            : isSubmitting
              ? "Sending..."
              : formConfig?.submitButtonLabel ??
                "Send Message"}
        </button>

        {/* SUCCESS */}

        {isSubmitted && (
          <p className="text-center text-sm font-medium text-green-400">
            {formConfig?.successMessage ??
              "Thank you! Your message has been sent successfully."}
          </p>
        )}
      </form>
    </div>
  );
}
