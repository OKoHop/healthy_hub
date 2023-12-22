import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  forgotPassword,
} from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRegisterAndLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleRegisterRejected = (state, action) => {
  if (action.payload && action.payload.status === 409) {
    state.error =
      'An account with this email already exists. Please try logging in or use a different email.';
  } else {
    state.error =
      'Something went wrong. Please check your data and try again.' ||
      action.payload?.message;
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, handleRegisterAndLogInFulfilled)
      .addCase(register.rejected, handleRegisterRejected)
      .addCase(logIn.fulfilled, handleRegisterAndLogInFulfilled)
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
