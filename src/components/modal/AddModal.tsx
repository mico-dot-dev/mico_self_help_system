import React, { ReactNode, useState } from "react";
import { FORM_REGISTRY } from "./AddModal.config";
import { ModuleWithModals } from "@/src/type/module";
import ModalWrapper from "./ModalWrapper";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  content: ModuleWithModals;
};

function AddFormModal({ isOpen, setIsOpen, content }: ModalProps) {
  if (!isOpen) return null;

  const contentConfig = FORM_REGISTRY[content];

  if (!contentConfig) {
    console.error(
      `GlobalModal: No form configuration found for type "${content}"`,
    );
    return null;
  }

  const { label, description, AddFormComponent } = contentConfig;
  const closeModal = () => setIsOpen(false);

  return (
    <ModalWrapper
      isOpen={true}
      setIsOpen={setIsOpen}
      title={"Create New " + label}
      description={description}
    >
      <div>
        <AddFormComponent closeModal={closeModal} />
      </div>
    </ModalWrapper>
  );
}

export default AddFormModal;
