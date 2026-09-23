"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddFormModal from "../modal/AddModal";
import { ModuleWithModals } from "@/src/type/module";
import { Button } from "./Button";
import { size } from "@/src/type/ui";

interface AddButtonProps {
  content: ModuleWithModals;
  size: size;
}

function AddButton({ content, size }: AddButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button size={size} onClick={() => setModalOpen(true)}>
        <Plus className="" size={20} />
        <p className="hidden lg:block capitalize">Add {content}</p>
      </Button>

      <AddFormModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content={content}
      />
    </>
  );
}

export default AddButton;
