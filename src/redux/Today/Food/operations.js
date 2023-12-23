import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://health-en-app.onrender.com';

export const getStatisticts = createAsyncThunk(
  'user/foodStatistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDailyStatistics = createAsyncThunk(
  'user/dailyNutrients',
  async (_, thunkAPI) => {
    try {
      const date = new Date();

      const { data } = await axios.get('/api/user/statistics', {
        params: {
          dateFrom: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
          dateTo: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
        },
      });
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
