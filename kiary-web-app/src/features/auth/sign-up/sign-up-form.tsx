'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/form/text-input';
import Button from '@/components/ui/button';
import { useSignUp } from '@/features/auth/sign-up/use-sign-up';
import PasswordInput from '@/components/form/password-input';
import { SignUpSchema } from '@/features/auth/sign-up/sign-up-schema';
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation';

export interface FormValues {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm() {
  const router = useRouter();
  const { login } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormValues>({ resolver: zodResolver(SignUpSchema) });

  const { mutate: signUp, data: response, isPending } = useSignUp();

  const onSubmit = async (data: FormValues) => {
    const { email, nickname, password } = data;
    signUp(
      { email, nickname, password },
      {
        onSuccess: (response) => {
          console.log(response);
          login({
            nickname: response.data.nickname,
            profileUrl: response.data.profileUrl,
            accessTokenExpiresAt: response.data.accssTokenExpiresAt,
          });
          // router.push('/dashboard');
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
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
      <Button type={'submit'} disabled={isPending || !isValid}>
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
