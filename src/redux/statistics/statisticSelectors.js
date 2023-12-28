import { createSelector } from '@reduxjs/toolkit';

export const selectFoodIntake = (state) => state.stats.info.stats;

export const selectStatsInfo = (state) => state.stats.info.stats;
export const selectStatsIsLoading = (state) => state.stats.isLoading;
export const selectIntakeFoodPerDay = (state) => state.stats.info.data;
export const selectTotalCalories = (state) => state.stats.info.totalCalories;
export const selectWaterIntake = (state) => state.stats.info.waterIntake;
export const selectWeight = (state) => state.stats.info.weight;

const getProductsByMealType = (products, inputMealType) => {
  return products.filter(({ mealType }) => mealType === inputMealType);
};

export const selectStatsWater = createSelector(
  [selectWaterIntake],
  (waterIntake) => {
    if (!waterIntake || waterIntake.length === 0) {
      return 0;
    }

    return waterIntake[0].stats.waterIntake || 0;
  }
);

export const selectStatsWeight = createSelector([selectWeight], (weight) => {
  if (!weight || weight.length === 0) {
    return 0;
  }

  return weight || 0;
});

export const selectStatsTotalCalories = createSelector(
  [selectTotalCalories],
  (totalCalories) => {
    return totalCalories;
  }
);

export const selectConsumedProductsForBreakfast = createSelector(
  [selectIntakeFoodPerDay],
  (intakeFood) => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Breakfast');
  }
);

export const selectConsumedProductsForLunch = createSelector(
  [selectIntakeFoodPerDay],
  (intakeFood) => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Lunch');
  }
);

export const selectConsumedProductsForDinner = createSelector(
  [selectIntakeFoodPerDay],
  (intakeFood) => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Dinner');
  }
);

export const selectConsumedProductsForSnack = createSelector(
  [selectIntakeFoodPerDay],
  (intakeFood) => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Snack');
  }
);

const calculateSumMacronutrients = (products, inputMacronutrient) => {
  return products.reduce(
    (acc, product) => (acc += product[inputMacronutrient]),
    0
  );
};

export const selectConsumedCarbonohidratesForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  (products) => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  (products) => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  (products) => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForLunch = createSelector(
  [selectConsumedProductsForLunch],
  (products) => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForLunch = createSelector(
  [selectConsumedProductsForLunch],
  (products) => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForLunch = createSelector(
  [selectConsumedProductsForLunch],
  (products) => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForDinner = createSelector(
  [selectConsumedProductsForDinner],
  (products) => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForDinner = createSelector(
  [selectConsumedProductsForDinner],
  (products) => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForDinner = createSelector(
  [selectConsumedProductsForDinner],
  (products) => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForSnack = createSelector(
  [selectConsumedProductsForSnack],
  (products) => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForSnack = createSelector(
  [selectConsumedProductsForSnack],
  (products) => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForSnack = createSelector(
  [selectConsumedProductsForSnack],
  (products) => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesPerDay = createSelector(
  [selectIntakeFoodPerDay],
  (products) => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinPerDay = createSelector(
  [selectIntakeFoodPerDay],
  (products) => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatPerDay = createSelector(
  [selectIntakeFoodPerDay],
  (products) => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCaloriesPerDay = createSelector(
  [selectIntakeFoodPerDay],
  (products) => calculateSumMacronutrients(products, 'calories')
);

export const selectConsumedMacronutrientsPerDay = createSelector(
  [
    selectConsumedCarbonohidratesForBreakfast,
    selectConsumedProteinForBreakfast,
    selectConsumedFatForBreakfast,

    selectConsumedCarbonohidratesForLunch,
    selectConsumedProteinForLunch,
    selectConsumedFatForLunch,

    selectConsumedCarbonohidratesForDinner,
    selectConsumedProteinForDinner,
    selectConsumedFatForDinner,

    selectConsumedCarbonohidratesForSnack,
    selectConsumedProteinForSnack,
    selectConsumedFatForSnack,
  ],
  (bc, bp, bf, lc, lp, lf, dc, dp, df, sc, sp, sf) => {
    return {
      breakfast: { carbonohidrates: bc, protein: bp, fat: bf },
      lunch: { carbonohidrates: lc, protein: lp, fat: lf },
      dinner: { carbonohidrates: dc, protein: dp, fat: df },
      snack: { carbonohidrates: sc, protein: sp, fat: sf },
    };
  }
);
