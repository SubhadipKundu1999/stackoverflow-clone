import mongoose from "mongoose";


 export const connect=()=> {

 mongoose.set('strictQuery', true);

        return  mongoose.connect(
            process.env.MONGODB_URI, 
            {
             useNewUrlParser: true,
             useUnifiedTopology: true 
            });
}