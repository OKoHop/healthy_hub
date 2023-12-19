import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://health-en-app.onrender.com';

export const fetchData = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/statistics');
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
