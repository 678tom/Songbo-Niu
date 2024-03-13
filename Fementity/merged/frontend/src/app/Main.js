import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Flex
      layerStyle="pageLayout"
      as="main"
      id="main"
      fontFamily="body"
      flex="1 0 auto"
      pt={10}
      bg="background"
    >
      <Outlet />
    </Flex>
  );
}
