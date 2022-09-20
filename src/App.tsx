import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '~/Routes';

import { PageWrapper } from '~/components';
import { GlobalStyles, mainTheme } from '~/styles';

import { UserContextProvider } from './context';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <UserContextProvider>
          <PageWrapper>
            <AppRoutes />
          </PageWrapper>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
