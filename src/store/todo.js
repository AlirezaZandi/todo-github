import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { description, id } = action.payload;
      const todo = {
        id,
        description,
      };
      return [...state, todo];
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export default slice.reducer;
export const { addTodo, removeTodo } = slice.actions;
