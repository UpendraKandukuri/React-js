import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counterRedux',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice;
