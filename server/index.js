
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/users.js";
import questionsRouter from "./routes/questions.js"
import answerRouter from "./routes/answer.js"
const app = express();
// 
app.use(express.json({extended:true}));      
app.use(express.urlencoded({ extended:true}))  
app.use(cors());  

dotenv.config();

const port =process.env.PORT || 5000
console.log("working");
app.get("/",(req,res)=>{
    res.send("hello from browser")
})

 //routing
app.use('/user',userRouter);
app.use("/questions", questionsRouter)
app.use("/answer",answerRouter)

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
app.listen(port, ()=>{
    console.log(`server is listening from ${port}`);
    console.log("mongoDB connection is successful");
})
})
.catch((error)=>{
    console.log("connection error: ", error.message)
    console.log("error");
})

