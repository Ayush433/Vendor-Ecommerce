import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authapi } from "./UserApi/authapi";

import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authapi.reducerPath]: authapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authapi.middleware]),
});
