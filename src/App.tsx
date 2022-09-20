import { ThemeProvider } from 'styled-components';

import { mainTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <h1>Hello rzlt</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
