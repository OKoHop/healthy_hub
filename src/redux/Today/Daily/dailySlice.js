import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const initialState = {
  calories: '',
  water: '',
};

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.calories = action.payload;
      state.water = action.payload;
    });
  },
});

export const dailyReducer = dailySlice.reducer;
