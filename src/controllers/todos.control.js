import Todos from "../models/todos.model.js"


const addTodo = (req,res)=>{
    const {title,description} = req.body;

    if(!title || !description){
        res.status(400).json({
            massage : "title and description are required"
        })
        return
    }

    const todo = Todos.create({
        title,
        description
    })
    res.status(201).json({
        massage : "todo added successfully",
        data : todo
    })
}

export {addTodo}