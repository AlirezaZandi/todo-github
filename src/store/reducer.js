import { combineReducers } from "redux";
import todoStatusReducer from "./todoStatus";
import todoReducer from "./todo";

export default combineReducers({
  todoStatus: todoStatusReducer,
  todo: todoReducer,
});
