import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './ThemeProvider';

export default function Providers({ children, config }: any) {
  return (
    <HelmetProvider>
      <ThemeProvider config={config}>{children}</ThemeProvider>
    </HelmetProvider>
  );
}
