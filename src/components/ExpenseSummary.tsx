// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { summary } from "@/lib/actions/expense";
import { init } from "next/dist/compiled/webpack/webpack";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Expense Summary",
    },
  },
};

const labels = ["Transportation", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [1, 3, 2],
      backgroundColor: "rgba(29, 78, 216, 1)",
    },
  ],
};

export default function ExpenseSummary() {
  const [labels, setLables] = useState([]);
  const [values, setValues] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function init() {
      try {
        const result = await summary();
        result.forEach((item) => {
          setTotal((pre) => pre + item.totalAmount);
          setLables((pre) => [...pre, item.categoryName]);
          setValues((pre) => [...pre, item.totalAmount]);
        });
      } catch (error) {}
    }
    init();
  }, []);
  console.log(values, labels);

  return (
    <div className="flex justify-center items-center w-full p-2 sm:w-[600px] md:w-[750px] lg:w-[1000px]">
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: `Total Spent ${total}`,
              data: values,
              backgroundColor: "rgba(29, 78, 216, 1)",
            },
          ],
        }}
      />
    </div>
  );
}
