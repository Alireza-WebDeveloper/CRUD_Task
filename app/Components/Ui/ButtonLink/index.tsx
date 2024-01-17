import Link from 'next/link';
import React from 'react';

interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { className, children, href, ...restProps } = props;
  return (
    <Link href={href}>
      <button
        className="px-5 py-2.5 flex gap-2 rounded-lg items-center bg-white dark:bg-gray-950 text-lg   relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        {...restProps}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
