"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddFormModal from "../modal/AddModal";
import { ModuleWithModals } from "@/src/type/module";
import { Button } from "./Button";

interface AddButtonProps {
  content: ModuleWithModals;
}

function AddButton({ content }: AddButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <Button size={"md"} onClick={() => setModalOpen(true)}>
          <Plus className="" size={20} />
          <p className="hidden lg:block capitalize">Add {content}</p>
        </Button>
      </div>

      <AddFormModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content={content}
      />
    </>
  );
}

export default AddButton;
