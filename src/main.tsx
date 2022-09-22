import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from '~/mocks';

import App from './App';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
