import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const offersSum = 100;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offersSum={offersSum} />
    </BrowserRouter>
  </React.StrictMode>,
);
