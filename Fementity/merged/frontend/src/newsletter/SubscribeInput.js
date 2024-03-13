import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

export default function SubscribeInput() {
  return (
    <Center>
      <InputGroup size="lg" width={'md'}>
        <Input
          type="email"
          placeholder="johnny@appleseed.com"
          id="subscribe-email-input"
          pr="4rem"
        />
        <InputRightElement width="7rem">
          <Button h="100%" size="md">
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
}
