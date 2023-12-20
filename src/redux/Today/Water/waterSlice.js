import { createSlice } from '@reduxjs/toolkit';
import { delWaterIntake, saveWaterIntake } from './operations';

const initialState = {
  waterIntake: 0,
};

const waterIntakeSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveWaterIntake.fulfilled, (state, action) => {
        state.waterIntake = action.payload.waterIntake;
      })
      .addCase(delWaterIntake.fulfilled, (state, action) => {
        state.waterIntake = action.payload.waterIntake;
      });
  },
});

export const waterIntakeReducer = waterIntakeSlice.reducer;
