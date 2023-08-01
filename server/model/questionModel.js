import mongoose from "mongoose"

const questionsSchema = mongoose.Schema(

    {
    
        questionTitle:{type:String, required:"Question must have a title"},
        questionBody:{type:String, required:"Question must have a Body"},
        questionTags: {type:[String], required:"Question must have at least one tag"},
       
        noOfAnswer: {type:Number,default:0},
        upVotes:   {type:[String], default:[]},
        downVotes: {type:[String], default:[]},
        
        userId:{type:String},
        userPosted:{type:String, required:"Question must have an author"},
        askedOn: {type:Date, default:Date.now} ,
        
        answer:[{
          answerBody:String,
          userAnswered:String,
          answerOn:{type:Date, default:Date.now} ,
          userId:String
        }]
      }

)

export default mongoose.model("Question",questionsSchema);