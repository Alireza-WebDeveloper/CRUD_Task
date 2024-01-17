'use client';
import { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '@/app/StateManagement/Store';
import { asyncGetUserDetail } from '@/app/StateManagement/Slice/UserDetail';
import { useEffect } from 'react';
import Error from '@/app/Components/Ui/Error';
import Loading from '@/app/Components/Ui/Loading';
import UserDetail from '@/app/Components/User/UserDetail';
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<PageProps> = ({ params: { id } }) => {
  // State
  const dispatch = useAppDispatch();
  const {
    data,
    loading: isLoadUser,
    error: errorGetUser,
  } = useAppSelector((store) => store.userDetail);
  // Request
  useEffect(() => {
    dispatch(asyncGetUserDetail(id));
  }, [id, dispatch]);
  const handleTryAgainGetUser = async () => {
    dispatch(asyncGetUserDetail(id));
  };
  return (
    <>
      {isLoadUser ? (
        <Loading />
      ) : errorGetUser ? (
        <Error
          message="Something went wrong, please search again"
          handleAction={handleTryAgainGetUser}
        />
      ) : data && !isLoadUser ? (
        <section className="grid place-items-center p-3">
          <UserDetail user={data.data} />
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default Page;
