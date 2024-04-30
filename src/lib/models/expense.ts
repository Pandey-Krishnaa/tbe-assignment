import mongoose, { model, models } from "mongoose";
import category from "./category";
const schema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "description is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: [true, "category is required"],
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
  },
  date: {
    type: Date,
    required: [true, "date is required"],
  },
});

const expense = models.expense || model("expense", schema);
export default expense;
