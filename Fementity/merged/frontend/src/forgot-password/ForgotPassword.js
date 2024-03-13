import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  Image,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { resetPasswordEmail } = useUserAuth();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (email.trim() === '') {
      setStatus('error');
      setMessage('Please enter an email');
      setLoading(false);
      return;
    }
    try {
      await resetPasswordEmail(email);
      setStatus('success');
      setMessage('Check your email for further details');
      setLoading(false);
    } catch (err) {
      setStatus('error');
      setMessage('Invalid email/ Email not found');
      setLoading(false);
    }
  };

  return (
    <Box
      mt={4}
      w={['full', 'md']}
      h={['full', 'mx']}
      boxShadow="md"
      p={['6', '10']}
      rounded="lg"
      bg="background"
      mx="auto"
      mb={20}
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={['flex-start', 'center']} w="full" mb={3}>
            <Image
              borderRadius="full"
              position={'relative'}
              margin={'0'}
              padding={'0'}
              boxSize="120px"
              src="images/fementity-logo.png"
              alt="Fementity Logo"
            />
            <Heading size={'lg'}>Reset Password</Heading>
          </VStack>

          {message && (
            <Alert rounded={5} status={status}>
              <AlertIcon /> {message}
            </Alert>
          )}

          <FormControl>
            <FormLabel>Enter your E-mail Address</FormLabel>
            <Input
              type={'email'}
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              backgroundColor={''}
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </FormControl>

          <HStack pt={4} pb={8} w="100%" justify={'space-between'}>
            <Button
              variant={'link'}
              color={'primay'}
              aria-label="Forgot Password?"
              alignSelf={'left'}
            >
              <RouteLink to="/login">Login</RouteLink>
            </Button>

            {loading && (
              <Button
                type="submit"
                backgroundColor={'primary'}
                color={'white'}
                w={['50%']}
                aria-label="login"
                isLoading
              />
            )}

            {!loading && (
              <Button
                type="submit"
                backgroundColor={'primary'}
                color={'white'}
                w={['50%']}
                aria-label="login"
              >
                Reset Password
              </Button>
            )}
          </HStack>
        </VStack>
      </form>
    </Box>
  );
}
