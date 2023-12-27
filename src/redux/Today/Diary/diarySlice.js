import { createSlice } from '@reduxjs/toolkit';
import { fetchFoodStatistics } from './operations';

const initialState = {
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoodStatistics.fulfilled, (state, action) => {
      console.log('action payload diary', action.payload);
      if (action.payload.breakfast !== undefined) {
        state.breakfast = action.payload.breakfast;
        state.lunch = action.payload.lunch;
        state.dinner = action.payload.dinner;
        state.snack = action.payload.snack;
      }
    });
  },
});

export const diaryReducer = diarySlice.reducer;
