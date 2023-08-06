
import Questions from "../model/questionModel.js"
import mongoose from "mongoose";

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

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const {userId, value } = req.body;
   
  console.log(_id,value,userId);
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("question unavailable...");
    }
  
    try {
      const question = await Questions.findById(_id);
      const upIndex = question.upVotes.findIndex((id) => id === String(userId));
      const downIndex = question.downVotes.findIndex((id) => id === String(userId));
  
      if (value === "upVote") {
        if (downIndex !== -1) {
          question.downVotes = question.downVotes.filter(
            (id) => id !== String(userId)
          );
        }
        if (upIndex === -1) {
          question.upVotes.push(userId);
        } else {
          question.upVotes = question.upVotes.filter((id) => id !== String(userId));
        }
      } else if (value === "downVote") {
        if (upIndex !== -1) {
          question.upVotes = question.upVotes.filter((id) => id !== String(userId));
        }
        if (downIndex === -1) {
          question.downVotes.push(userId);
        } else {
          question.downVotes = question.downVotes.filter(
            (id) => id !== String(userId)
          );
        }
      }
      await Questions.findByIdAndUpdate(_id, question);
      res.status(200).json({ message: "voted successfully..." });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  