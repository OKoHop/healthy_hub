import { createSelector } from '@reduxjs/toolkit';

export const selectBreakfast = (state) => state.diary.breakfast;

export const selectLunch = (state) => state.diary.lunch;

export const selectDinner = (state) => state.diary.dinner;

export const selectSnack = (state) => state.diary.snack;

//Breakfast selectors

export const selectBreakfastCarbonohidrates = createSelector(
  [selectBreakfast],
  (foods) => {
    let totalCarbonohidrates = 0;

    if (foods) {
      for (const food of foods) {
        totalCarbonohidrates += food.carbohidrates;
      }
    }

    return totalCarbonohidrates;
  }
);

export const selectBreakfastProtein = createSelector(
  [selectBreakfast],
  (foods) => {
    let totalProtein = 0;

    if (foods) {
      for (const food of foods) {
        totalProtein += food.protein;
      }
    }

    return totalProtein;
  }
);

export const selectBreakfastFat = createSelector([selectBreakfast], (foods) => {
  let totalFat = 0;

  if (foods) {
    for (const food of foods) {
      totalFat += food.fat;
    }
  }

  return totalFat;
});

//Lunch selectors
export const selectLunchCarbonohidrates = createSelector(
  [selectLunch],
  (foods) => {
    let totalCarbonohidrates = 0;

    if (foods) {
      for (const food of foods) {
        totalCarbonohidrates += food.carbohidrates;
      }
    }

    return totalCarbonohidrates;
  }
);

export const selectLunchProtein = createSelector([selectLunch], (foods) => {
  let totalProtein = 0;

  if (foods) {
    for (const food of foods) {
      totalProtein += food.protein;
    }
  }

  return totalProtein;
});

export const selectLunchFat = createSelector([selectLunch], (foods) => {
  let totalFat = 0;

  if (foods) {
    for (const food of foods) {
      totalFat += food.fat;
    }
  }

  return totalFat;
});

//Dinner selectors
export const selectDinnerCarbonohidrates = createSelector(
  [selectDinner],
  (foods) => {
    let totalCarbonohidrates = 0;

    if (foods) {
      for (const food of foods) {
        totalCarbonohidrates += food.carbohidrates;
      }
    }

    return totalCarbonohidrates;
  }
);

export const selectDinnerProtein = createSelector([selectDinner], (foods) => {
  let totalProtein = 0;

  if (foods) {
    for (const food of foods) {
      totalProtein += food.protein;
    }
  }

  return totalProtein;
});

export const selectDinnerFat = createSelector([selectDinner], (foods) => {
  let totalFat = 0;

  if (foods) {
    for (const food of foods) {
      totalFat += food.fat;
    }
  }

  return totalFat;
});

//Snack selectors
export const selectSnackCarbonohidrates = createSelector(
  [selectSnack],
  (foods) => {
    let totalCarbonohidrates = 0;

    if (foods) {
      for (const food of foods) {
        totalCarbonohidrates += food.carbohidrates;
      }
    }

    return totalCarbonohidrates;
  }
);

export const selectSnackProtein = createSelector([selectSnack], (foods) => {
  let totalProtein = 0;

  if (foods) {
    for (const food of foods) {
      totalProtein += food.protein;
    }
  }

  return totalProtein;
});

export const selectSnackFat = createSelector([selectSnack], (foods) => {
  let totalFat = 0;

  if (foods) {
    for (const food of foods) {
      totalFat += food.fat;
    }
  }

  return totalFat;
});
