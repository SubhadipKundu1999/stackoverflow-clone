import express from "express";
import { askQuestion } from "../controllers/askQuestion.js";

import { getAllQuestions } from "../controllers/getAllQuestions.js";
const router = express.Router();

router.post("/Ask",askQuestion );
router.get("/get",getAllQuestions);


 export default router;

