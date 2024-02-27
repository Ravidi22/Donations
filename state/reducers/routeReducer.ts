import { createSlice } from "@reduxjs/toolkit";
import { LocationType, LocationsList } from "../../types/LocationsUtils";

const initialState = {
  route: LocationsList,
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
export const route = (state) => state.route;

export default routeSlice.reducer;
