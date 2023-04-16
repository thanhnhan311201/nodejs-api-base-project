import express from "express";

import todoController from "./todo.controller";

const todoRouter = express.Router();

todoRouter.get("/todos", todoController.getAllTodos);

todoRouter.post("/todo", todoController.addTodo);

export default todoRouter;
