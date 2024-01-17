'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './StateManagement/Store';
import {
  asyncGetUsers,
  asyncCreateUser,
  asyncDeleteUser,
  asyncEditUser,
} from './StateManagement/Slice/Users';
import UserGroup from './Components/User/UserGroup';
import { useSearchParams } from 'next/navigation';
import Pagination from './Components/Ui/Pagination';
import ButtonAction from './Components/Ui/ButtonAction';
import useModal from './Hook/useModal';
import Modal from './Components/Ui/Modal';
import UserCreateForm, {
  InitialUserCreateForm,
} from './Components/Form/UserCreateForm/index';
import UserDeleteForm from './Components/Form/UserDeleteForm';
import UserEditForm from './Components/Form/UserEditForm';
import Loading from './Components/Ui/Loading';
import Error from './Components/Ui/Error';
const HomePage = () => {
  // State
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get('page') || String(1);
  const {
    data,
    loading: isLoadUsers,
    error: errorGetUsers,
  } = useAppSelector((store) => store.users);
  const [selectUserDelete, setSelectUserDelete] = useState(null);
  const [selectUserEdit, setSelectUserEdit]: any = useState(null);

  // Request To Get Users
  useEffect(() => {
    dispatch(asyncGetUsers(queryPage));
  }, [queryPage, dispatch]);

  // Modal
  const {
    isOpen: isOpenUserCreate,
    closeModal: closeUserCreateModal,
    openModal: openUserCreateModal,
  } = useModal();
  const {
    isOpen: isOpenUserEdit,
    closeModal: closeUserEditModal,
    openModal: openUserEditModal,
  } = useModal();
  const {
    isOpen: isOpenUserDelete,
    closeModal: closeUserDeleteModal,
    openModal: openUserDeleteModal,
  } = useModal();

  // Form Submit(Create,Delete,Edit) User
  const submitCreateUser = async (data: InitialUserCreateForm) => {
    dispatch(asyncCreateUser(data));
    closeUserCreateModal();
  };
  const submitDeleteUser = async () => {
    dispatch(asyncDeleteUser(selectUserDelete));
    closeUserDeleteModal();
    setSelectUserDelete(null);
  };
  const submitEditUser = async (data: any) => {
    dispatch(
      asyncEditUser({
        ...data,
        avatar: selectUserEdit.avatar,
        userId: selectUserEdit.id,
      })
    );
    closeUserEditModal();
    setSelectUserEdit(null);
  };

  const handleTryAgatinGetUsers = async () => {
    dispatch(asyncGetUsers(queryPage));
  };

  return (
    <>
      {isLoadUsers ? (
        <Loading />
      ) : errorGetUsers ? (
        <Error
          message="Something went wrong, please search again"
          handleAction={handleTryAgatinGetUsers}
        />
      ) : data && !isLoadUsers ? (
        <section className="grid grid-cols-1 m-auto container p-2">
          {/* User Table */}
          <UserGroup
            users={data.data}
            handleOpenEditModal={openUserEditModal}
            handleOpenDeleteModal={openUserDeleteModal}
            setSelectUserDelete={setSelectUserDelete}
            setSelectUserEdit={setSelectUserEdit}
          />
          {/* Pagination */}
          <section className="flex flex-wrap md:gap-0 gap-3 justify-around items-center">
            <Pagination
              query="page"
              initialPage={queryPage}
              pageCount={data.total_pages}
            />
            {/* Create User */}
            <ButtonAction
              onClick={() => openUserCreateModal()}
              className="bg-green-500 hover:bg-green-700 w-52"
            >
              create
            </ButtonAction>
          </section>
          {/* Create Modal */}
          <Modal isOpen={isOpenUserCreate} closeModal={closeUserCreateModal}>
            <UserCreateForm handleSubmitForm={submitCreateUser} />
          </Modal>
          {/* Delete Modal */}
          <Modal isOpen={isOpenUserDelete} closeModal={closeUserDeleteModal}>
            <UserDeleteForm
              closeModal={closeUserDeleteModal}
              handleSubmitForm={submitDeleteUser}
            />
          </Modal>
          {/* Edit Modal */}
          <Modal isOpen={isOpenUserEdit} closeModal={closeUserEditModal}>
            <UserEditForm
              handleSubmitForm={submitEditUser}
              selectUserEdit={selectUserEdit}
            />
          </Modal>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default HomePage;
