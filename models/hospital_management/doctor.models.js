import mongoose, { Mongoose } from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        salary:{
            tyep: String,
            required:true
        },
        qualifications:{
            type:String,
            required:true
        },
        exprienceInYears:{
            type: Number,
            default:0
        },
        worksInHospitals:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital"
            }
        ]
    }
    ,{ timestamps: true })

export const Doctor = mongoose.model("Doctor",doctorSchema)