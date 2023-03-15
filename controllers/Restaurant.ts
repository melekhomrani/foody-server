// create restaurant controller
import { NextFunction, Request, Response } from 'express';
import CustomError from '../helpers/CustomError';
import Dish from '../models/Dish';
import Restaurant from '../models/Restaurant';

interface IRestaurant {
  name: string,
  imgUrl: string,
  rating: number,
  category: string,
  address: string,
  description: string,
  dishes: number[],
  longitude: number,
  latitude: number
}

const getAllRestaurants = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const restaurants = await Restaurant.find();  
    res.status(200).json(restaurants);
  } catch (err: any) {
    next(err);
  }
}

const getRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) throw new Error(`restaurant with id ${req.params.id} is not found`);
    const dishes = await Dish.find({ _id: { $in: restaurant.dishes } });
    restaurant.dishes = dishes;
    res.status(200).json(restaurant);
  } catch (err: any) {
    next(err);
  }
}

const getRestaurantByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const restaurant = await Restaurant.findOne({ name: req.params.name });
    res.status(200).json(restaurant);
  } catch (err: any) {
    next(err);
  }
}

const addRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const restaurantData: IRestaurant = req.body;
    const restaurant = new Restaurant(restaurantData);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err: any) {
    next(err);
  }
}

const deleteRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) throw new Error(`restaurant with id ${req.params.id} is not found`);
    res.status(200).json(restaurant);
  } catch (err: any) {
    next(err);
  }
}

export { getAllRestaurants, getRestaurant, getRestaurantByName, addRestaurant, deleteRestaurant }