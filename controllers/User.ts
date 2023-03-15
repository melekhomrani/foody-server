import { NextFunction, Request, Response } from "express";
import { generateAuthToken } from "../helpers/generateAuthToken";
import User from "../models/User";
import bcrypt from "bcrypt";
import CustomError from "../helpers/CustomError";

interface ILogin {
  email: string;
  password: string;
}
interface ISignup {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const register = async (req: Request, res: Response, next: any) => {
  try {
    const userData: ISignup = req.body;
    const user: any = new User(userData);
    await user.save();
    const token = await generateAuthToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password }: ILogin = req.body;
    const user: any = await User.findOne({ email });
    if (!user) {
      throw new CustomError('Invalid credentials: Email not found', 401);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new CustomError('Invalid credentials: Password is incorrect', 401);
    }
    const token = await generateAuthToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
}

export { register, login };