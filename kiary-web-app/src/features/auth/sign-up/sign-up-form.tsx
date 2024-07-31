'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/form/text-input';
import Button from '@/components/ui/button';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async () => {
    alert('submit');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name={'email'} label={'Email'} register={register} />
      <TextInput name={'password'} label={'Password'} register={register} />
      <TextInput
        name={'confirm-password'}
        label={'Confirm Password'}
        register={register}
      />
      <Button type={'submit'}>Sign Up</Button>
    </form>
  );
}

export default SignUpForm;
