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
      return response.data.data[0].stats.foodIntake;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const delFoodIntake = createAsyncThunk(
  'user/delFood',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/api/user/food-intake/:id');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
