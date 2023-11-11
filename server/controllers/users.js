import mongoose from "mongoose";
import Users from "../model/authModel.js";

export const getAllUsers = async (req, res) =>{
    
    try{
        const usersList = [];
        const users = await Users.find();

        users.forEach((user)=>{
                           usersList.push({_id:user._id,
                            name:user.name,
                            email: user.email,
                            about:user.about,
                            tags:user.tags,
                            joinedOn: user.joinedOn ,
                            color:user.color})
       

    }) 

    res.status(200).json(usersList);
}

    catch(error){
        console.log(error.message);
        res.status(400).json({message:error.message});
    }

}

export const updateProfile= async (req,res)=>{
    const {id:_id} = req.params;
    const {name, about, tags, color}= req.body


 if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("user unavailable...");
  }
    try{

        const updateProfile = await Users.findByIdAndUpdate(_id, {$set:{'name': name, 'about':about, 'tags':tags, color:color}},{new:true});
        res.status(200).json({updateProfile});
    }
    catch(error){
   res.status(405).json({message:error.message});
    }

}



