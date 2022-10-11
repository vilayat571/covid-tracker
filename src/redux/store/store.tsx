import { configureStore } from "@reduxjs/toolkit";
import confirmedCountsReducer from "../reducers/confirmedCountsReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
