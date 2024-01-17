import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi from '../../Base';

// Fetch Function
const asyncGetUsers = createAsyncThunk<any, void, { rejectValue: string }>(
  'asyncGet/Users',
  async (_, ThunkControl) => {
    try {
      const response = await BaseApi.get<any[]>('/users');
      return response.data;
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

export { asyncGetUsers };
