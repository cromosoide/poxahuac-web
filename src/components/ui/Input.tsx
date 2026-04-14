import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="relative">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-pox-brown mb-1.5"
        >
          {label}
          {props.required && <span className="text-pox-red ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 rounded-lg border-2 bg-white text-pox-black",
            "transition-colors duration-200",
            "placeholder:text-gray-400",
            "focus:outline-none focus:border-pox-gold",
            error
              ? "border-pox-red animate-[shake_0.3s_ease-in-out]"
              : "border-gray-200",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1 text-sm text-pox-red" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
