import React, { useContext, useMemo } from 'react';
import DataContext from '../contexts/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react';

function App() {
  const { data, handleDelete } = useContext(DataContext);

  const tableContent = useMemo(() => (
    <Box p={4}>
      <Table variant='striped' size='sm'>
        <TableCaption>Etablissements</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Type</Th>
            <Th>Nom</Th>
            <Th>Ville</Th>
            <Th>Adresse</Th>
            <Th>Mail</Th>
            <Th>Supprimer</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(item => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.etablissement_type}</Td>
              <Td>{item.etablissement}</Td>
              <Td>{item.location}</Td>
              <Td>{item.address}</Td>
              <Td>{item.mail}</Td>
              <Td>
                <a href="#" onClick={() => handleDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </a>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  ), [data, handleDelete]);

  return tableContent;
}

export default App;
