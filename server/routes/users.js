
import express from 'express';
const router = express.Router();
import { signup, login,  } from "../controllers/auth.js";
import { getAllUsers,updateProfile } from '../controllers/users.js';
import auth from "../middlewares/auth.js"
router.post('/signup',signup);
router.post('/login',login);
router.get("/getAllUsers",getAllUsers);
router.patch("/update/:id",auth, updateProfile);
export default router;