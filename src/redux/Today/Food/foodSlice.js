import { createSlice } from '@reduxjs/toolkit';
import { getStatisticts } from './operations';

const initialState = {
  carbonohidrates: 0,
  protein: 0,
  fat: 0,
};

const nutrientsSlice = createSlice({
  name: 'nutrients',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStatisticts.fulfilled, (state, action) => {
      state.carbonohidrates = action.payload.nutrients.carbonohidrates;
      state.protein = action.payload.nutrients.protein;
      state.fat = action.payload.nutrients.fat;
    });
  },
});

export const nutrientsReducer = nutrientsSlice.reducer;
