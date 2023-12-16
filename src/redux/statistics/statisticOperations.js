import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://health-en-app.onrender.com/';

export const getStats = createAsyncThunk(
  'stats/getAll',
  async (time, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/user/statistics?period=${time}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );