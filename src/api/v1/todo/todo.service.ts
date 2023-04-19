import todoModel from "./todo.model";
import { ITodoModel } from "../../../config/interfaces/model.interface.config";

namespace todoService {
  export const getAllTodos = async () => {
    return await todoModel.find();
  };

  export const addTodo = async (todoName: string) => {
    const todo = new todoModel({
      name: todoName,
      status: "pending",
    });
    return await todo.save();
  };
}

export default todoService;
