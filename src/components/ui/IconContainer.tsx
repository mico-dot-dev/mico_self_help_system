import React from "react";

import { twJoin } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { cn } from "cn";

const iconContainer = cva("inline-flex items-center justify-center shrink-0", {
  variants: {
    size: {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
    },
    tone: {
      none: "",
      violet: "bg-primary/15 text-primary-light",
      violetA: "bg-primary/15 text-text-primary",
      violetB: "bg-primary/85 text-text-primary",
      green: "bg-success/15 text-green-icon",
      amber: "bg-warning/15 text-amber-icon",
      red: "bg-error/15 text-red-icon",
      blue: "bg-info/15 text-info",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-xl",
      pill: "rounded-full",
      semi: "rounded-lg",
    },
  },
  defaultVariants: { size: "md", shape: "rounded", tone: "none" },
});

export type IconTone = NonNullable<VariantProps<typeof iconContainer>["tone"]>;

const ICON_PX = { sm: 15, md: 20, lg: 24 } as const;

interface IconContainerProps extends VariantProps<typeof iconContainer> {
  Icon: LucideIcon;
  className?: string; // escape hatch for the wrapper
  iconClassName?: string; // escape hatch for the icon
}

function IconContainer({
  Icon,
  size,
  shape,
  tone,
  className,
  iconClassName,
}: IconContainerProps) {
  const resolvedSize = size ?? "md";
  return (
    <span
      className={cn(
        iconContainer({ size: resolvedSize, shape, tone }),

        className,
      )}
    >
      <Icon size={ICON_PX[resolvedSize]} className={twJoin(iconClassName)} />
    </span>
  );
}

export default IconContainer;
