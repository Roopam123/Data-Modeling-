import mongoose from "mongoose";

const subTodo = mongoose.model(
    {
        content:{
            type:String,
            require:true
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }
    ,{ timestamps: true })

export const SubTodo = mongoose.model("SubTodo",subTodo)