import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  try {
    const response = await axios.get('api/user/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarData, thunkAPI) => {
    try {
      const response = await axios.patch('api/user/avatars', avatarData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(
        'updated avatarUrl: ',
        response.data,
        'this log is for checking data from the backend'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('api/user/update', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  'auth/updateGoal',
  async (data, thunkAPI) => {
    try {
      const currentGoal = { goal: data };
      const response = await axios.put('api/user/goal', currentGoal);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWeight = createAsyncThunk(
  'auth/updateWeight',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put('api/user/weight', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
