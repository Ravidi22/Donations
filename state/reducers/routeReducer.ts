import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: [],
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.route.push(action.payload);
    },
    removeAddress: (state, action) => {
      const addressIdToRemove = action.payload;
      state.route = state.route.filter(
        (address) => address.id !== addressIdToRemove
      );
    },
  },
});

export const { addAddress, removeAddress } = routeSlice.actions;

export default routeSlice.reducer;
