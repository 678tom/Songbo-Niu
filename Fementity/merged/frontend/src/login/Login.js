import {
  Box,
  Heading,
  Text,
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

import React, { createRef, useState } from 'react';
import { Link as RouteLink, Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useUserAuth();
  const [error, setError] = useState('');

  const errorRef = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (validate() === true) {
      try {
        await logIn(email, password);
        navigate('/member-page');
      } catch (err) {
        //console.log(err)
        setError(err.message);
      }
    } else {
      errorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const validate = () => {
    const emailRegEx =
      /^([\w\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (email.trim() === '') {
      setError('Please enter an email');
      return false;
    } else if (password.trim() === '') {
      setError('Please enter a password');
      return false;
    } else if (!emailRegEx.test(email)) {
      setError('Please enter a valid email');
      return false;
    }

    return true;
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
            <Heading>Welcome!</Heading>
            <HStack>
              <Text>New to FemEntity? | </Text>
              <Button
                component={Link}
                to="../memberships/Memberships"
                variant="link"
                color={'primary'}
              >
                <RouteLink to="/memberships">View our Memberships!</RouteLink>
              </Button>
            </HStack>
          </VStack>

          {error && (
            <Alert ref={errorRef} rounded={5} status="error">
              <AlertIcon /> {error}
            </Alert>
          )}

          <FormControl>
            <FormLabel>E-mail Address</FormLabel>
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

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'password'}
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>

          <HStack pt={4} pb={8} w="100%" justify={'space-between'}>
            <Button
              variant={'link'}
              color={'primay'}
              aria-label="Forgot Password?"
              alignSelf={'left'}
            >
              <RouteLink to="/forgot-password">Forgot Password?</RouteLink>
            </Button>

            <Button
              type="submit"
              backgroundColor={'primary'}
              color={'white'}
              w={['50%']}
              aria-label="login"
            >
              Log In
            </Button>
          </HStack>

          <VStack spacing={3} align={['flex-start', 'center']} w="full" pb={2}>
         

           
            <Button
              component={Link}
              to="../business-form/BusinessForm"
              variant={'link'}
              color={'primary'}
              alignSelf={'left'}
            >
              <RouteLink to="/business-form">
                Create a business account
              </RouteLink>
            </Button>
          </VStack>
        </VStack>
      </form>
    </Box>
  );
}
