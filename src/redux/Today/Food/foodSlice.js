  import { createSlice } from '@reduxjs/toolkit';
import { getDailyStatistics, getStatistics } from './operations';

const initialState = {
  carbonohidrates: 0,
  protein: 0,
  fat: 0,
  dailyNutrients: {},
  isLoading: false,
};

const nutrientsSlice = createSlice({
  name: 'nutrients',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.carbonohidrates = action.payload.nutrients.carbonohidrates;
        state.protein = action.payload.nutrients.protein;
        state.fat = action.payload.nutrients.fat;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDailyStatistics.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDailyStatistics.fulfilled, (state, action) => {
        console.log(action.payload);
        state.dailyNutrients = action.payload;
      })
      .addCase(getDailyStatistics.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const nutrientsReducer = nutrientsSlice.reducer;
