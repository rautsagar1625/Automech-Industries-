import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-oxide disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-oxide text-white hover:bg-oxide-deep",
        dark: "bg-ink text-paper hover:bg-ink-soft",
        outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
        light: "bg-paper text-ink hover:bg-white",
        "outline-light":
          "border border-on-night/40 text-on-night hover:border-on-night hover:bg-on-night/10",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export interface ButtonLinkProps extends React.ComponentProps<typeof Link>, ButtonVariantProps {
  className?: string;
}

/** A link styled as a button. Avoids nesting <button> inside <a>. */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

/** Arrow that nudges right when its parent button or link is hovered. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/link:translate-x-0.5",
        className
      )}
    >
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
