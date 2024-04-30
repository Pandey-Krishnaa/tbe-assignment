import { Schema, model, models } from "mongoose";
const schema = new Schema({
  category: {
    type: String,
    required: [true, "category is required"],
    unique: [true, "category already exist"],
  },
});

const category = models.category || model("category", schema);
export default category;
