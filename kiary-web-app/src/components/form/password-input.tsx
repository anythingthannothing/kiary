'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { BiHide, BiShow } from 'react-icons/bi';

interface Props {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: any;
}

function PasswordInput({ name, label, register, error, ...props }: Props) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <div className={'input-wrapper'}>
        <div className={'flex flex-col relative text-input'}>
          <label htmlFor={name}>{label}</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id={name}
            {...register(name)}
            {...props}
            autoComplete={'off'}
          />
          <div className={'absolute password-toggle'}>
            {showPassword ? (
              <BiShow
                className={'h-5 w-5'}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <BiHide
                className={'h-5 w-5'}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        {error && <p className={'error-message ml-sm'}>{error.message}</p>}
      </div>
    </>
  );
}

export default PasswordInput;
