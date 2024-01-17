import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const saveWaterIntake = createAsyncThunk(
  'user/addWater',
  async (data, thunkAPI) => {
    try {
      const jsonData = { waterIntake: data };
      const response = await axios.post('/api/user/water-intake', jsonData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const delWaterIntake = createAsyncThunk(
  'user/delWater',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/api/user/water-intake');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
