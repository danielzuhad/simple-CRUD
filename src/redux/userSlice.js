import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "testw",
    email: "testtt",
  },
  {
    id: 2,
    name: "testw",
    email: "testtt",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
});

export default userSlice.reducer;
