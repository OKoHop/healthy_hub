import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateGoal, updateUser, updateWeight } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    bmr: null,
    water: null,
    nutrients: {
      carbohidrates: null,
      protein: null,
      fat: null,
    },
    token: null,
    avatarUrl: null,
  },
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, handleRejected)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateGoal.rejected, handleRejected)
      .addCase(updateWeight.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateWeight.rejected, handleRejected),
});

export const userReducer = userSlice.reducer;
