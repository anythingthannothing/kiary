'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/form/text-input';
import Button from '@/components/ui/button';
import { useSignUp } from '@/features/auth/sign-up/use-sign-up';
import PasswordInput from '@/components/form/password-input';
import { SignUpSchema } from '@/features/auth/sign-up/sign-up-schema';

export interface FormValues {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>({ resolver: zodResolver(SignUpSchema) });

  const { mutate: signUp, data, isPending } = useSignUp();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    console.log(errors);
    // signUp()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name={'email'}
        label={'Email'}
        register={register}
        error={errors.email}
      />
      <TextInput
        name={'nickname'}
        label={'Nickname'}
        register={register}
        error={errors.nickname}
      />
      <PasswordInput
        name={'password'}
        label={'Password'}
        register={register}
        error={errors.password}
      />
      <PasswordInput
        name={'confirmPassword'}
        label={'Confirm Password'}
        register={register}
        error={errors.confirmPassword}
      />
      <Button type={'submit'}>Sign Up</Button>
    </form>
  );
}

export default SignUpForm;
