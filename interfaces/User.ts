import { Document } from "mongoose";

export default interface IUser extends Document {
  _id?: string;
  username: string;
  first_name: string; 
  last_name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
