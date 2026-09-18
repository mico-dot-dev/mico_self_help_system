"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddCategoryModal from "../modal/AddModal";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryFilterModel } from "@/src/type/page-types";
import { AppModule } from "@/src/type/module";

interface ContentProps {
  module: AppModule;
  content: CategoryFilterModel[];
}
function CategoryList({ content, module }: ContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

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
          <p className="text-muted-text font-semibold uppercase self-center">
            Categories:{" "}
          </p>
          <button
            className="button-base min-w-fit p-3 rounded-3xl"
            onClick={() => handleCatgoryFilter("all")}
          >
            All Categories
          </button>

          {/* Loop for category content */}
          {content.map((category) => {
            return (
              <button
                className="button-base p-3 rounded-3xl min-w-fit"
                key={category.id}
                onClick={() => handleCatgoryFilter(category.id)}
              >
                {category.label}
              </button>
            );
          })}
          {module === "task" && (
            <button
              className="flex text-header-text cursor-pointer items-center "
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
