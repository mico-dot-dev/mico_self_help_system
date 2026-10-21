"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { BanknoteArrowUp, BanknoteArrowDown } from "lucide-react";
import IconContainer from "@/src/components/ui/IconContainer";
import { ButtonWithIconModel } from "@/src/type/component";
import AddFormModal from "../modal/AddModal";
import { ModuleWithModals } from "@/src/type/module";

interface QuickStartItem extends ButtonWithIconModel {
  modal: ModuleWithModals;
}

function QuickStartButtons() {
  const [content, setContent] = useState<ModuleWithModals | null>(null);

  const quickStartButtons: QuickStartItem[] = [
    {
      label: "Add Income",
      icon: BanknoteArrowUp,
      modal: "income",
    },
    {
      label: "Add Transaction",
      icon: BanknoteArrowDown,
      modal: "transaction",
    },
    {
      label: "Add Expense",
      icon: BanknoteArrowUp,
      modal: "expense",
    },
    {
      label: "Set Budget",
      icon: BanknoteArrowUp,
      modal: "budget",
    },
  ];

  return (
    <div className="flex flex-col card-base gap-2">
      <p className="font-semibold">Quick Start</p>
      <div className="grid grid-cols-2 gap-3">
        {quickStartButtons.map((value, i) => {
          return (
            <Button
              variant={"secondary"}
              className="h-fit p-1 gap-1 text-sm"
              key={i}
              onClick={() => setContent(value.modal)}
            >
              <IconContainer
                Icon={value.icon}
                tone="none"
                size={"sm"}
              ></IconContainer>
              {value.label}
            </Button>
          );
        })}
      </div>
      {content && (
        <AddFormModal
          content={content}
          isOpen
          setIsOpen={(open) => !open && setContent(null)}
        />
      )}
    </div>
  );
}

export default QuickStartButtons;
