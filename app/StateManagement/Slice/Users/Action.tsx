import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi from '../../Base';
import { InitialUserCreateForm } from '@/app/Components/Form/UserCreateForm';

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

const asyncCreateUser = createAsyncThunk(
  'asyncCreate/Users',
  async (data: InitialUserCreateForm, ThunkControl) => {
    try {
      const response = await BaseApi.post<any[]>(`/users`, data);
      return response.data;
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

const asyncDeleteUser = createAsyncThunk(
  'asyncDelete/Users',
  async (userId: any, ThunkControl) => {
    try {
      await BaseApi.delete<any[]>(`/users/${userId}`);
      return { id: userId };
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

const asyncEditUser = createAsyncThunk(
  'asyncEdit/Users',
  async ({ userId, ...data }: { userId: any }, ThunkControl) => {
    try {
      const response = await BaseApi.patch<any[]>(`/users/${userId}`, data);
      return { id: userId, ...response.data };
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

export { asyncGetUsers, asyncCreateUser, asyncDeleteUser, asyncEditUser };
