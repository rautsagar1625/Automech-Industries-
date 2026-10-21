import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-brand-deep",
        dark: "bg-navy text-white hover:bg-navy-soft",
        outline: "border border-navy/80 text-navy hover:bg-navy hover:text-white",
        light: "bg-white text-navy hover:bg-steel",
        "outline-light":
          "border border-on-navy/40 text-on-navy hover:border-on-navy hover:bg-on-navy/10",
        ghost: "text-navy hover:bg-navy/5",
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
