
import Questions from "../model/questionModel.js"
export const askQuestion = async(req,res)=>{

    const postQuestionData = req.body;

    try{
        const  postQuestion =await  new Questions( postQuestionData ) ;
        await postQuestion.save();
        res.status(201).json("Posted a question successfully");
    }
    catch(error){
        console.log(error.message);
        res.status(409).json("Posted a question falied");
    }
    
}



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

export const deleteQuestion=async(req,res)=>{
    const {id:id} = req.params;

    try{
        await Questions.findByIdAndRemove(id);
        res.status(200).json({message:"message Deleted Successfully"});
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:error.message})
    }
}