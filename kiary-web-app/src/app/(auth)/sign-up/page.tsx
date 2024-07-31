import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/layout/container';
import Heading from '@/components/heading';
import SignUpForm from '@/features/auth/sign-up/sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up',
};

function SingUpPage() {
  return (
    <Container>
      <Heading as={'h1'}>Sign up</Heading>
      <p>and get your own lifetime diary</p>
      <SignUpForm />
    </Container>
  );
}

export default SingUpPage;
