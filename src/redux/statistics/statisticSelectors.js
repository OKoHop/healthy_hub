import { createSelector } from '@reduxjs/toolkit';

// повертає загальну статистику (об'єкт)
export const selectStatsInfo = state => state.stats.info;

// повертає булеве значення загрузки з бекенда
export const selectStatsIsLoading = state => state.stats.isLoading;

// повертає масив споживання по їжі за день
export const selectIntakeFoodPerDay = state => state.stats.info.food;

// // повертає к-сть спожитої води за день (число)
// export const selectStatsConsumedWaterPerDay = createSelector(
//   [selectStatsInfo],
//   stats => {
//     const keys = Object.keys(stats);
//     for (const key of keys) {
//       if (key === 'water') {
//         if (stats[key].length === 0) return 0;
//         for (const entry of stats[key]) {
//           return entry.water;
//         }
//       }
//     }
//   }
// );

const getProductsByMealType = (products, inputMealType) => {
  return products.filter(({ mealType }) => mealType === inputMealType);
};

// повертає масив продуктів спожитих на сніданок
// export const selectConsumedProductsForBreakfast = createSelector(
//   [selectIntakeFoodPerDay],
//   intakeFood => getProductsByMealType(intakeFood, 'Breakfast')
// );

export const selectConsumedProductsForBreakfast = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => {
    if (!intakeFood || intakeFood.length === 0) {
      return []; // або інше значення за замовчуванням, якщо intakeFood порожній чи не визначений
    }

    return getProductsByMealType(intakeFood, 'Breakfast');
  }
);

// повертає масив продуктів спожитих на обід
export const selectConsumedProductsForLunch = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Lunch')
);

// повертає масив продуктів спожитих на вечерю
export const selectConsumedProductsForDinner = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Dinner')
);

// повертає масив продуктів спожитих на перекус
export const selectConsumedProductsForSnack = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Snack')
);

const calculateSumMacronutrients = (products, inputMacronutrient) => {
  return products.reduce(
    (acc, product) => (acc += product[inputMacronutrient]),
    0
  );
};

// повертає к-сть спожитих вугеводів на сніданок (число)
export const selectConsumedCarbonohidratesForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на сніданок (число)
export const selectConsumedProteinForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на сніданок (число)
export const selectConsumedFatForBreakfast = createSelector(
  [selectConsumedProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає к-сть спожитих вугеводів на обід (число)
export const selectConsumedCarbonohidratesForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на обід (число)
export const selectConsumedProteinForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на обід (число)
export const selectConsumedFatForLunch = createSelector(
  [selectConsumedProductsForLunch],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає к-сть спожитих вугеводів на вечерю (число)
export const selectConsumedCarbonohidratesForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на вечерю (число)
export const selectConsumedProteinForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на вечерю (число)
export const selectConsumedFatForDinner = createSelector(
  [selectConsumedProductsForDinner],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає к-сть спожитих вугеводів на перекус (число)
export const selectConsumedCarbonohidratesForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на перекус (число)
export const selectConsumedProteinForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на перекус (число)
export const selectConsumedFatForSnack = createSelector(
  [selectConsumedProductsForSnack],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає к-сть спожитих вуглеводів за день (число)
export const selectConsumedCarbonohidratesPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків за день (число)
export const selectConsumedProteinPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів за день (число)
export const selectConsumedFatPerDay = createSelector(
  [selectIntakeFoodPerDay],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає к-сть спожитих жирів за день (число)
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
