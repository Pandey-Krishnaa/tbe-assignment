"use server";

import AddExpenseForm from "@/components/AddExpenseForm";

import { getAllCategoies } from "@/lib/actions/category";

import React from "react";

async function page() {
  let result = [];
  try {
    result = await getAllCategoies();
    console.log(result);
  } catch (error) {}
  return <AddExpenseForm />;
}

export default page;
