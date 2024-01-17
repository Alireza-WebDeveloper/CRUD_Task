import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  asyncCreateUser,
  asyncDeleteUser,
  asyncEditUser,
  asyncGetUsers,
} from './Action';
import { UserState } from '../../Types/User';
const initialState: UserState = {
  data: {},
  loading: true,
  error: '',
} as UserState;

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Users
    builder.addCase(asyncGetUsers.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(
      asyncGetUsers.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      }
    );

    builder.addCase(asyncGetUsers.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Create Users
    builder.addCase(asyncCreateUser.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(
      asyncCreateUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data.data = [...state.data.data, action.payload];
        state.error = '';
        toast.success('Create user successfully');
      }
    );
    builder.addCase(asyncCreateUser.rejected, (state, action: any) => {
      state.loading = false;
      toast.error('Failed To Get Users');
      state.error = action.payload;
    });
    // Delete
    builder.addCase(asyncDeleteUser.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(
      asyncDeleteUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        const newUsers = state.data.data.filter(
          (user) => user.id !== action.payload.id
        );
        state.data.data = newUsers;
        state.error = '';
        toast.success('Delete user successfully');
      }
    );
    builder.addCase(asyncDeleteUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
      toast.error('Failed To Delete User');
    });
    // Edit
    builder.addCase(asyncEditUser.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(
      asyncEditUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = '';
        const updatedData = state.data.data.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        });
        state.data.data = updatedData;
        toast.success('Edit user successfully');
      }
    );
    builder.addCase(asyncEditUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
      toast.error('Failed To Edit User');
    });
  },
});

export { asyncGetUsers, asyncCreateUser, asyncDeleteUser, asyncEditUser };

export default UsersSlice.reducer;
