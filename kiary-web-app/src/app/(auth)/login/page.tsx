import { Metadata } from 'next';
import LoginForm from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Kiary | Login',
};

export default async function LoginPage() {
  return (
    <section className={'py-8'}>
      <p className={'w-full text-start block mb-8'}>Kiary</p>
      <div
        className={
          'sm:max-w-[90%] w-[720px] flex flex-col gap-8 border border-gray-200 p-8 rounded-2xl'
        }
      >
        <h2>Sign in to your account</h2>
        <LoginForm />
      </div>
    </section>
  );
}
