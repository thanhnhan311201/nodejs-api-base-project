import express from "express";

import todoController from "./todo.controller";

const todoRoutes = express.Router();

todoRoutes.get("/todos", todoController.getAllTodos);

todoRoutes.post("/todo", todoController.addTodo);

export default todoRoutes;
