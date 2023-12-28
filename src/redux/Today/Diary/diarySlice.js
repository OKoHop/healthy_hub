import { createSlice } from '@reduxjs/toolkit';
import { fetchFoodStatistics } from './operations';

const initialState = {
  foodIntake: '',
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoodStatistics.fulfilled, (state, action) => {
      state.foodIntake = action.payload;
    });
  },
});

export const diaryReducer = diarySlice.reducer;
