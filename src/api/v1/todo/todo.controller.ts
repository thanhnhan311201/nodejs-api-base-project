import type { RequestHandler } from "express";
import createHttpError, { CreateHttpError } from "http-errors";

import todoService from "./todo.service";

namespace todoController {
  export const getAllTodos: RequestHandler = async (req, res, next) => {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json({
        status: "success",
        code: "200",
        message: "Get all todos successfully!",
        todos: todos,
      });
    } catch (error: any) {
      if (!error.status) {
        return next(createHttpError.InternalServerError);
      }
      next(error);
    }
  };

  export const addTodo: RequestHandler = async (req, res, next) => {
    try {
      const todoName = req.body.name;
      const todo = await todoService.addTodo(todoName);
      res.status(201).json({
        status: "success",
        code: "201",
        message: "Add new todo successfully!",
        todo: todo,
      });
    } catch (error: any) {
      if (!error.status) {
        return next(createHttpError.InternalServerError);
      }
      next(error);
    }
  };
}

export default todoController;
