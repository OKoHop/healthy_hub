import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/';

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