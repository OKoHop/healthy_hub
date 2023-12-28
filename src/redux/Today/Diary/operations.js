import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const today = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()}`;

export const fetchFoodStatistics = createAsyncThunk(
  'today/foodStatistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/statistics', {
        params: {
          dateFrom: today,
          dateTo: today,
        },
      });
      console.log('foodIntake', response.data.stats);
      return response.data.stats.foodIntake;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const delFoodIntake = createAsyncThunk(
  'user/delFood',
  async (foodIntakeName, thunkAPI) => {
    try {
      const jsonData = { type: foodIntakeName };
      const response = await axios.delete('/api/user/food-intake', jsonData);
      console.log('delete food', response);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
