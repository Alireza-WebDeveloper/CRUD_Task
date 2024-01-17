import React from 'react';

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-2xl dark:text-purple-500 text-purple-800">{text}</h1>
  );
};

export default Title;
