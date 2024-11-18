import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HelmetProvider } from 'react-helmet-async';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const helmetContext = {};
type AppProviderProps = { children: ReactNode };
export function AppProvider({ children }: AppProviderProps) {
  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
