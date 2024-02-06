import mongoose from "mongoose";

const todo = mongoose.Schema(
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
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        subtodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"SubTodo"
            }
        ]
    },
    { timestamps: true }
    )


export const Todo = mongoose.model("Todo",todo)