import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '~/Routes';

import { PageWrapper } from '~/components';
import { GlobalStyles, mainTheme } from '~/styles';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
