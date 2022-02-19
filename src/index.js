import React from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from './styles/global'
import App from './pages/main';
import Print from './pages/print'

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
    <Print />
  </React.StrictMode>,
  document.getElementById('root')
);