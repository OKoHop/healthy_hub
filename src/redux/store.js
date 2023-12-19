import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { foodsReducer } from './foods/foodsSlice';
import { statsReducer } from './statistics/statisticSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
    stats: statsReducer,
  },
});
