import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18next.js';
import './style/index.css';
import './style/global.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

