import { Router, Request, Response, NextFunction } from "express"
import { auth } from "../middleware/auth"
import { getAllRestaurants, getRestaurant, getRestaurantByName, addRestaurant, deleteRestaurant } from "../controllers/Restaurant"

const api = Router()

api.use(auth)

api.get("/",getAllRestaurants)
api.get("/:id", getRestaurant)
api.get("/name/:name", getRestaurantByName)
api.post("/", addRestaurant)
api.delete("/:id", deleteRestaurant)

export default api