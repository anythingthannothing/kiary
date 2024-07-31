import { Metadata } from 'next';
import LoginForm from '@/features/auth/login/login-form';
import Heading from '@/components/heading';
import HLine from '@/components/h-line';
import Container from '@/components/layout/container';
import GoogleLoginButton from '@/features/auth/login/google-login-button';
import GithubLoginButton from '@/features/auth/login/github-login-button';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function LoginPage() {
  return (
    <Container>
      <Heading as={'h1'}>Login</Heading>
      <p>to continue to Kiary</p>
      <LoginForm />
      <HLine>or</HLine>
      <div className={'flex flex-col'}>
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>
    </Container>
  );
}
