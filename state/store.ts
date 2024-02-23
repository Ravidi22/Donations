import { configureStore } from "@reduxjs/toolkit";

import routeReducer from "./reducers/routeReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    route: routeReducer,
  },
});
