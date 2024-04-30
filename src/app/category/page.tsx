// @ts-nocheck
// "use server";
import AddCategoryForm from "@/components/AddCategoryForm";
import { getAllCategoies } from "@/lib/actions/category";

import React from "react";
export const dynamic = "force-dynamic";
async function page() {
  let categories = [];
  try {
    // @ts-ignore
    categories = await getAllCategoies();
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <AddCategoryForm />
      <div className="all-cateogies flex flex-wrap gap-3 px-5">
        {categories?.length === 0 && (
          <div className="w-full">
            <p className="text-center text-2xl">
              Oops no category.
              <br />
              Start adding expenses
            </p>
          </div>
        )}
        {categories?.map((category) => (
          <span
            className="bg-gray-800 p-4 text-xl font-medium rounded-lg"
            key={category.category}
          >
            {category.category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default page;
