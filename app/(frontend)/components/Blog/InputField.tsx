interface InputFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function InputField({
  label,
  required,
  error,
  children,
}: InputFieldProps) {
  return (
    <div className="space-y-2 ">
      <label className="text-base font-medium text-white pl-2  ">
        {label}
        {required && <span className="ml-1 text-white">*</span>}
      </label>

      {children}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
