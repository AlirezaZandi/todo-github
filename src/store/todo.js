import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  reducers: {
    addTodo: (state, action) => {
      const { description, id, badgesIds, moreInfo } = action.payload;
      const todo = {
        id,
        description,
        badges: badgesIds,
        moreInfo,
      };
      return [...state, todo];
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },

    addBadges: (state, action) => {
      const { id, badgeIds } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.badges = badgeIds;
    },

    removeBadges: (state, action) => {
      const { badgeId } = action.payload;
      state.forEach((todo) => {
        if (todo.badges) {
          if (todo.badges.includes(badgeId)) {
            todo.badges = todo.badges.filter((badge) => badge !== badgeId);
          }
        }
      });
    },
  },
});

export default slice.reducer;
export const { addTodo, removeTodo, addBadges, removeBadges } = slice.actions;
