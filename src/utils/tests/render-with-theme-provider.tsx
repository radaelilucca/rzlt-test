import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import { mainTheme } from '~/styles';

interface IRenderWithThemeProviderProps {
  component: ReactNode;
  customTheme?: DefaultTheme;
}

const renderWithThemeAndRouter = (props: IRenderWithThemeProviderProps) => {
  const { component, customTheme } = props;

  return render(
    <BrowserRouter>
      <ThemeProvider theme={customTheme || mainTheme}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
};

export { renderWithThemeAndRouter };
