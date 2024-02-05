// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Attempt to load user info from localStorage or use initial default values
const savedUserInfo = localStorage.getItem("userInfo");
const initialState = savedUserInfo
  ? JSON.parse(savedUserInfo)
  : {
      firstName: "Guest",
      lastName: "",
      email: "",
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const { firstName, lastName, email } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      // After updating the state, save the new user info to localStorage
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
