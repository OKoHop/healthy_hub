import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://health-en-app.onrender.com';

export const getStatisticts = createAsyncThunk(
  'user/foodStatistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/statistics');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
