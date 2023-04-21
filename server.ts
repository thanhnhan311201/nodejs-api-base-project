import dotenv from "dotenv";
dotenv.config();

import httpServer from "./src/app";
import connectDatabase from "./src/configs/db.config";

import { serverLogger } from "./src/utils/logger.util";

const port = process.env.PORT || 8080;

httpServer.listen(port, () => {
  serverLogger(`Server is running at http://localhost:${port}`);
});

connectDatabase();

// Close the server and exit the process when a termination signal is received
process.on("SIGTERM", () => {
  httpServer.close(() => {
    serverLogger("Server stopped!");
    process.exit();
  });
});
