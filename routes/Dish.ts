import { Router } from "express"
import { auth } from "../middleware/auth"
import { getAllDishes, getDish, getDishByName, addDish, updateDish, deleteDish } from "../controllers/Dish"

const api = Router()

api.use(auth)

api.get("/", getAllDishes)
api.get("/:id", getDish)
api.get("/name/:name", getDishByName)
api.post("/", addDish)
api.put("/:id", updateDish)
api.delete("/:id", deleteDish)

export default api