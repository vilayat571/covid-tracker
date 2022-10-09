import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  imgFile: string;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: Partial<IInitialState> = {
  imgFile: "",
  loading: false,
  error: null,
};

export const getImgFile = createAsyncThunk(
  "/fetchFile/",
  async (query?: string) => {
    const country = query ? query : "Azerbaijan";
    const baseUrl = `https://covid19.mathdro.id/api/countries/${country}/og`;
    return baseUrl;
  }
);

const imgReducer = createSlice({
  name: "imgReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImgFile.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getImgFile.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.imgFile = action.payload;
      }
    );
    builder.addCase(getImgFile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default imgReducer.reducer;
