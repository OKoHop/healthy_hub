import { createSlice } from '@reduxjs/toolkit';
import { addFood, updateFood, deleteFood } from './foodsOperations';

const foodsSlice = createSlice({
  name: 'foods',
  initialState: {
    foods: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(addFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.foods.push(action.payload);
      })
      .addCase(addFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.foods.findIndex(
          (food) => food._id === action.payload._id
        );
        state.foods.splice(index, 1, action.payload);
      })
      .addCase(updateFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const foodId = action.meta.arg.foodId;
        const index = state.foods.findIndex((food) => food._id === foodId);
        if (index !== -1) {
          state.foods.splice(index, 1);
        }
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const foodsReducer = foodsSlice.reducer;
