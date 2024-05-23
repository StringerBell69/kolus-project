import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from '../contexts/DataContext';
import Table from './Table';

function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <Table />
      </DataProvider>
    </ChakraProvider>
  );
}

export default App;
