import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-200 cursor-pointer",
          "hover:scale-[1.02] active:scale-[0.98]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          {
            "bg-pox-red text-white hover:bg-pox-red/90 shadow-lg hover:shadow-xl":
              variant === "filled",
            "border-2 border-pox-red text-pox-red hover:bg-pox-red hover:text-white":
              variant === "outline",
            "text-pox-brown hover:bg-pox-cream":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
