import express from "express";

import todoRouter from "../todo/todo.routes";

const apiRouter = express();

apiRouter.use("/todo", todoRouter);

export default apiRouter;
