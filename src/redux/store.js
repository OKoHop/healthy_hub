import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { foodsReducer } from './foods/foodsSlice';
import { statsReducer } from './statistics/statisticSlice';
import { dailyReducer } from './Today/Daily/dailySlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
    stats: statsReducer,
    daily: dailyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
