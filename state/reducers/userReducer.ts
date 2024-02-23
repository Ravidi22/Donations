import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const userSlice = createSlice({
  name: "route",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
