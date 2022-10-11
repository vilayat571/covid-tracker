import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IConfirmedReducer {
  loading: boolean;
  error: string | undefined | null;
  confirmedCounts: Array<any> | undefined;
}

const initialState: IConfirmedReducer = {
  loading: false,
  error: null,
  confirmedCounts: [],
};

export const getConfirmedCountsedCounts: AsyncThunk<
  any,
  string | undefined,
  {}
> = createAsyncThunk("/getConfirmedCounts/", async (query?: string) => {
  const country: string = query !== undefined ? query : "Azerbaijan";
  const url: string = `https://covid19.mathdro.id/api/countries/${country}/confirmed`;
  const res: Response = await fetch(url);
  const confirmedCounts: any = await res.json();
  return confirmedCounts;
});

const confirmedCountsReducer = createSlice({
  name: "confirmedCountsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConfirmedCountsedCounts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(getConfirmedCountsedCounts.fulfilled, (state, action) => {
        state.loading = false;
        state.confirmedCounts = action.payload;
      }),
      builder.addCase(getConfirmedCountsedCounts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default confirmedCountsReducer.reducer;
