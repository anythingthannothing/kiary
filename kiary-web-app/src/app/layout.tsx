import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import '@/styles/main.scss';
import NavigationButton from '@/components/navigation-button';
import Providers from '@/context/providers';

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kiary',
    template: '%s | Kiary',
  },
  description: 'Diary for Lifetime',
  generator: 'Next.js',
  publisher: 'anythingthannothing',
  keywords: ['diary', 'to do', 'album', 'calendar', 'productivity'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className}`}>
        <Providers>
          <NavigationButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
