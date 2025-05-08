import { createSlice } from '@reduxjs/toolkit';

const totalPrice = [];

const paymentSlice = createSlice({
  name: 'payment',
  initialState: totalPrice,
  reducers: {
    addAmount: (state, action) => {
      state.pop();
      state.push(action.payload);
      console.log(state);
    },
    emptyPrice: (state) => {
      state.pop();
    },
    procedToPay: (state, action) => {
      return state.filter((price) => price.id !== action.payload);
    },
  },
});

export default paymentSlice;
