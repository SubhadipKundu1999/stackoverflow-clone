import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const userSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true , unique:true},
        password:{type:String, required:true},
        about:{type:String },
        tags:{type:[String]},
        joinedOn:{type:Date, default:Date.now},
        color:{type:String, default:"#009dff"}
        
    }
)

export default mongoose.model("User", userSchema)