import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
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
  'user/updateGoal',
  async (data, thunkAPI) => {
    const currentGoal = { goal: data };
    try {
      const response = await axios.put('api/user/goal', currentGoal);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWeight = createAsyncThunk(
  'user/updateWeight',
  async (data, thunkAPI) => {
    const currentWeight = { weight: Number(data) };
    try {
      const response = await axios.post('api/user/weight', currentWeight);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
