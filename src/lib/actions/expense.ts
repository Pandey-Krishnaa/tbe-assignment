"use server";
import category, { schema, schema } from "../models/category";
import expense from "./../models/expense";

import { connectToDatabase } from "../db/mongoose";
import mongoose from "mongoose";

export const addExpense = async (data: any) => {
  try {
    console.log("called");
    console.log(data);
    await connectToDatabase();
    await expense.create(data);
    console.log("created");
  } catch (error) {
    console.log(error);

    throw error;
  }
};
export const deleteExpense = async (id: string) => {
  try {
    await connectToDatabase();
    console.log("id = ", id);
    await expense.findByIdAndDelete(id);
    console.log("deleted");
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const getAllExpenses = async () => {
  try {
    await connectToDatabase();
    if (!mongoose.models.category) {
      // If Category model is not registered, import and register it
      mongoose.model("category", schema);
    }
    const expenses = await expense.find({}).populate("category");
    return expenses;
  } catch (error) {
    throw error;
  }
};

export const summary = async () => {
  try {
    await connectToDatabase();
    const result = await expense.aggregate([
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $project: {
          categoryName: "$category.category",
          totalAmount: 1,
        },
      },
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};
