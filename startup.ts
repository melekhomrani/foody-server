// create data and save to database
import mongoose from 'mongoose';
import { config } from './config';
import IRestaurant from './interfaces/Restaurant';
import IDish from './interfaces/Dish';
import { connectToDB } from './db/db';
import Category from './models/Category';
import ICategory from './interfaces/Category';
import User from './models/User';
import IUser from './interfaces/User';
import Dish from './models/Dish';
import Restaurant from './models/Restaurant';

connectToDB();

const category: ICategory[] = [
  new Category({
    name: 'Fast Food',
    description: 'Fast Food',
    imgUrl: 'https://thumbs.dreamstime.com/b/collage-various-fast-food-products-various-fast-food-products-108173604.jpg'
  }),
  new Category({
    name: 'Italian',
    description: 'Italian',
    imgUrl: 'https://media.istockphoto.com/id/1227415751/photo/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-caprese-salad-and-tomato.jpg?s=612x612&w=0&k=20&c=0qCRhYGQw0w6ahhVX-4ezayA9r81A81cwbPDbgRlC5s='
  }),
  new Category({
    name: 'Chinese',
    description: 'Chinese',
    imgUrl: 'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }),
]

Category.insertMany(category)

const users: IUser[] = [
  new User({
    username: 'admin_username',
    first_name: 'fn_admin',
    last_name: 'ln_admin',
    email: 'admin@foody.com',
    password: 'adminpwd',
    isAdmin: true
  }),
  new User({
    username: 'user_username',
    first_name: 'fn_user',
    last_name: 'ln_user',
    email: 'user@foody.com',
    password: 'userpdw',
  })
]

User.insertMany(users)

const dishes: IDish[] = [
  new Dish({
    name: 'Pizza',
    description: 'Pizza',
    price: 10,
    imgUrl: 'https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=3U-ZTi5CZPTu-CxDiWUlkkGxvK3L1dflPb4nyDVnkZM='
  }),
  new Dish({
    name: 'Burger',
    description: 'Burger',
    price: 5,
    imgUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  }),
  new Dish({
    name: 'Pasta',
    description: 'Pasta',
    price: 7,
    imgUrl:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8&w=1000&q=80'
  }),
]

Dish.insertMany(dishes)

const restaurants: IRestaurant[] = [
  new Restaurant({
    name: 'Pizza Hut',
    description: 'Pizza Hut',
    imgUrl: 'https://www.teahub.io/photos/full/221-2210790_pizza-hut-store-wallpaper-modern-pizza-hut-building.jpg',
    category: category[0],
    dishes: dishes,
    address: '123 Main St',
    longitude: 123,
    latitude: 123,
    rating: 5
  }),
  new Restaurant({
    name: 'Burger King',
    description: 'Burger King',
    imgUrl: 'https://wallpaperaccess.com/full/1727367.jpg',
    category: category[0],
    dishes: dishes,
    address: '123 Main St',
    longitude: 123,
    latitude: 123,
    rating: 5
  }),
]

Restaurant.insertMany(restaurants)
