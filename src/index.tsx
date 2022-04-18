import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react';

const app = (
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('app'));
