import { createSlice } from "@reduxjs/toolkit";
import authorsInfo from "./Authors.json";

const authorSlice = createSlice({
  name: "authors",
  initialState: authorsInfo,
  reducers: {
    updateAuthor: (state, action) => {
      state[action.payload.index] = action.payload.updatedData;
    },
  },
});

export default authorSlice;
