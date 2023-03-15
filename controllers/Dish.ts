// create dish controller
import { NextFunction, Request, Response } from 'express';
import IDish from '../interfaces/Dish';
import Dish from '../models/Dish';

const getAllDishes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (err: any) {
    next(err);
  }
}

const getDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dish = await Dish.findById(req.params.id);
    res.status(200).json(dish);
  } catch (err: any) {
    next(err);
  }
}

const getDishByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dish = await Dish.findOne({ name: req.params.name });
    res.status(200).json(dish);
  } catch (err: any) {
    next(err);
  }
}

const addDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dishData: IDish = req.body;
    const dish = new Dish(dishData);
    await dish.save();
    res.status(201).json(dish);
  } catch (err: any) {
    next(err);
  }
}

const updateDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dish) throw new Error(`dish with id ${req.params.id} is not found`);
    res.status(200).json(dish);
  } catch (err: any) {
    next(err);
  }
}

const deleteDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) throw new Error(`dish with id ${req.params.id} is not found`);
    res.status(200).json(dish);
  } catch (err: any) {
    next(err);
  }
}

export {
  getAllDishes,
  getDish,
  addDish,
  getDishByName,
  updateDish,
  deleteDish,
}
