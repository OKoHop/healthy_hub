import { createSlice } from '@reduxjs/toolkit';
import {
  updateGoal,
  updateUser,
  updateWeight,
} from './operations';


const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState:{},
  extraReducers: (builder) =>
    builder
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
