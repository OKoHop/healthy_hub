import { createSelector } from '@reduxjs/toolkit';

export const carbonohidrates = (state) => state.nutrients.carbonohidrates;
export const protein = (state) => state.nutrients.protein;
export const fat = (state) => state.nutrients.fat;
export const dailyCal = (state) => state.nutrients.dailyNutrients.totalCalories;
export const totalCarbohidrates = (state) =>
  state.nutrients.dailyNutrients.totalCarbohidrates;
export const totalProt = (state) => state.nutrients.dailyNutrients.totalProtein;
export const totalFat = (state) => state.nutrients.dailyNutrients.totalFat;
export const dailyWater = (state) => state.nutrients.dailyNutrients.waterIntake;
export const selectBreakfastCarb = (state) =>
  state.nutrients.dailyNutrients.foodIntake.breakfast;

export const selectCarbonohidrates = createSelector(
  [totalCarbohidrates],
  (totalCarb) => {
    if (!totalCarb) {
      return 0;
    }
    return totalCarb;
  }
);

export const takeCarbonohidrates = createSelector(
  [selectBreakfastCarb],
  (breakfastCarb) => {
    let totalBreakfastCarb = 0;
    if (!breakfastCarb) {
      return 0;
    }
    breakfastCarb.map((carb) => (totalBreakfastCarb += carb.carbohidrates));

    return totalBreakfastCarb;
  }
);
