import { UserData } from '@/app/StateManagement/Types/User';
import Image from 'next/image';
import { loadImage } from '@/app/Types/Image.type';
interface UserDetailProps {
  user: UserData;
}
const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div className="p-2 rounded bg-gray-50 flex  flex-col space-y-3 capitalize">
      <div className="relative lg:w-80 lg:h-80 w-full h-32">
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
      <section className="flex flex-col space-y-4">
        <section className="flex gap-2 items-center">
          <span className="text-bold"> email : </span>
          <span>{user.email}</span>
        </section>
        <section className="flex gap-2 items-center">
          <span className="text-bold"> name : </span>
          <span>
            {user.first_name} {user.last_name}
          </span>
        </section>
      </section>
    </div>
  );
};

export default UserDetail;
