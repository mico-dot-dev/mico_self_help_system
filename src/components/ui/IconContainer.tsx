import React from "react";
import { IconContainerModel } from "@/src/type/ui";
import { colorRegistry } from "@/src/lib/theme/color-registry";
import { twJoin } from "tailwind-merge";

function IconContainer({ Icon, iconColorScheme, fill }: IconContainerModel) {
  const color = colorRegistry[iconColorScheme];
  return (
    <div className={twJoin("p-2 rounded-xl", color.background)}>
      <Icon className={color.color} size={15} />
    </div>
  );
}

export default IconContainer;
