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
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { waterIntakeReducer } from './Today/Water/waterSlice';

const dayliPersistConfig = {
  key: 'daily',
  storage,
  whitelist: ['waterIntake'],
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
    stats: statsReducer,
    daily: persistReducer(dayliPersistConfig, dailyReducer),
    water: persistReducer(dayliPersistConfig, waterIntakeReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
