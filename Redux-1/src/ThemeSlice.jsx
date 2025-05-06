import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value === 'light'
        ? (state.value = 'dark')
        : (state.value = 'light');
    },
  },
});

export default themeSlice;

const authState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    login: (state, action) => {
      (state.isLoggedIn = true), (state.user = action.payload);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export { authSlice };
