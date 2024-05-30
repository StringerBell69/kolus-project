import React, { useState, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from '@chakra-ui/react';
import DataContext from '../contexts/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function ModalEdit() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleEdit } = useContext(DataContext);

  const [formData, setFormData] = useState({
    id: '',
    etablissement_type: '',
    etablissement: '',
    location: '',
    address: '',
    mail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
    onClose();
  };

  return (
    <>
      <IconButton icon={<FontAwesomeIcon icon={faPenToSquare} />} variant="solid"colorScheme='purple' onClick={onOpen} ></IconButton>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input 
                  name="id" 
                  value={(formData.id)} 
                  onChange={handleChange} 
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Type d'Établissement</FormLabel>
                <Input 
                  name="etablissement_type" 
                  value={formData.etablissement_type} 
                  onChange={handleChange} 
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Établissement</FormLabel>
                <Input 
                  name="etablissement" 
                  value={formData.etablissement} 
                  onChange={handleChange} 
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Localisation</FormLabel>
                <Input 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Adresse</FormLabel>
                <Input 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input 
                  name="mail" 
                  type="email" 
                  value={formData.mail} 
                  onChange={handleChange} 
                />
              </FormControl>
              <ModalFooter>
                <Button colorScheme="purple" mr={3} type="submit">
                  MODIFIER
                </Button>
                <Button onClick={onClose}>ANNULER</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalEdit;
