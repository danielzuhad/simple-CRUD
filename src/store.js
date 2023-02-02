import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import usersReducer from "./redux/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
