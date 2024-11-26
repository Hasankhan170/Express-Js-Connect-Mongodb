import express from "express";
import { addTodo,getAllTodo,singleTodo,deleteTodo } from "../controllers/todos.control.js";

const router = express.Router()

router.post('/todo',addTodo)
router.get('/todos',getAllTodo)
router.get('/todo/:id',singleTodo)
router.delete('/todo/:id',deleteTodo)


export default router;