import mongoose from "mongoose";

const url="mongodb+srv://arijit:arijit@cluster0.6iospyv.mongodb.net/"

export async function dbConnect(){
 try {
    await mongoose.connect(url)
    console.log("Mongodb Connected!");
    
 } catch (error) {
    console.log("Mongodb Not Connected",error)
 }

}