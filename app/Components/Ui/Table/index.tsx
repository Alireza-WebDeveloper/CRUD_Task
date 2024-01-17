import { UserData } from '@/app/StateManagement/Types/User';
import { loadImage } from '@/app/Types/Image.type';
import Image from 'next/image';
import ButtonAction from '../ButtonAction';
import Link from 'next/link';
interface TableProps {
  data: UserData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const renderTableHeader = () => {
    return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            id
          </th>
          <th scope="col" className="px-6 py-3">
            email
          </th>
          <th scope="col" className="px-6 py-3">
            first name
          </th>
          <th scope="col" className="px-6 py-3">
            last name
          </th>
          <th scope="col" className="px-6 py-3">
            image
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
    );
  };

  const rnderTableBody = () => {
    return (
      <tbody>
        {data &&
          data.map((user) => {
            return (
              <tr
                key={user.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.id}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.first_name}</td>
                <td className="px-6 py-4">{user.last_name}</td>
                <td className="px-6 py-4">
                  <div className="relative w-10 h-10">
                    <Image
                      loader={loadImage}
                      src={user.avatar}
                      alt={'image'}
                      fill
                      className="object-fill rounded"
                      priority
                      sizes="(max-width: 1200px) 100vw"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <section className="flex items-center gap-3">
                    <ButtonAction className="bg-red-500 hover:bg-red-700">
                      delete
                    </ButtonAction>
                    <ButtonAction className="bg-orange-500 hover:bg-orange-700">
                      edit
                    </ButtonAction>
                    <Link href={`/user/${user.id}`}>
                      <ButtonAction className="bg-blue-500 hover:bg-blue-700">
                        view
                      </ButtonAction>
                    </Link>
                  </section>
                </td>
              </tr>
            );
          })}
      </tbody>
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {renderTableHeader()}
        {rnderTableBody()}
      </table>
    </div>
  );
};

export default Table;
