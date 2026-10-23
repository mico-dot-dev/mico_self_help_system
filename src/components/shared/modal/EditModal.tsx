"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FORM_REGISTRY } from "./AddModal.config";
import ModalWrapper from "./ModalWrapper";
import type { ModuleWithModals } from "@/src/type/module";

export default function EditModal({ module }: { module: ModuleWithModals }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const editId = searchParams.get("edit");
  if (!editId) return null; // no param = modal is closed

  const { label, description, AddFormComponent: Form } = FORM_REGISTRY[module];

  const close = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("edit"); // removing the param closes the modal
    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <ModalWrapper
      isOpen
      setIsOpen={close}
      title={`Edit ${label}`}
      description={description}
    >
      <Form closeModal={close} id={editId} />
    </ModalWrapper>
  );
}
