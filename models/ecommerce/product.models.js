import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        productImage:{
            type:String
        },
        print:{
            type:Number,
            default:0,
        },
        stock:{
            type:Number,
            default:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

    }
    ,{ timestamps: true })

export const Products = mongoose.model("Product",productSchema)