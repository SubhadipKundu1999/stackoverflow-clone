
import express from 'express'
import upload from "../middlewares/upload.js"
const router = express.Router();
import { signup, login, resetPassword, forgotPassword } from "../controllers/auth.js";
import { getAllUsers,updateProfile, getUserById } from '../controllers/users.js';
import auth from "../middlewares/auth.js"
// signup
router.post('/signup',signup);
// login
router.post('/login',login);
// forget password
router.post("/forgotPassword", forgotPassword);
// reset password
router.put("/resetPassword/:token", resetPassword);
router.get("/getAllUsers",getAllUsers);
router.post("/getUserById/:id",getUserById);

router.patch("/update/:id", auth,updateProfile);
export default router;