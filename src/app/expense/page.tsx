"use server";
import ExpenseSummary from "@/components/ExpenseSummary";
import { getAllExpenses } from "@/lib/actions/expense";
import React from "react";

async function page() {
  return (
    <div className="expense-summary">
      <div className="expense-summary-chart flex justify-center items-center">
        <ExpenseSummary />
      </div>
    </div>
  );
}

export default page;
