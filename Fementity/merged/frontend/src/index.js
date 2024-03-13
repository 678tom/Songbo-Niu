import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import fementity from './theme/fementity';
import Fonts from './theme/Fonts'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={fementity}>
      <Fonts />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);