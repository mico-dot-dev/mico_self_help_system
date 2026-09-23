"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryFilterModel } from "@/src/type/data-list";
import { AppModule } from "@/src/type/module";
import { Button } from "./Button";

interface ContentProps {
  module: AppModule;
  content: CategoryFilterModel[];
}
function CategoryList({ content, module }: ContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const handleCatgoryFilter = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="flex flex-row text-sm">
        <div className="flex flex-row gap-3 text-background">
          <p className="text-text-muted font-semibold uppercase self-center">
            Categories:{" "}
          </p>
          <Button
            size={"sm"}
            variant={!activeCategory ? "primary" : "secondary"}
            className="min-w-fit"
            onClick={() => handleCatgoryFilter("all")}
          >
            All Categories
          </Button>

          {/* Loop for category content */}
          {content.map((category) => {
            return (
              <Button
                size={"sm"}
                variant={
                  activeCategory === category.id ? "primary" : "secondary"
                }
                key={category.id}
                onClick={() => handleCatgoryFilter(category.id)}
              >
                {category.label}
              </Button>
            );
          })}
          {module === "task" && (
            <button
              className="flex text-text-primary cursor-pointer items-center "
              onClick={() => setModalOpen(true)}
            >
              {" "}
              <Plus size={20} />
            </button>
          )}
        </div>
      </div>
      {module === "task" && (
        <AddCategoryModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          content="task_category"
        />
      )}
    </>
  );
}

export default CategoryList;
