import { Router } from "express";
import { register, login } from "../controllers/User";

const api = Router();

api.post('/register', register);
api.post('/login', login);

export default api;
