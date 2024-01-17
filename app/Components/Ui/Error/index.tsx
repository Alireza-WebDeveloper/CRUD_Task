import ButtonAction from '../ButtonAction';
import * as Icons from 'react-icons/md';
import React from 'react';
interface ErrorProps {
  handleAction(): Promise<void>;
  message: string;
}

const Error: React.FC<ErrorProps> = ({ handleAction, message }) => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col space-y-5 justify-center items-center w-full">
          <span className="p-3  animate-bounce text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <Icons.MdError size={'2rem'} />
          </span>
          <h1 className="mt-3 text-center text-2xl capitalize font-semibold text-gray-800 dark:text-white md:text-3xl">
            {message}
          </h1>
          <ButtonAction
            onClick={handleAction}
            className="bg-blue-500 hover:bg-blue-700"
          >
            try again
          </ButtonAction>
        </div>
      </div>
    </section>
  );
};

export default Error;
