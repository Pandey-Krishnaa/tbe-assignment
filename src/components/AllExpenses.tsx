// @ts-nocheck
"use client";
import Card from "@/commons/Card";
import { getAllExpenses } from "@/lib/actions/expense";

import React, { useEffect, useState } from "react";

function AllExpenses() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function init() {
      try {
        const data = await getAllExpenses();
        setResult(data);
      } catch (error) {
        alert("something went wrong");
      }
    }
    init();
  }, []);
  return (
    <div className="p-5 flex flex-col justify-center items-center gap-2 flex-wrap w-full sm:flex-row  sm:justify-start sm:items-start">
      {result.length === 0 ? (
        <p>
          No Expenses.
          <br />
          Start tracking{" "}
        </p>
      ) : (
        result.map((data) => (
          <Card
            key={data._id}
            description={data.description}
            amount={data.amount}
            category={data?.category?.category}
            expenseId={data._id}
            date={data.date}
          />
        ))
      )}
    </div>
  );
}

export default AllExpenses;
