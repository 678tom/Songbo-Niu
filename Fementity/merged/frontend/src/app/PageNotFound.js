import React from 'react';
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export default function PageNotFound() {
  return (
    <Box px="2">
      <Stack
        isInline
        align="center"
        justifyContent={{ base: 'center', md: 'start' }}
      >
        <WarningTwoIcon />
        <Heading as="h1">404 - Page Not Found</Heading>
      </Stack>
      <Divider />
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        The page you are looking for has moved or does not exist.
      </Text>
    </Box>
  );
}
