import express from "express";
import { askQuestion ,getAllQuestions,deleteQuestion ,voteQuestion, paginatedQuestions} from "../controllers/question.js";
import auth from '../middlewares/auth.js';
const router = express.Router();
router.post("/Ask",auth, askQuestion );
router.get("/get", getAllQuestions);
router.delete("/delete/:id",auth, deleteQuestion);
router.patch("/vote/:id",auth,  voteQuestion);
router.get("/paginatedQuestions", paginatedQuestions);
 export default router;

