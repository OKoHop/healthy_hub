import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { theme } from './theme.js';
import { GlobalStyle } from './GlobalStyles';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/healthy_hub">
        <App />
        <GlobalStyle />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
