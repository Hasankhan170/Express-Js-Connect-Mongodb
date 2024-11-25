import express from "express";
import { addTodo,getAllTodo } from "../controllers/todos.control.js";

const router = express.Router()

router.post('/todo',addTodo)
router.get('/todos',getAllTodo)


export default router;