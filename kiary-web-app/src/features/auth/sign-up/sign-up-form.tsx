'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/form/text-input';
import Button from '@/components/ui/button';
import { useSignUp } from '@/features/auth/sign-up/use-sign-up';
import PasswordInput from '@/components/form/password-input';

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

  const { mutate: signUp, data, isPending } = useSignUp();

  const onSubmit = async () => {
    // signUp()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name={'email'} label={'Email'} register={register} />
      <TextInput name={'nickname'} label={'Nickname'} register={register} />
      <PasswordInput name={'password'} label={'Password'} register={register} />
      <PasswordInput
        name={'confirm-password'}
        label={'Confirm Password'}
        register={register}
      />
      <Button type={'submit'}>Sign Up</Button>
    </form>
  );
}

export default SignUpForm;
