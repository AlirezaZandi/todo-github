import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const slice = createSlice({
  name: "todoStatus",
  initialState: [],
  reducers: {
    addTodoStatus: (state, action) => {
      const { name } = action.payload;
      const todoStatus = {
        id: v4(),
        name,
        todos: [],
      };
      return [...state, todoStatus];
    },

    removeTodoStatus: (state, action) => {
      const { id } = action.payload;
      return state.filter((todoStatus) => todoStatus.id !== id);
    },

    addTodoToStatus: (state, action) => {
      const { id, todoId } = action.payload;
      const todoStatus = state.find((todoStatus) => todoStatus.id === id);
      todoStatus.todos.push(todoId);
      return state;
    },

    removeTodoFromStatus: (state, action) => {
      const { id, todoId } = action.payload;
      const todoStatus = state.find((todoStatus) => todoStatus.id === id);
      todoStatus.todos = todoStatus.todos.filter((todo) => todo !== todoId);
      return state;
    },

    updateTodoStatusOrder: (state, action) => {
      const { newOrder } = action.payload;
      return newOrder;
    },

    UpdateTodoInStatusOrder: (state, action) => {
      const { newOrder, statusId } = action.payload;
      const todoStatus = state.find((todoStatus) => todoStatus.id === statusId);
      todoStatus.todos = newOrder;
      return state;
    },
  },
});

export default slice.reducer;
export const {
  addTodoStatus,
  removeTodoStatus,
  addTodoToStatus,
  removeTodoFromStatus,
  updateTodoStatusOrder,
  UpdateTodoInStatusOrder,
} = slice.actions;