import { Router } from "express";
import CategoryRoute from "./Category";
import UserRoute from "./User";
import RestaurantRoute from "./Restaurant";
import DishRoute from "./Dish";

const router = Router();

router.use('/auth', UserRoute);
router.use('/categories', CategoryRoute);
router.use('/restaurants', RestaurantRoute);
router.use('/dishes', DishRoute);

export default router;
