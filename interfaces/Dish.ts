import { Document } from "mongoose";
import IRestaurant from "./Restaurant";

export default interface IDishes extends Document {
  id?: string,
  name: string,
  description: string,
  price: number,
  imgUrl: string,
}