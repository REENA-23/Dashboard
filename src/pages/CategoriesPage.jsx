import React from "react";
import AddNewCategoryCard from "../page-coustomize/pagecategory/AddNewCategoryCard";
import Categories from "../page-coustomize/pagecategory/Categories";

export default function CategoriesPage() {
  return (
    <div className="p-4 sm:p-6 bg-[#F5F7F9] min-h-screen">
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* LEFT: Add Category Form */}
        <div className="w-full xl:w-[380px] flex-shrink-0">
          <AddNewCategoryCard />
        </div>

        {/* RIGHT: Categories Grid */}
        <div className="w-full flex-1">
          <Categories />
        </div>

      </div>
    </div>
  );
}
