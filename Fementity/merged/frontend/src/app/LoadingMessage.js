import React from 'react';
import { Spinner, Stack, Text } from '@chakra-ui/react';

export function LoadingMessage({ children }) {
  return (
    <Stack align="center" layerStyle="loadingMessage">
      <Stack isInline align="center">
        <Spinner
          size="lg"
          speed="0.6s"
          color="primary"
          emptyColor="accent"
          thickness="0.175em"
        />
        <Text>Loading {children}...</Text>
      </Stack>
    </Stack>
  );
}
