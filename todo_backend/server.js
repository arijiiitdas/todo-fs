import express from "express"
import { dbConnect } from "./src/config/dbConnect.js"
import todoRoute from "./src/routes/todoRoutes.js"
import cors from "cors"
const app= express()
const port =8001

dbConnect()

app.use(express.json())
app.use(cors())

app.use("/",todoRoute)



app.listen(port,()=>{
    console.log(`Port is working on ${port}`);
    
})
