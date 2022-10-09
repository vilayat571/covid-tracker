import { configureStore } from "@reduxjs/toolkit";
import confirmedCountsReducer from "../reducers/confirmedCountsReducer";
import { useDispatch } from "react-redux";
import countriesReducer from "../reducers/countriesReducer";
import deathsReducer from "../reducers/deathsReducer";
import imgReducer from "../reducers/imgReducer";

export const store = configureStore({
  reducer: {
    confirmedCountsReducer: confirmedCountsReducer,
    countriesReducer: countriesReducer,
    deathsReducer: deathsReducer,
    imgReducer: imgReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
