import { ReactNode } from 'react';
import { DarkModeProvider } from '@/context/dark-mode-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/context/query-client-context';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkModeProvider>{children}</DarkModeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
