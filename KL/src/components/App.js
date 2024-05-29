import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DataProvider } from '../contexts/DataContext';
import Table from './Table';
import ModalEtab from './ModalEtab';

function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <ModalEtab />
        <Table />
      </DataProvider>
    </ChakraProvider>
  );
}

export default App;
