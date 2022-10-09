import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IDLE {
  countries: Array<any>;
  loading: boolean;
  error: null | object;
}

const initialState: Required<IDLE> = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk("/fetchCountries/", async () => {
  const url = "https://covid19.mathdro.id/api/countries";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const countriesReducer = createSlice({
  name: "countriesReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state: IDLE, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCountries.fulfilled, (state: IDLE, action) => {
      state.loading = false;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state: IDLE, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default countriesReducer.reducer;
