import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import themeSlice, { authSlice } from './ThemeSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { toggleTheme } = themeSlice.actions;

export const { login, logout } = authSlice.actions;
