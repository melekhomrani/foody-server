import { Document } from "mongoose";

export default interface IDish extends Document {
  id?: string,
  name: string,
  description: string,
  price: number,
  imgUrl: string,
}