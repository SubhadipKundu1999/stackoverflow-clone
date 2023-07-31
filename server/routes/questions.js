import express from "express";
import { askQuestion } from "../controllers/askQuestion.js";


const router = express.Router();

router.post("/Ask",askQuestion );


 export default router;

