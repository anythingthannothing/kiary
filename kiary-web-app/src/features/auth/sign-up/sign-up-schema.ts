import { z, ZodType } from 'zod';
import { FormValues } from '@/features/auth/sign-up/sign-up-form';

export const SignUpSchema: ZodType<FormValues> = z
  .object({
    email: z
      .string()
      .email()
      .min(8, { message: '이메일은 최소 8자' })
      .max(50, { message: '이메일은 최대 30자' }),
    nickname: z.string().min(8).max(36),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자' })
      .max(24, { message: '비밀번호는 최대 24자' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });
