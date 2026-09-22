// src/components/ui/Button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  "inline-flex items-center justify-center cursor-pointer border-2 transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 disabled:cursor-not-allowed border-none",
  {
    variants: {
      variant: {
        secondary: "button-secondary",
        primary: "button-primary",
        ghost: "bg-transparent border-transparent hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
      shape: { rounded: "rounded-lg", pill: "rounded-full" },
    },
    defaultVariants: { variant: "primary", size: "md", shape: "rounded" },
  },
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export function Button({ variant, size, shape, className, ...rest }: Props) {
  return (
    <button
      className={twMerge(button({ variant, size, shape }), className, "w-full")}
      {...rest}
    />
  );
}
