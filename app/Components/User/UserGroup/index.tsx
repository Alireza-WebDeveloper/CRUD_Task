import { UserData } from '@/app/StateManagement/Types/User';
import React from 'react';
import Title from './Title';
import Table from '../../Ui/Table';

interface UserGroupProps {
  users: UserData[];
}
const UserGroup: React.FC<UserGroupProps> = ({ users }) => {
  return (
    <section className="flex flex-col space-y-4">
      <Title text="list of users" />
      <Table data={users} />
    </section>
  );
};

export default UserGroup;
