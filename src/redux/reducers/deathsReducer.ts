import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  deathsCounts: {}[] | null | any;
  loading: boolean;
  error: undefined | string | null;
}

const initialState: IinitialState = {
  deathsCounts: [],
  loading: false,
  error: null,
};

export const getDeathsCounts = createAsyncThunk(
  "/getDeathsCounts/",
  async (query?: string) => {
    const country: string = query !== undefined ? query : "Azerbaijan";
    const url: string = `https://covid19.mathdro.id/api/countries/${country}/deaths`;
    const res: Response = await fetch(url);
    const deathsCounts:any = await res.json();
    return deathsCounts;
  }
);

const deathsReducer = createSlice({
  name: "deathsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDeathsCounts.pending, (state: IinitialState, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDeathsCounts.fulfilled,
      (state: IinitialState, action) => {
        state.loading = false;
        state.deathsCounts = action.payload;
      }
    );
    builder.addCase(
      getDeathsCounts.rejected,
      (state: IinitialState, action) => {
        state.error = action.error.message;
        state.loading = false;
      }
    );
  },
});

export default deathsReducer.reducer;
