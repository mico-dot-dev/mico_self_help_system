import React from "react";
import { colorRegistry, IconContainerModel } from "@/src/type/page-types";
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
