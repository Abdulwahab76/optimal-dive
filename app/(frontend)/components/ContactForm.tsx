"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

type Errors = Partial<Record<keyof FormValues, string>>;

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function validate(name: keyof FormValues, value: string) {
    const v = value.trim();

    if (!v) return `${name} is required`;

    if (name === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email";
    }

    if (name === "phone") {
      return v.replace(/\D/g, "").length >= 7
        ? ""
        : "Enter a valid phone number";
    }

    return "";
  }

  function handleChange(name: keyof FormValues, value: string) {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Errors = {};

    Object.keys(values).forEach((key) => {
      const field = key as keyof FormValues;
      const error = validate(field, values[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setValues(initialValues);
    }
  }

  const inputClass = (name: keyof FormValues) =>
    `
    w-full
    rounded-xl
    border
    bg-white
    px-4
    py-3
    text-sm
    outline-none
    transition

    ${
      errors[name]
        ? "border-red-500 focus:ring-red-200"
        : "border-gray-200 focus:border-primary-1 focus:ring-2 focus:ring-primary-1/20"
    }
    `;

  return (
    <form
      onSubmit={submit}
      className="
      rounded-3xl
      shadow-sm
      p-6
      
      md:p-10
      "
    >
      <h2
        className="
        mb-8
        text-3xl
        font-bold
        text-gray-900
        md:text-4xl
      "
      >
        Get Your Free Consultation
      </h2>

      <div
        className="
        grid
        gap-5
        sm:grid-cols-2
      "
      >
        {[
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["phone", "Phone"],
          ["email", "Email"],
        ].map(([name, placeholder]) => (
          <div key={name}>
            <input
              value={values[name as keyof FormValues]}
              placeholder={placeholder}
              className={inputClass(name as keyof FormValues)}
              onChange={(e) =>
                handleChange(name as keyof FormValues, e.target.value)
              }
            />

            {errors[name as keyof FormValues] && (
              <p className="mt-1 text-xs text-red-500">
                {errors[name as keyof FormValues]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <textarea
            rows={5}
            placeholder="How can we help?"
            value={values.message}
            className={inputClass("message")}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full mt-2 justify-center  text-center items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-6 py-3 text-white"
      >
        Book A Time
        <span
          className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
        "
        >
          <ArrowRight size={14} className="text-black" />
        </span>
      </button>

      {success && (
        <p
          className="
          mt-4
          text-center
          text-sm
          font-medium
          text-green-600
        "
        >
          Thank you! We will contact you soon.
        </p>
      )}
    </form>
  );
}
