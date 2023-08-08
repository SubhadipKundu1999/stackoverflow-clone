
import express from 'express';
const router = express.Router();
import { signup, login,  } from "../controllers/auth.js";
import { getAllUsers } from '../controllers/users.js';
router.post('/signup',signup);
router.post('/login',login);
router.get("/getAllUsers",getAllUsers);

export default router;