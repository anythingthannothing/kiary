import { Metadata } from 'next';
import LoginForm from '@/components/login-form';
import Heading from '@/components/heading';
import HLine from '@/components/h-line';
import Container from '@/components/layout/container';
import GoogleLoginButton from '@/components/button/google-login-button';
import GithubLoginButton from '@/components/button/github-login-button';

export const metadata: Metadata = {
  title: 'Kiary | Login',
};

export default async function LoginPage() {
  return (
    <Container>
      <Heading as={'h1'}>Sign in</Heading>
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
