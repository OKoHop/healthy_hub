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
  success: null,
};

const handleRegisterAndLogInFulfilled = (state, action) => {
  state.user = action.payload;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleRegisterRejected = (state, action) => {
  if (action.payload && action.payload.status === 409) {
    state.error = {
      type: 'register',
      message:
        'An account with this email already exists. Please try logging in or use a different email.',
    };
  } else {
    state.error = {
      type: 'register',
      message:
        'Something went wrong. Please check your data and try again.' ||
        action.payload?.message,
    };
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, handleRegisterAndLogInFulfilled)
      .addCase(register.rejected, handleRegisterRejected)
      .addCase(logIn.fulfilled, handleRegisterAndLogInFulfilled)
      .addCase(logIn.rejected, (state, action) => {
        state.error = { type: 'login', message: action.payload };
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.error = null;
        state.success = 'Password reset email sent successfully.';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = { type: 'forgot', message: action.payload };
        state.success = null;
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
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
