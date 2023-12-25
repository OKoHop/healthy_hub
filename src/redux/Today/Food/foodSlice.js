import { createSlice } from '@reduxjs/toolkit';
import { getDailyStatistics, getStatisticts } from './operations';

const initialState = {
  carbonohidrates: 0,
  protein: 0,
  fat: 0,
  dailyNutrients: {},
};

const nutrientsSlice = createSlice({
  name: 'nutrients',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStatisticts.fulfilled, (state, action) => {
        state.carbonohidrates = action.payload.nutrients.carbonohidrates;
        state.protein = action.payload.nutrients.protein;
        state.fat = action.payload.nutrients.fat;
      })
      .addCase(getDailyStatistics.fulfilled, (state, action) => {
        if (!action.payload) {
          state.dailyNutrients = {
            totalCalories: 0,
            totalCarbohidrates: 0,
            totalProtein: 0,
            totalFat: 0,
            waterIntake: 0,
          };
        }
        state.dailyNutrients = action.payload[0].stats;
      });
  },
});

export const nutrientsReducer = nutrientsSlice.reducer;
