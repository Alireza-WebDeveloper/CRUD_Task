import ButtonLink from '../Ui/ButtonLink';
import Links from './Links';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-3 items-center flex justify-between flex-wrap  bg-white dark:bg-gray-900">
        <Logo />
        <Links />
      </div>
    </header>
  );
};

export default Header;
