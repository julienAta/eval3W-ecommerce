// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
