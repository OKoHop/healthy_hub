import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://health-en-app.onrender.com';

// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODFiZTkxZTAyYzg3MmQ3NmM4ZTU1YSIsImlhdCI6MTcwMzAxMTU5MCwiZXhwIjoxNzAzNjE2MzkwfQ.f2eZLX_BmgydftLkQbnogR2s2R3RFY-0jQ-m7hkEWJU';

export const fetchData = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user/current');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
