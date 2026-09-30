import React from "react";
import { IconContainerModel } from "@/src/type/ui";
import { colorRegistry } from "@/src/lib/theme/color-registry";
import { twJoin } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const container = cva("inline-flex items-center justify-center shrink-0", {
  variants: {
    size: {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-xl",
      pill: "rounded-full",
      semi: "rounded-lg",
    },
  },
  defaultVariants: { size: "md", shape: "rounded" },
});

const ICON_PX = { sm: 15, md: 20, lg: 24 } as const;

interface IconContainerProps
  extends IconContainerModel, VariantProps<typeof container> {
  className?: string; // escape hatch for the wrapper
  iconClassName?: string; // escape hatch for the icon
}

function IconContainer({
  Icon,
  iconColorScheme,
  fill = false,
  size,
  shape,
  className,
  iconClassName,
}: IconContainerProps) {
  const color = colorRegistry[iconColorScheme];
  const resolvedSize = size ?? "md";
  return (
    <div
      className={twJoin(
        container({ size: resolvedSize, shape }),
        color.background,
        className,
      )}
    >
      <Icon
        size={ICON_PX[resolvedSize]}
        className={twJoin(color.color, iconClassName)}
      />
    </div>
  );
}

export default IconContainer;
