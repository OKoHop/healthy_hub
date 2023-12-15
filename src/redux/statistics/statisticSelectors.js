import { createSelector } from '@reduxjs/toolkit';

const getProductsByMealType = (products, inputMealType) => {
  return products.filter(({ mealType }) => mealType === inputMealType);
};

// повертає масив споживання їжі за день
export const selectIntakeFoodPerDay = state => state.stats.info.food;

// повертає масив продуктів спожитих на сніданок
export const selectProductsForBreakfast = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Breakfast')
);

const calculateSumMacronutrients = (products, inputMacronutrient) => {
  return products.reduce(
    (acc, product) => (acc += product[inputMacronutrient]),
    0
  );
};

// повертає к-сть спожитих вугеводів на сніданок (число)
export const selectCarbonohidratesForBreakfast = createSelector(
    [selectProductsForBreakfast],
    products => calculateSumMacronutrients(products, 'carbohydrate')
  );

// повертає к-сть спожитих білків на сніданок (число)
export const selectConsumedProteinForBreakfast = createSelector(
  [selectProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на сніданок (число)
export const selectConsumedFatForBreakfast = createSelector(
  [selectProductsForBreakfast],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає масив продуктів спожитих на обід
export const selectProductsForLunch = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Lunch')
);

// повертає к-сть спожитих вугеводів на обід (число)
export const selectConsumedCarbonohidratesForLunch = createSelector(
  [selectProductsForLunch],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на обід (число)
export const selectConsumedProteinForLunch = createSelector(
  [selectProductsForLunch],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на обід (число)
export const selectConsumedFatForLunch = createSelector(
  [selectProductsForLunch],
  products => calculateSumMacronutrients(products, 'fat')
);

// повертає масив продуктів спожитих на вечерю
export const selectConsumedProductsForDinner = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Dinner')
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

// повертає масив продуктів спожитих на перекус
export const selectProductsForSnack = createSelector(
  [selectIntakeFoodPerDay],
  intakeFood => getProductsByMealType(intakeFood, 'Snack')
);

// повертає к-сть спожитих вугеводів на перекус (число)
export const selectConsumedCarbonohidratesForSnack = createSelector(
  [selectProductsForSnack],
  products => calculateSumMacronutrients(products, 'carbohydrate')
);

// повертає к-сть спожитих білків на перекус (число)
export const selectConsumedProteinForSnack = createSelector(
  [selectProductsForSnack],
  products => calculateSumMacronutrients(products, 'protein')
);

// повертає к-сть спожитих жирів на перекус (число)
export const selectConsumedFatForSnack = createSelector(
  [selectProductsForSnack],
  products => calculateSumMacronutrients(products, 'fat')
);

export const selectMacronutrientsPerDay = createSelector(
    [
      selectCarbonohidratesForBreakfast,
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
    });