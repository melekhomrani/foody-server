import { Router } from "express";
import { getAllCategories, getCategory, addCategory, getCategoryByName, updateCategory, deleteCategory } from "../controllers/Category";

const api = Router();

api.get('/', getAllCategories);
api.get('/:id', getCategory);
api.get('/name/:name', getCategoryByName)
api.post('/', addCategory);
api.put('/:id', updateCategory);
api.delete('/:id', deleteCategory);

export default api;