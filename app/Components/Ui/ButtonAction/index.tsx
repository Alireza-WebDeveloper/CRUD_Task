import React from 'react';

interface ButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonAction: React.FC<ButtonActionProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <button
      className={`
        capitalize text-white font-bold py-2 px-4 rounded
      active:translate-y-1
       transition-all duration-300 ease-in-out
    ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
