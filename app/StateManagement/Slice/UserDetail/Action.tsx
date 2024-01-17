import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi from '../../Base';

// Fetch Function
const asyncGetUserDetail = createAsyncThunk(
  'asyncGet/User',
  async (id: string, ThunkControl) => {
    try {
      const response = await BaseApi.get<any[]>(`/users/${id}`);
      return response.data;
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

export { asyncGetUserDetail };
