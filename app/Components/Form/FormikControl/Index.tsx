'use client';
import { FC } from 'react';
import Input from './Input';

const FormikControl: FC<any> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;

    default:
      return null;
  }
};

export default FormikControl;
