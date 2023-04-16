import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;
