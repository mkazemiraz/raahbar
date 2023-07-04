import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  filterQuery: string;
};

const state: InitialState = {
  filterQuery: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState: state,
  reducers: {
    setFilterQuery: (state, { payload }) => {
      state.filterQuery = payload.filterQuery;
    },
  },
});

export const { setFilterQuery } = globalSlice.actions;

export default globalSlice.reducer;
