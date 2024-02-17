import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    addToRoute: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromRoute: (state, action) => {
      const addressIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== addressIdToRemove);
    },
  },
});

export const { addToRoute, removeFromRoute } = routeSlice.actions;

export default routeSlice.reducer;
