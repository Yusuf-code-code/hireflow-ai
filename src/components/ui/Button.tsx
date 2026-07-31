import type { ButtonHTMLAttributes } from "react";
import cn  from "../../lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",

        variant === "primary" &&
          "bg-white text-black hover:bg-zinc-200",

        variant === "secondary" &&
          "border border-zinc-700 text-white hover:bg-zinc-900",

        size === "sm" &&
          "h-9 px-4 text-sm",

        size === "md" &&
          "h-10 px-5 text-sm",

        size === "lg" &&
          "h-12 px-6 text-base",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}