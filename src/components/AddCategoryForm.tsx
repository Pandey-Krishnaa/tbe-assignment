"use client";
import { addCategory } from "@/lib/actions/category";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

function AddCategoryForm() {
  const router = useRouter();
  const [category, setCategory] = useState<string>("");
  const submitHandler = async () => {
    console.log(category);

    if (!category || category.length <= 2)
      return alert("please add a valid category... ");
    try {
      await addCategory(category.toLowerCase());
      console.log("success");
      setCategory("");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="px-5 py-2 h-full flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <div className="mb-5">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <input
          id="category"
          name="category"
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="add category"
          onChange={(e) => setCategory(e.target.value)}
          required
          value={category}
        />
        <button className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ADD Category
        </button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
