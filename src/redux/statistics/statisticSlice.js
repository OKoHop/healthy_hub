import { createSlice } from '@reduxjs/toolkit';
import { getStats } from './statisticOperations';

const initialState = {
  stats: {},
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.
    addCase(getStats.fulfilled, (state, action) => {
      if (!action.payload) {
        state.stats = {
          totalCalories: 0,
          waterIntake: 0,
          weight: 0,
        };
      }
      state.stats = action.payload[0];
    });
  },
});

export const statsReducer = statsSlice.reducer;
