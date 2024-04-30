// @ts-nocheck
"use client";
import { addExpense } from "@/lib/actions/expense";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type categoryType = {
  _id: string;
  category: string;
};
function AddExpenseForm({ categories }: { categories: categoryType[] }) {
  const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (categories.length > 0)
      setData({ ...data, category: categories[0]._id });
  }, [categories]);
  const submitHandler = async () => {
    try {
      if (
        !data ||
        !data.category ||
        !data.date ||
        !data.description ||
        !data.amount
      )
        return alert("all inputs are required");
      await addExpense(data);
      alert("expense added");
      router.refresh();
    } catch (error) {
      console.log(error);

      alert("something went wrong");
    }
  };
  return (
    <>
      <form
        className="max-w-sm mx-auto p-5 h-full flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <h1>Add Expense</h1>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            {categories?.map((val) => (
              <option value={val._id} key={val._id}>
                {val.category}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Expense
        </button>
      </form>
    </>
  );
}

export default AddExpenseForm;
