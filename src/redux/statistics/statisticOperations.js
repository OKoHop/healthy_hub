import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getStats = createAsyncThunk(
  'stats/getAll',
  async (_, thunkAPI) => {
    try {
      const date = new Date();
      const { data } = await axios.get(`/api/user/statistics`, {
        params: {
          dateFrom: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
          dateTo: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
        },
      });
      console.log(data);
      return data.data;
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
