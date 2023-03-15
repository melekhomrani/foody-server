import { sign, verify } from "jsonwebtoken";
import { config } from "../config";
import IUser from "../interfaces/User";

const generateAuthToken = async (user: IUser) => {
  const token = sign({ user }, config.JWT_SECRET);
  return token;
}

export { generateAuthToken };