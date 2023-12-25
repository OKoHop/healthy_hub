import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  updateGoal,
  updateUser,
  updateWeight,
} from './operations';

// const initialState = {
//   user: null,
// };

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState:{},
  extraReducers: (builder) =>
    builder
      .addCase(currentUser.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.user = action.payload.user;
      })
      .addCase(currentUser.rejected, handleRejected)
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
