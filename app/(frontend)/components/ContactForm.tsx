// app/(frontend)/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { ContactForm as ContactFormType } from "@/payload-types";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  firstName: "", lastName: "", phone: "", email: "", message: "",
};

type Errors = Partial<Record<keyof FormValues, string>>;

export default function ContactForm({ config }: { config?: ContactFormType }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const heading = config?.heading ?? "Get Your Free Consultation";
  const submitLabel = config?.submitButtonLabel ?? "Book A Time";
  const successMessage = config?.successMessage ?? "Thank you! We will contact you soon.";

  const fieldConfig = {
    firstName: {
      placeholder: config?.firstName?.placeholder ?? "First Name",
      requiredMessage: config?.firstName?.requiredMessage ?? "First Name is required",
    },
    lastName: {
      placeholder: config?.lastName?.placeholder ?? "Last Name",
      requiredMessage: config?.lastName?.requiredMessage ?? "Last Name is required",
    },
    phone: {
      placeholder: config?.phone?.placeholder ?? "Phone",
      requiredMessage: config?.phone?.requiredMessage ?? "Phone is required",
      invalidMessage: config?.phone?.invalidMessage ?? "Enter a valid phone number",
    },
    email: {
      placeholder: config?.email?.placeholder ?? "Email",
      requiredMessage: config?.email?.requiredMessage ?? "Email is required",
      invalidMessage: config?.email?.invalidMessage ?? "Enter a valid email",
    },
    message: {
      placeholder: config?.message?.placeholder ?? "How can we help?",
      requiredMessage: config?.message?.requiredMessage ?? "Message is required",
    },
  };

  if (config?.showForm === false) return null;

  function validate(name: keyof FormValues, value: string) {
    const v = value.trim();
    if (!v) return fieldConfig[name].requiredMessage;

    if (name === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : fieldConfig.email.invalidMessage;
    }
    if (name === "phone") {
      return v.replace(/\D/g, "").length >= 7 ? "" : fieldConfig.phone.invalidMessage;
    }
    return "";
  }

  function handleChange(name: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Errors = {};

    Object.keys(values).forEach((key) => {
      const field = key as keyof FormValues;
      const error = validate(field, values[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setValues(initialValues);
    }
  }

  const inputClass = (name: keyof FormValues) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
      errors[name]
        ? "border-red-500 focus:ring-red-200"
        : "border-gray-200 focus:border-primary-1 focus:ring-2 focus:ring-primary-1/20"
    }`;

  return (
    <form onSubmit={submit} className="rounded-3xl shadow-sm p-6 md:p-10">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">{heading}</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {(["firstName", "lastName", "phone", "email"] as const).map((name) => (
          <div key={name}>
            <input
              value={values[name]}
              placeholder={fieldConfig[name].placeholder}
              className={inputClass(name)}
              onChange={(e) => handleChange(name, e.target.value)}
            />
            {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
          </div>
        ))}

        <div className="sm:col-span-2">
          <textarea
            rows={5}
            placeholder={fieldConfig.message.placeholder}
            value={values.message}
            className={inputClass("message")}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full mt-2 justify-center text-center items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white"
      >
        {submitLabel}
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <ArrowRight size={14} className="text-black" />
        </span>
      </button>

      {success && (
        <p className="mt-4 text-center text-sm font-medium text-green-600">{successMessage}</p>
      )}
    </form>
  );
}