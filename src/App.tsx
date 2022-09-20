import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './Routes';
import { mainTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
