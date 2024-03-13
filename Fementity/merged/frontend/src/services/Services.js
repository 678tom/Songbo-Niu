import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';

const femImage0 =
  'https://images.unsplash.com/photo-1523657895111-376b5d07a55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

const femImage1 =
  'https://images.unsplash.com/photo-1601129490376-e24f32ed8024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

const femImage2 =
  'https://images.unsplash.com/photo-1516714612186-b44521178ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

const femImage3 =
  'https://media.istockphoto.com/photos/need-everyone-to-give-me-their-best-ideas-picture-id863497498?s=612x612';
const femImage4 =
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const femImage5 =
  'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const femImage6 =
  'https://media.istockphoto.com/photos/concept-deep-learning-mindfulness-psychology-picture-id1256602998';
const femImage7 =
  'https://images.unsplash.com/photo-1567113463224-37cf03ba4577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80';
const femImage8 =
  'https://media.istockphoto.com/photos/feelings-for-my-soul-picture-id637492768?s=612x612';

export default function ProductSimple() {
  return (
    <div>
      <Stack spacing={2}>
        <h1
          style={{
            fontSize: 35,
            textAlign: 'center',
            textDecoration: 'underline',
          }}
        >
          <strong>Services we offer</strong>
        </h1>
        <SimpleGrid columns={3} spacing={10}>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage0})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage0}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 1
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text color={'2D2D34'} fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage1})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage1}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 2
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage2})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage2}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 3
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage3})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage3}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 4
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage4})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage4}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 5
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage5})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage5}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 6
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage6})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage6}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 7
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage7})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage7}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 8
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="FDF8F1" width={80}>
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${femImage8})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={femImage8}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'2D2D34'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Fem Entity's
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Service 9
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      $Current price
                    </Text>
                    <Text textDecoration={'line-through'} color={'2D2D34'}>
                      $Original price
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
        <Button colorScheme="blue">Contact a consultant</Button>
      </Stack>
    </div>
  );
}
