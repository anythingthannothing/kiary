import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kiary | Login',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={
        'min-h-screen mx-auto flex flex-col items-center justify-between'
      }
    >
      {children}
      <Footer />
    </main>
  );
}
