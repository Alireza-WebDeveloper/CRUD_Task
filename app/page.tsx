'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './StateManagement/Store';
import { asyncGetUsers } from './StateManagement/Slice/Users';
import UserGroup from './Components/User/UserGroup';
import { useSearchParams } from 'next/navigation';
import Pagination from './Components/Ui/Pagination';
const HomePage = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get('page') || String(1);
  const { data, loading: isLoadUsers } = useAppSelector((store) => store.users);

  // Request To Get Users
  useEffect(() => {
    dispatch(asyncGetUsers(queryPage));
  }, [queryPage, dispatch]);

  return (
    <section className="grid grid-cols-1 m-auto container p-2">
      {isLoadUsers ? (
        'loading...'
      ) : data ? (
        <>
          <UserGroup users={data.data} />
          <Pagination
            query="page"
            initialPage={queryPage}
            pageCount={data.total_pages}
          />
        </>
      ) : (
        ''
      )}
    </section>
  );
};

export default HomePage;
