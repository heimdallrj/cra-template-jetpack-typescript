import { Provider as JetpackProvider } from '@jetpack/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <JetpackProvider theme={{}}>
      <Story />
    </JetpackProvider>
  ),
];
