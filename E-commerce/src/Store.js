import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import paymentSlice from './PaymentSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    payment: paymentSlice.reducer,
  },
});

export const { addToCart, removeFromCart, addQuantity, removeQuantity } =
  cartSlice.actions;

export const { addAmount, procedToPay, emptyPrice } = paymentSlice.actions;

export default store;
