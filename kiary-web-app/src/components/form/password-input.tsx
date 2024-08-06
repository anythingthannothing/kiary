import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { BiHide, BiShow } from 'react-icons/bi';

interface Props {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: any;
}

function PasswordInput({ name, label, register, errors, ...props }: Props) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={'flex flex-col relative'}>
      <label htmlFor={name}>{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id={name}
        {...register(name)}
        {...props}
        autoComplete={'off'}
      />
      {errors && errors[name] && <p>{errors[name].message}</p>}
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
  );
}

export default PasswordInput;
