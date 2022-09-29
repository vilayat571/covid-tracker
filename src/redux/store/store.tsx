import { configureStore } from "@reduxjs/toolkit";
import themeSwitchReducer from "../reducers/themeSwitchReducer";

export const store = configureStore({
  reducer: {
    themeSwitchReducer: themeSwitchReducer,
  },
});
