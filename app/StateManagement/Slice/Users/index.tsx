import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncGetUsers } from './Action';
import { UserState } from '../../Types/User';
const initialState: UserState = {
  data: {},
  loading: false,
  error: '',
} as UserState;

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(asyncGetUsers.pending, (state) => {
      state.loading = true;

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
      state.error = action.payload;
    });
  },
});

export { asyncGetUsers };

export default UsersSlice.reducer;
