import express, { Request, Response, NextFunction } from "express";

import todoRouter from "../todo/todo.routes";

import { BASE_URL_API } from "../../../config/general.config";

const apiRouter = express();

apiRouter.get("/", (req: Request, res: Response, next: NextFunction) =>
  res.json({
    all_todos: `${BASE_URL_API}/todo/todos`,
    add_todo: `${BASE_URL_API}/todo/todo`,
  })
);

apiRouter.use("/todo", todoRouter);

export default apiRouter;
