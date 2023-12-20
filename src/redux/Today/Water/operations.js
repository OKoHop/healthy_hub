import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://health-en-app.onrender.com';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODFiZTkxZTAyYzg3MmQ3NmM4ZTU1YSIsImlhdCI6MTcwMzAxMTU5MCwiZXhwIjoxNzAzNjE2MzkwfQ.f2eZLX_BmgydftLkQbnogR2s2R3RFY-0jQ-m7hkEWJU';

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
