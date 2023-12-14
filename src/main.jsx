import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './GlobalStyles';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <BrowserRouter basename="/healthy_hub">
        <App />
        <GlobalStyle />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    
  </React.StrictMode>
);
