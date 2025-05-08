import { createSlice } from '@reduxjs/toolkit';

const cart = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: cart,
  reducers: {
    addToCart: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index >= 0) {
        state[index].quantity += 1;
        state[index].price += action.payload.price;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    addQuantity: (state, action) => {
      console.log(action);
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(index);
      state[index].quantity += 1;
      state[index].price += action.payload.price;
    },
    removeQuantity: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state[index].quantity > 1) {
        state[index].quantity -= 1;
        state[index].price -= action.payload.price;
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export default cartSlice;
