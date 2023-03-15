import mongoose from "mongoose";
import IDishes from "../interfaces/Dish";

const dishSchema = new mongoose.Schema<IDishes>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
})

export default mongoose.model<IDishes>("dish", dishSchema)