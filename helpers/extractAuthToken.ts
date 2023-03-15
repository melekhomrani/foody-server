import { verify } from "jsonwebtoken";
import { config } from "../config";
import User from "../models/User";

const extractUserFromToken = async (token: string) => {
  const decoded = verify(token, config.JWT_SECRET);
  const user = await User.findOne({ _id: (decoded as any)._id});
  return user;
}

export { extractUserFromToken };