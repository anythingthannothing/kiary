import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: any;
}

function TextInput({ name, label, register, errors, ...props }: Props) {
  return (
    <div className={'flex flex-col'}>
      <label htmlFor={name}>{label}</label>
      <input type={'text'} id={'name'} {...register(name)} {...props} />
      {errors && errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}

export default TextInput;
