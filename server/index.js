
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import questionsRouter from "./routes/questions.js"
import answerRouter from "./routes/answer.js"
const app = express();

app.use(express.json({extended:true}));      
app.use(express.urlencoded({ extended:true}))  
app.use(cors());                                           

const port =process.env.PORT || 5000

app.get("/",(req,res)=>{

    res.send("hello from browser")
})

 //routing
app.use('/user',userRouter);
app.use("/questions", questionsRouter)
app.use("/answer",answerRouter)

const MONGODB_URI = "mongodb+srv://subhadipkundu1000:Subhadip123@stack-overflow-clone.cp2gbw4.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})

.then(()=>{
app.listen(port, ()=>{
    console.log(`server is listening from ${port}`);
    console.log("mongoDB connection is successful");
})
})
.catch((error)=>{
    console.log("connection error", error.message)
    console.log("error");
})

