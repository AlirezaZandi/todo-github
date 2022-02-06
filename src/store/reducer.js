import { combineReducers } from "redux";
import todoStatusReducer from "./todoStatus";
import todoReducer from "./todo";
import badgeReducer from "./badges";

export default combineReducers({
  todoStatus: todoStatusReducer,
  todo: todoReducer,
  badge: badgeReducer,
});
