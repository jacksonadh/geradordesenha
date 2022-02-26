import React from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from './styles/global'
import App from './pages/main';


ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
