import dotenv from "dotenv";
dotenv.config();

import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { createStream } from "rotating-file-stream";
import { createServer } from "http";
import bodyParser from "body-parser";

import connectDatabase from "./config/db.config";
import apiRouter from "./api/v1/router";

connectDatabase();

const isProduction = process.env.NODE_ENV === "production";

// create http server
const app: Express = express();
const httpServer = createServer(app);

// add ultil middleware
const accessLogStream = createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});
app.use(
  isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
);
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// add body-parser
app.use(bodyParser.json());

// add request response handler
app.use("/api", apiRouter);
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Welcome to my world!" });
});
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Welcome to my world!" });
});

// add error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

export default httpServer;
