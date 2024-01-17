'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './StateManagement/Store';
import { asyncGetUsers } from './StateManagement/Slice/Users';
import UserGroup from './Components/User/UserGroup';
const HomePage = () => {
  const dispatch = useAppDispatch();
  const { data, loading: isLoadUsers } = useAppSelector((store) => store.users);

  // Request To Get Users
  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return (
    <section className="grid grid-cols-1 m-auto container p-2">
      {isLoadUsers ? 'loading...' : data ? <UserGroup users={data.data} /> : ''}
    </section>
  );
};

export default HomePage;
