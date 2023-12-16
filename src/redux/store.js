import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { foodsReducer } from './foods/foodsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
  },
});
