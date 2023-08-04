import mongoose from "mongoose";


 export const  connect= async()=> {

 mongoose.set('strictQuery', true);

        return  mongoose.connect(
            process.env.MONGODB_URI, 
            {
             useNewUrlParser: true,
             useUnifiedTopology: true 
            }).catch((error)=>{error});
}