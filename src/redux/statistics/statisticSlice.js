import { createSlice } from '@reduxjs/toolkit';
import { getStats, getStatsForPeriod } from './statisticOperations';

const statsInitialState = {
  info: {},
  infoForPeriod: [],
  isLoading: false,
  error: null,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState: statsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
        state.error = null;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getStatsForPeriod.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatsForPeriod.fulfilled, (state, action) => {
        state.isLoading = false;
        state.infoForPeriod =
          action.payload.stats === null
            ? []
            : Array.isArray(action.payload)
            ? [...action.payload]
            : [action.payload];
        state.error = null;
      })
      .addCase(getStatsForPeriod.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const statsReducer = statsSlice.reducer;
