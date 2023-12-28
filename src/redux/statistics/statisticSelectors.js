import { createSelector } from '@reduxjs/toolkit';



export const selectIntakeFoodPerDay = state => state.stats.food;
export const selectTotalCalories= state => state.data['0'].stats.totalCalories;
export const selectWaterIntake= state => state.data['0'].stats.waterIntake;
export const selectWeight= state => state.data['0'].stats.weight;

const getProductsByMealType = (products, inputMealType) => {
  return products.filter(({ mealType }) => mealType === inputMealType);
};



export const selectConsumedProductsForBreakfast = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Breakfast');
  }
);

export const selectConsumedProductsForLunch = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Lunch');
  }
);

export const selectConsumedProductsForDinner = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => {
    if (!intakeFood || intakeFood.length === 0) {
      return [];
    }
    return getProductsByMealType(intakeFood, 'Dinner');
  }
);

export const selectConsumedProductsForSnack = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => {
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
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCarbonohidratesPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

export const selectConsumedProteinPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'protein')
);

export const selectConsumedFatPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectConsumedCaloriesPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'calories')
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
