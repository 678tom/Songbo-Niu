import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Divider,
  ListItem,
  UnorderedList,
  Avatar,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function BusinessPage() {
  return (
    <Stack mb={'10'} w={'100%'}>
      <VStack align={['flex-left', 'left']} w={'100%'}>
        <HStack justify={'space-between'}>
          <HStack alignItems={['flex-start, left']}>
            <Avatar
              name="business name"
              size={'xl'}
              mr="1rem"
              src="/images/fementity-logo.png"
              backgroundColor={'background'}
              border={'1px'}
            ></Avatar>

            <VStack align={['flex-start', 'left']}>
              <Heading>Business Name Here</Heading>
              <Text fontSize={'20px'}>Business/Consultant Identifier</Text>
              <Text fontSize={'20px'}>Location:</Text>
              <Text fontSize={'15px'} border="1px">
                Description Box Here: Here at Fem Entity we love femininity{' '}
              </Text>
            </VStack>
          </HStack>

          <HStack align={['flex-start', 'right']}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              isExternal
            >
              <FaInstagram borderRadius="full" color="primay" size="35px" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              isExternal
            >
              <FaFacebook borderRadius="full" color="primay" size="35px" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              isExternal
            >
              <FaTwitter borderRadius="full" color="primay" size="35px" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              isExternal
            >
              <FaLinkedin borderRadius="full" color="primay" size="35px" />
            </a>
          </HStack>
        </HStack>

        <Divider
          borderColor={'primay'}
          border={'1px'}
          orientation="horizontal"
        />

        <HStack>
          <Box width={'100%'} padding={'20px'} boxShadow="dark-lg" rounded="md">
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'10px'}
              boxShadow="md"
              rounded="md"
            >
              <Text fontSize={'20px'}>Book a Meeting</Text>
            </Box>

            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'20px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Meeting Scheduling Link</ListItem>

                <ListItem padding={'20px'}>Meeting Scheduling Link</ListItem>

                <ListItem padding={'20px'}>Meeting Scheduling Link</ListItem>

                <ListItem padding={'20px'}>Meeting Scheduling Link</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box width={'100%'} padding={'25px'} boxShadow="dark-lg" rounded="md">
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'10px'}
              boxShadow="md"
              rounded="md"
            >
              <Text fontSize={'20px'}>Where to Contact Us</Text>
            </Box>

            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'20px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Phone Number:</ListItem>

                <Text fontSize={'18px'}>XXX-XXX-XXXX</Text>

                <ListItem padding={'20px'}>Email:</ListItem>

                <Text fontSize={'18px'}>Loremipmsum@dal.ca</Text>

                <ListItem padding={'20px'}>Our Website:</ListItem>

                <Text fontSize={'18px'}>www.dal.ca</Text>
              </UnorderedList>
            </Box>
          </Box>
        </HStack>

        <HStack>
          <Box width={'100%'} padding={'25px'} boxShadow="dark-lg" rounded="md">
            <Box
              borderRadius={'4px'}
              backgroundColor={'background'}
              padding={'10px'}
              boxShadow="md"
              rounded="md"
            >
              <Text fontSize={'20px'}>Product Pricing</Text>
            </Box>

            <Box
              borderRadius={'4px'}
              backgroundColor={'#d8b1b2'}
              padding={'20px'}
            >
              <UnorderedList fontSize={'25px'}>
                <ListItem padding={'20px'}>Pricing Option #1</ListItem>

                <ListItem padding={'20px'}>Pricing Option #2</ListItem>

                <ListItem padding={'20px'}>Pricing Option #3</ListItem>

                <ListItem padding={'20px'}>Pricing Option #4</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </HStack>
      </VStack>
    </Stack>
  );
}
