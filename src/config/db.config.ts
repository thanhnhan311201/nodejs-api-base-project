import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDatabase = async () => {
  try {
    const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
    console.log(`⚡️[database]: Connecting to ${mongoDbUrl}...`);
    mongoose.Promise = global.Promise;

    // Connect to the database
    await mongoose.connect(mongoDbUrl);
    console.log("⚡️[database]: Successfully connected to the database!");
  } catch (error) {
    console.log(
      `⚡️[error]: ${error}\n⚡️[database]: Could not connect to the database. Exiting now...`
    );
    process.emit("SIGTERM");
  }
};

export default connectDatabase;
