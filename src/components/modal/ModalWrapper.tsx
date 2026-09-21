"use client";

import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

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
            className="
            fixed 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            card-base
            rounded-lg 
            lg:w-[32%] w-full 
            z-50 
            lg:h-[95%] max-h-screen
            flex flex-col p-5"
          >
            <Dialog.Title className="flex flex-row relative text-xl font-bold text-primary-tex mb-3 py-5 border-b-2 border-b-border">
              <div className="flex flex-col ">
                <p className="">{title}</p>
                <p className="text-xs text-text-muted">{description}</p>
              </div>
              <div onClick={() => setIsOpen(false)} className="cursor-pointer">
                <X />
              </div>
            </Dialog.Title>

            <div className="flex-1 overflow-y-scroll">{children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default AddFormModal;
