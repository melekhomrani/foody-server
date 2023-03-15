import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import CustomError from './CustomError';

type ErrorParams = CustomError | Error;

const errorHandler: ErrorRequestHandler = (err: ErrorParams, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: err.message});
}

export default errorHandler;