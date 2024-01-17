import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi from '../../Base';

// Fetch Function
const asyncGetUsers = createAsyncThunk(
  'asyncGet/Users',
  async (page: string, ThunkControl) => {
    try {
      const response = await BaseApi.get<any[]>(`/users?page=${page}`);
      return response.data;
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

export { asyncGetUsers };
