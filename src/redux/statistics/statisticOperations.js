import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
export const getStats = createAsyncThunk(
  'dairy/statistics',
  async (date, thunkAPI) => {
    const [startDate, endDate] = getStartAndEndDate(date);
    try {
      const { data } = await axios.get(`/api/user/statistics`, {
        params: {
          dateFrom: startDate,
          dateTo: endDate,
        },
      });
      console.log(data.stats)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// diaryOnMain
export const fetchGoalsConfirm = createAsyncThunk(
  'user/food-intake',
  async (data, thunkAPI) => {
    const { placeholderData, mealName } = data;

    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.post('/user/food-intake', {
        [mealName]: placeholderData,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DiaryPage
export const UpdateFood = createAsyncThunk(
  'user/food-intake/:id',
  async (data, thunkAPI) => {
    const { placeholderData, id } = data;

    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.put(
        `/user/food-intake/${id}`,
        placeholderData
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delFoodIntake = createAsyncThunk(
  'today/delFood',
  async (foodIntakeName, thunkAPI) => {
    try {
      const response = await axios.delete('/api/user/food-intake', {
        params: {
          type: foodIntakeName,
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
