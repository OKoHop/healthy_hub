import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from '../Food/operations';

const initialState = {
  calories: null,
  water: '',
};

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStatistics.fulfilled, (state, action) => {
      state.calories = action.payload.bmr;
      state.water = action.payload.water;
    });
  },
});

export const dailyReducer = dailySlice.reducer;
