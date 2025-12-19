import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
    title:{

        type:String,
        required:true
   
}

}, { timestamps: true })

export default mongoose.model("todo",todoSchema)

