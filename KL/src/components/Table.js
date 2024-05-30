import React, { useContext, useMemo, useState } from 'react';
import DataContext from '../contexts/DataContext';
import { DataProvider } from '../contexts/DataContext';
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
  IconButton,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import ModalEdit from './ModalEdit';

function TableUI() {
  const { data, handleDelete } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
            <th>Modifier</th>
            <Th>Supprimer</Th>
          </Tr>
        </Thead>
        <Tbody>
          <td></td>
          <td><InputGroup size='md'>
                <Input
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </InputGroup></td>
          <td></td>
          <td><InputGroup size='md'>
                <Input
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </InputGroup></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </Tbody>
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
              <DataProvider>
              <ModalEdit />
              </DataProvider>          
              </Td>
              <Td>
              <IconButton
                  icon={<FontAwesomeIcon icon={faTrash} />}
                  onClick={() => handleDelete(item.id)}
                  variant="solid"
                  colorScheme='purple'
                />
              </Td>

              
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  ), [data, handleDelete]);

  return tableContent;
}

export default TableUI;
