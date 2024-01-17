import Link from 'next/link';
import * as Icons from 'react-icons/md';
const Logo = () => {
  return (
    <section className="flex">
      <Link href={'/'}>
        <Icons.MdLogoDev size={'2rem'} />
      </Link>
    </section>
  );
};

export default Logo;
