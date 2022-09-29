import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  theme: boolean;
}

interface IAction {
  type: string;
  payload: boolean;
}

const initialState: IState = {
  theme: true,
};

const themeSwitchReducer = createSlice({
  name: "themeSwitchReducer",
  initialState,
  reducers: {
    changeTheme: (state: IState, action: IAction) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSwitchReducer.actions;
export default themeSwitchReducer.reducer;
