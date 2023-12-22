import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const updateAvatar = createAsyncThunk(
    'auth/updateAvatar',
    async (avatarData, thunkAPI) => {
      try {
        const response = await axios.patch('/users/avatars', avatarData, {
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
        const response = await axios.patch('/users/update', data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );