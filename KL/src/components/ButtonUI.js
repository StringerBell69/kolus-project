// ButtonUI.js
import React from 'react';
import { Button } from '@chakra-ui/react';

function ButtonUI({ onClick, children }) {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}

export default ButtonUI;
