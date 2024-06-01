import MainHeader from "@/components/MainHeader";
import type { Metadata } from "next";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
