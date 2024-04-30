"use client";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { FaDeleteLeft, FaMoneyCheckDollar } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

import { useState } from "react";
import Modal from "@/modals/Modal";
import moment from "moment";
import { deleteExpense } from "@/lib/actions/expense";
import { useRouter } from "next/navigation";
function Card({
  description,
  amount,
  category,
  expenseId,
  date,
}: {
  description: string;
  amount: number;
  category: string;
  expenseId: string;
  date: any;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const deleteExpenseHandler = async (id: string) => {
    try {
      await deleteExpense(id);
      alert("successfully deleted");
      router.refresh();
    } catch (error) {
      alert("failed to delete");
    }
    setIsOpen(false);
  };
  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg shadow flex flex-col items-start sm:w-[48%] md:w-[30%]">
      <div className="text-xl font-bold w-full">
        <span className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <BiSolidCategoryAlt size={16} /> {category.toLocaleUpperCase()}
          </span>
          <span
            onClick={(e) => {
              setIsOpen(true);
            }}
          >
            <FaDeleteLeft size={25} />
          </span>
        </span>
      </div>

      <p className="mb-3 font-normal">
        <span className="flex items-center gap-2">
          <MdDescription size={16} />
          {description}
        </span>
      </p>
      <p className="mb-3 font-normal">
        <span className="flex items-center gap-2">
          <FaMoneyCheckDollar size={16} />
          {amount}Rs.
        </span>
      </p>
      <p>
        <span className="flex items-center gap-2">
          <MdDateRange />
          <span>{moment(date).format("DD-MM-YYYY")}</span>
        </span>
      </p>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <div className="max-w-[400] max-h-[300] bg-gray-800 p-5 rounded-lg">
          <div className="w-full flex justify-between">
            <span> </span>
            <FaDeleteLeft
              className="cursor-pointer"
              size={25}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            />
          </div>
          <div>
            <h1 className="text-2xl mb-4">Are You Sure?</h1>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={(e) => {
                e.preventDefault();
                console.log(expenseId);
                deleteExpenseHandler(expenseId);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
