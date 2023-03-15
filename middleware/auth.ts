import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../config";
import CustomError from "../helpers/CustomError";
import User from "../models/User";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError('no token provided', 401);
    }
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new CustomError('Not authorized', 401);
    }
    const decoded = verify(token, config.JWT_SECRET);
    const user = await User.findOne({
      _id: (decoded as any).user._id,
      email: (decoded as any).user.email
    });
    if (!user) {
      throw new CustomError('Not authorized', 401);
    }
    next();
  } catch (err: any) {
    next(err);
  }
}

export { auth };