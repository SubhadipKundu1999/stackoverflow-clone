import express from "express";
import { askQuestion ,getAllQuestions,deleteQuestion,voteQuestion } from "../controllers/question.js";
const router = express.Router();
router.post("/Ask",askQuestion );
router.get("/get",getAllQuestions);
router.delete("/delete/:id",deleteQuestion);
router.patch("/vote/:id", voteQuestion);

 export default router;

