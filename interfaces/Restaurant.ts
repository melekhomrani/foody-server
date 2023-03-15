import { Document } from "mongoose"
import ICategory from "./Category"
import IDishes from "./Dish"

export default interface IRestaurant extends Document {
  id?: number,
  name: string,
  imgUrl: string,
  rating: number,
  category: ICategory,
  address: string,
  description: string,
  dishes: IDishes[],
  longitude: number,
  latitude: number
}