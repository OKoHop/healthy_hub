import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function getStartAndEndDate(dateString) {
  if (dateString.length === 20) {
    const startDateString = dateString.slice(0, 10);
    const endDateString = dateString.slice(10, 20);
    return [startDateString, endDateString];
  } else if (dateString.length === 10) {
    return [dateString, dateString];
  } else {
    console.error('incorrect date format');
    return null;
  }
}

export const getStatistics = createAsyncThunk(
  'user/foodStatistics',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/api/user/current');
      console.log(data.user);
      return data.user;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDailyStatistics = createAsyncThunk(
  'user/dailyNutrients',
  async (_, thunkAPI) => {
    const [startDate, endDate] = getStartAndEndDate(date);
    try {
      const { data } = await axios.get('/api/user/statistics', {
          params: {
            dateFrom: startDate,
            dateTo: endDate,
          },
      });
/*       if (data.stats === null) {
        return {};
      } */
      console.log(data);
      return data.stats;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
