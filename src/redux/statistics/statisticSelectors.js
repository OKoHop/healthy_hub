export const selectFoodIntake = (state) => state.stats.info.stats;
export const selectInfo = (state) => state.stats.infoForPeriod;
export const selectLoading = (state) => state.stats.isLoading;
export const selectWater = (state) => state.stats.info.stats?.waterIntake;
