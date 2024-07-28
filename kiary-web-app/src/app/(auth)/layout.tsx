import Footer from '@/components/layout/footer';

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
