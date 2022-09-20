import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PageWrapper } from './components';
import { AppRoutes } from './Routes';
import { GlobalStyles } from './styles/globalStyles';
import { mainTheme } from './styles/themes';

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
