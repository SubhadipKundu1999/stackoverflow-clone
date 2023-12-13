import Questions from "../model/questionModel.js";
import mongoose from "mongoose";
export const postAnswer = async (req, res) => {
  const { id: id } = req.params;
  let { noOfAnswer, answerBody, userAnswered, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Question not valid" });
  }

  // Assuming updateNoOfAnswer is synchronous, if not, use await appropriately
  updateNoOfAnswer(id, noOfAnswer);
   
  try {
  //   let myHeaders = new Headers({
  //       "apikey": "QUpHXk6DpE60IVivYIwt3wWmtb8Hs6m4"
  //   });
  //   answerBody= answerBody
  //   console.log(answerBody);
  //   let requestOptions = {
  //     method: 'POST',
  //     redirect: 'follow',
  //     headers: myHeaders,
  //     body:JSON.stringify(answerBody)
  //   };
  //   const response = await fetch("https://api.apilayer.com/bad_words?censor_character={censor_character}", requestOptions);

  //   if (!response.ok) {
  //     console.error(`API request failed with status: ${response.status}`);
  //     const errorBody = await response.text();
  //     console.error(`Error response body: ${errorBody}`);
  //     throw new Error(`API request failed with status: ${response.status}`);
  //   }

  //   const result = await response.json();
  //   answerBody = await result.censored_content;
  //  let resultt= answerBody[-10];
  // console.log(typeof(resultt));
  //   console.log(resultt);

    const updatedQuestion = await Questions.findByIdAndUpdate(id, { $addToSet: { 'answer': { answerBody, userAnswered, userId } } });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json("something went wrong");
  }
};

export const deleteAnswer=async (req,res)=>{
    const {id:id} = req.params;
  
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
        // console.log(error);
        res.status(500).json({message:"Something went wrong", error:error.message});
    
    }
}