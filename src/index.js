import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
