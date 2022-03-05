import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCyrptoList = createAsyncThunk("/", async (page) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  );
  return { data: response.data, page };
});

const initialState = {
  cryptoList: [],
  search: "",
  page: 1,
};

export const cyrptoSlice = createSlice({
  name: "cyrpto",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCyrptoList.fulfilled, (state, action) => {
      state.cryptoList = action.payload.data;
      state.page = action.payload.page;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = cyrptoSlice.actions;

export default cyrptoSlice.reducer;
