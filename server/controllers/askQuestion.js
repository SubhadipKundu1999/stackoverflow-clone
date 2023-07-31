
import Questions from "../model/questionModel.js"
export const askQuestion =async(req,res)=>{

    const postQuestionData = req.body;
   

    try{
        const  postQuestion = new Questions( {...postQuestionData,userId:req.userId}  ) ;
        await postQuestion.save();
        res.status(201).json("Posted a question successfully");
    }
    catch(error){
        console.log(error)
        res.status(409).json("Posted a question falied");
    }
    
}