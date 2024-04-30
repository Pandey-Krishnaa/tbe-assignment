"use server";

import { connectToDatabase } from "../db/mongoose";
import category from "../models/category";
export const addCategory = async (cat: string) => {
  try {
    console.log("called");

    await connectToDatabase();
    // @ts-ignore
    await category.create({ category: cat });
    return { error: null };
  } catch (err) {
    return { error: err };
  }
};

export const getAllCategoies = async () => {
  try {
    await connectToDatabase();
    const categories = await category.find({});
    return categories;
  } catch (error) {
    throw error;
  }
};
