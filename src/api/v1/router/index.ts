import express from "express";

import todoRoutes from "../todo/todo.routes";

const router = express();

router.use("/todo", todoRoutes);

export default router;
