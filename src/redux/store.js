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
import { nutrientsReducer } from './Today/Food/foodSlice';
import { userReducer } from './user/slice';

const dayliPersistConfig = {
  key: 'daily',
  storage,
  whitelist: ['waterIntake'],
};

const authPersistConfig = {
  key: 'auth', 
  storage,
  whitelist: ['user', 'isLoggedIn', 'token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    foods: foodsReducer,
    stats: statsReducer,
    daily: persistReducer(dayliPersistConfig, dailyReducer),
    water: persistReducer(dayliPersistConfig, waterIntakeReducer),
    nutrients: nutrientsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
