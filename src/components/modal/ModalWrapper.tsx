"use client";

import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
};

function AddFormModal({
  isOpen,
  setIsOpen,
  description,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          {/* Backdrop overlay */}
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in" />

          {/* Modal Box */}
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             bg-foreground border-2 border-border rounded-lg lg:w-[30%] w-full z-50 lg:h-[90%] max-h-screen
             flex flex-col p-5"
          >
            <Dialog.Title className="relative text-xl font-bold text-primary-tex mb-3 bg-foreground py-5 border-b-2 border-b-border">
              <p className="">{title}</p>
              <p className="text-sm text-muted-text">{description}</p>
            </Dialog.Title>

            <div className="flex-1 overflow-y-scroll">{children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default AddFormModal;
