import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { theme } from './theme.js';
import { GlobalStyle } from './GlobalStyles';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/healthy_hub">
          <App />
          <GlobalStyle />
          <Toaster position="top-center" reverseOrder={false} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
