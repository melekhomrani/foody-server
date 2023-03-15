import mongoose from 'mongoose'
import IRestaurant from '../interfaces/Restaurant'

const restaurantSchema = new mongoose.Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    // reference to Category model
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dishes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'dish',
    }],
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

export default mongoose.model<IRestaurant>('restaurant', restaurantSchema)