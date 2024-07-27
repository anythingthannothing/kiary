import { ReactNode } from 'react';
import { DarkModeProvider } from '@/context/dark-mode-context';

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}

export default Providers;
