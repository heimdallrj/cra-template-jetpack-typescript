import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyle } from './globalStyles';
import './normalize.css';

type Props = {
  children: React.ReactNode;
  config: any;
};

export default function ThemeProvider({ children, config }: Props) {
  return (
    <StyledProvider theme={config}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
}
