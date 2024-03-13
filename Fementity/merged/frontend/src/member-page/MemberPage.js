import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Divider,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useUserAuth } from '../context/UserAuthContext';

export default function MemberForm() {
  const { user, logOut } = useUserAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <div
      style={{
        display: 'flex',
        // justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <VStack align={'left'} width={'1000px'} height={'5%'}>
        <Image
          position={'absolute'}
          boxSize="130px"
          border={'1px'}
          marginBottom={'20px'}
          src="images/fementity-logo.png"
          alt="Fementity Logo"
        />

        <HStack paddingLeft={'150px'} justify={'space-between'}>
          <Heading>FirstName LastName</Heading>
          <Text height={'20px'} color={'primay'}>
            Pronouns
          </Text>
        </HStack>

        <HStack paddingLeft={'160px'}>
          <Text fontSize={'20px'}>Occupation</Text>
          <Text fontSize={'20px'}>|</Text>
          <Text fontSize={'20px'} color={'primay'}>
            Astrology Sign
          </Text>
        </HStack>

        <HStack>
          <Divider
            marginTop={'60px'}
            borderColor={'primay'}
            border={'1px'}
            orientation="horizontal"
          />
        </HStack>

        <HStack>
          <Box width={'60%'} padding={'25px'}>
            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'10px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <Text fontSize={'20px'}>Course In-Progress</Text>
            </Box>
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'20px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box width={'40%'} padding={'25px'}>
            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'10px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <Text fontSize={'20px'}>Booked Meetings</Text>
            </Box>
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'20px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </HStack>

        <HStack>
          <Box width={'60%'} padding={'25px'}>
            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'10px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <Text fontSize={'20px'}>My Courses</Text>
            </Box>
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'20px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box width={'40%'} padding={'25px'}>
            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'10px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <Text fontSize={'20px'}>My Favourite Businesses</Text>
            </Box>
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'20px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </HStack>
        <HStack>
          <Box marginLeft={'600px'} width={'40%'} padding={'25px'}>
            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'10px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <Text fontSize={'20px'}>My </Text>
            </Box>
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'20px'}
              boxShadow="dark-lg"
              rounded="md"
              border={'1px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
                <ListItem padding={'20px'}>Course Title Status</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </div>
  );
}
