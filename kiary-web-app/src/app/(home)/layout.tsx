import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main
        className={
          "min-h-screen flex flex-col items-center justify-between p-4"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
