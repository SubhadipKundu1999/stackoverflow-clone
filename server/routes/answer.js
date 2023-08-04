import express from "express";

import { postAnswer, deleteAnswer } from "../controllers/answer.js";
const router = express.Router();

router.patch("/post/:id",postAnswer);
router.patch("/delete/:id",deleteAnswer);

export  default router