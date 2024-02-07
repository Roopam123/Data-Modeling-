import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user:{
            type:String,
            required:true,
            uniqe:true,
            lovercase:true
        },
        email:{
            type:String,
            required:true,
            uniqe:true,
            lovercase:true
        },
        password:{
            type:String,
            required:true,
            uniqe:true,
            lovercase:true
        },
    },
    { timestamps: true })

export const User = mongoose.model("User",userSchema)