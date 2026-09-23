import React from "react";
import { IconContainerModel } from "@/src/type/ui";
import { colorRegistry } from "@/src/lib/theme/color-registry";
import { twJoin } from "tailwind-merge";

function IconContainer({ Icon, iconColorScheme }: IconContainerModel) {
  const color = colorRegistry[iconColorScheme];
  return (
    <div className={twJoin("p-3 rounded-xl", color.background)}>
      <Icon className={color.color} />
    </div>
  );
}

export default IconContainer;
