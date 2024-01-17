import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncGetUsers } from './Action';
const initialState: any = {
  data: [],
  loading: false,
  error: '',
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(asyncGetUsers.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = '';
    });
    // Fulfilled
    builder.addCase(
      asyncGetUsers.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      }
    );
    // Rejected
    builder.addCase(asyncGetUsers.rejected, (state, action: any) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export { asyncGetUsers };

export default UsersSlice.reducer;
