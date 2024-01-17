import { UserData } from '@/app/StateManagement/Types/User';
import React from 'react';
import Title from './Title';
import Table from '../../Ui/Table';
import useModal from '@/app/Hook/useModal';

interface UserGroupProps {
  users: UserData[];
  handleOpenEditModal(): void;
  handleOpenDeleteModal(): void;
  setSelectUserDelete: any;
  setSelectUserEdit: any;
}
const UserGroup: React.FC<UserGroupProps> = ({
  users,
  handleOpenDeleteModal,
  handleOpenEditModal,
  setSelectUserDelete,
  setSelectUserEdit,
}) => {
  return (
    <section className="flex flex-col space-y-4">
      <Title text="list of users" />
      <Table
        data={users}
        handleOpenDeleteModal={handleOpenDeleteModal}
        handleOpenEditModal={handleOpenEditModal}
        setSelectUserDelete={setSelectUserDelete}
        setSelectUserEdit={setSelectUserEdit}
      />
    </section>
  );
};

export default UserGroup;
