// src/features/theme/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false, // Default to light mode
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
