'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  type?: 'text' | 'email';
  register: UseFormRegister<any>;
  error: any;
}

function TextInput({
  name,
  label,
  type = 'text',
  register,
  error,
  ...props
}: Props) {
  return (
    <div className={'input-wrapper'}>
      <div className={'flex flex-col text-input'}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          {...register(name)}
          className={''}
          {...props}
        />
      </div>
      {error && <p className={'error-message ml-sm'}>{error.message}</p>}
    </div>
  );
}

export default TextInput;
