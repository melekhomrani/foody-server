import { NextFunction, Request, Response } from "express";
import CustomError from "../helpers/CustomError";
import Category from "../models/Category";

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err: any) {
    next(err);
  }
}

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) throw new CustomError(`category with id ${req.params.id} is not found`, 404);
    res.status(200).json(category);
  } catch (err: any) {
    next(err)
  }
}

const getCategoryByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findOne({ name: req.params.name });
    if (!category) throw new  CustomError(`category with name ${req.params.name} is not found`, 404);
    res.status(200).json(category);
  } catch (err: any) {
    next(err)
  }
}

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err: any) {
    next(err);
  }
}

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!category) throw new CustomError(`category with id ${req.params.id} is not found`, 404);
    res.status(200).json(category);
  } catch (err: any) {
    next(err);
  }
}

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) throw new CustomError(`category with id ${req.params.id} is not found`, 404);
    res.status(200).json(category);
  } catch (err: any) {
    next(err);
  }
}

export {
  getAllCategories,
  getCategory,
  getCategoryByName,
  addCategory,
  updateCategory,
  deleteCategory
}