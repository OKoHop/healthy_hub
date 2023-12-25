import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const fetchData = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/current');
      console.log(response.data);
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
