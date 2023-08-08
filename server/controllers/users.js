import mongoose from "mongoose";
import Users from "../model/authModel.js";

export const getAllUsers = async (req, res) =>{
    
    try{
        const usersList = [];
        const users = await Users.find();
        // console.log(users);
        users.forEach((user)=>{
                           usersList.push({_id:user._id,
                            name:user.name,
                            email: user.email,
                            about:user.about,
                            tags:user.tags,
                            joinedOn: user.joinedOn })
       

    }) 
    // console.log(usersList) ;
    res.status(200).json(usersList);
}

    catch(error){
        console.log(error);
        res.status(400).json({message:error.message});
    }


    
}