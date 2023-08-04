import Questions from "../model/questionModel.js";
import mongoose from "mongoose";


export const postAnswer= async (req,res)=>{
    const {id:id} = req.params;
    const {noOfAnswer, answerBody, userAnswered,userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({message:"Question not valid"});
    }
    updateNoOfAnswer(id,noOfAnswer);
    try{
        const updatedQuestion = await Questions.findByIdAndUpdate(id,{$addToSet:{'answer':{answerBody, userAnswered, userId}}} );
       res.status(200).json(updatedQuestion); 

     }
     catch(error){
        console.log(error);
        res.status(500).json("something went wrong");

    }
}


export const deleteAnswer=async (req,res)=>{
    const {id:id} = req.params;
    console.log(id);
    const {answerId, noOfAnswer }= req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({message:"Question not valid"});
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        res.status(404).json({message:"Answer is not valid"});
    }
    updateNoOfAnswer(id,noOfAnswer-1);
    try{
      await Questions.findByIdAndUpdate(id,{ $pull:{'answer':{_id:answerId}}} );
       res.status(200).json("answer deleted successfully"); 

     }
     catch(error){
        console.log(error);
        res.status(500).json("something went wrong");

    }

}

 const updateNoOfAnswer = async (id, noOfAnswer)=>
{
    try{
        await Questions.findByIdAndUpdate(id, {$set: {'noOfAnswer': noOfAnswer}});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong", error:error.message});
    
    }
}