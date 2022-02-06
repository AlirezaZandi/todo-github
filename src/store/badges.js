import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "badges",
  initialState: localStorage.getItem("badges")
    ? JSON.parse(localStorage.getItem("badges"))
    : [],
  reducers: {
    addBadge: (state, action) => {
      const { description, id, color } = action.payload;
      const badge = {
        id,
        description,
        color,
      };
      return [...state, badge];
    },

    removeBadge: (state, action) => {
      const { id } = action.payload;
      return state.filter((badge) => badge.id !== id);
    },
  },
});

export default slice.reducer;
export const { addBadge, removeBadge } = slice.actions;
