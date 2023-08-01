
import Questions from "../model/questionModel.js"
export const getAllQuestions =async(req,res)=>{
    try{
        const  questionList  = await  Questions.find();
        res.status(200).json(questionList);
    }
    catch(error){
        console.log(error)
        res.status(409).json({message:error.message});
    }
    
}