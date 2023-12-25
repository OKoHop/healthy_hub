import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarData, thunkAPI) => {
    try {
      const response = await axios.patch('api/user/avatars', avatarData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });

      console.log();
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

      console.log();
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

      console.log();
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

      console.log();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
