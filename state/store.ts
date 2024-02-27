import { combineReducers, configureStore } from "@reduxjs/toolkit";

import routeReducer from "./reducers/routeReducer";
import userReducer from "./reducers/userReducer";
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userReducer,
  route: routeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
