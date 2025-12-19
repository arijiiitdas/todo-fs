import express from "express"

import { createTodo, deleteTodo, findAlltodo, findTodo, updateTodo } from "../controllers/todoControllers.js"

const todoRoute=express.Router()

todoRoute.post("/create",createTodo)
todoRoute.get("/getAll",findAlltodo)
todoRoute.delete("/delete/:id",deleteTodo)
todoRoute.get("/findTodo/:id",findTodo)
todoRoute.put("/update/:id",updateTodo)



export default todoRoute