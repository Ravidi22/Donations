import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

const initialState: User = {
  name: "רביד רפאלוב",
  id: 325310902,
  organization: "אירית עיצובים",
  partners: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPartner: (state, action) => {
      state.partners.push(action.payload);
    },
    removePartner: (state, action) => {
      const addressIdToRemove = action.payload;
      state.partners = state.partners.filter(
        (user) => user.id !== addressIdToRemove
      );
    },
  },
});

export const { addPartner, removePartner } = userSlice.actions;
export const user = (state) => state.user;
export const userPartners = (state) => state.user.partners;

export default userSlice.reducer;
