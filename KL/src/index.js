import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { DataProvider } from './contexts/DataContext';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
