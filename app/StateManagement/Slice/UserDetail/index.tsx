import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { asyncGetUserDetail } from './Action';

const initialState: any = {
  data: {},
  loading: true,
  error: '',
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Users
    builder.addCase(asyncGetUserDetail.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(
      asyncGetUserDetail.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      }
    );

    builder.addCase(asyncGetUserDetail.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
      toast.error('Failed To Get User');
    });
  },
});

export { asyncGetUserDetail };

export default UsersSlice.reducer;
