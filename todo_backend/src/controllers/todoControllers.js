import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const existing = await todoSchema.findOne({
            title: title
        })

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Todo Already Exist"
            })

        }

        const data = await todoSchema.create({ title })

        return res.status(201).json({
            success: true,
            message: "Todo Created Successfully"
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Todo Not Created"
        })
    }
}

export const findAlltodo = async (req, res) => {
    try {
        const data = await todoSchema.find({})

        res.status(200).json({
            success: true,
            message: "Todo Fetched!",
            data
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Todo Not Fetched!"
        })

    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const data = await todoSchema.findByIdAndDelete({
            _id: todoId
        })
        if (data) {
            return res.status(200).json({
                success: true,
                message: "Todo Deleted!",
                data
            })
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Todo Not Deleted!"
        })

    }
}

export const updateTodo = async (req, res) => {
    try {
        const { title } = req.body
        const todoId = req.params.id
        const data = await todoSchema.findById({
            _id: todoId,
        })
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Todo Not found!"
            })
        }
        const existing = await todoSchema.findOne({
            title: title
        })
        if (existing) {
            return res.status(200).json({
                success: true,
                message: "Todo already Exising"
            })
        }
        data.title = title
        await data.save()

        return res.status(202).json({
            success:true,
            message:"Todo Updated!",
            data
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Todo Not Found"
        })

    }
}

export const findTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const data = await todoSchema.findOne({
            _id: todoId
        })
        return res.status(200).json({
            success: true,
            message: "Todo Found!",
            data:data
        }

        )
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Todo not Found!"
        }

        )
    }
}
