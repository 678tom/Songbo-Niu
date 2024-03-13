import React from 'react';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddHeartIcon from '@mui/icons-material/Loyalty';


const IMAGE =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

export default function individualService() {
  return (

    <div>
      <div>
         <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Fem Entity's  
          </Text>  
          <Heading fontSize={'4xl'} fontFamily={'body'} fontWeight={500}>
            Product
          </Heading>
      </div>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}>
      <Stack spacing={3}>
        <Center py={12}>
          <Stack
            role={'group'}
            p={6}
            maxW={'fit'}
            w={'full'}
            //bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            direction={'row'}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={300}
              objectFit={'cover'}
              src={IMAGE}
              align={'center'}
            />
            
            <Stack pt={10} direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                <Text fontWeight={800} fontSize={'xl'}>
                  $Current
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $Original
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nisi in sapien malesuada accumsan. Morbi eros nunc, aliquet sit amet velit mollis, maximus tincidunt nunc. Pellentesque ornare facilisis bibendum. Aenean consectetur nibh ut tincidunt dignissim. Ut ornare, justo ac fermentum dictum, est massa blandit purus, non laoreet dolor orci sit amet ipsum. Donec sed ligula orci. Aenean congue porta libero, ac tristique massa vehicula at. In hac habitasse platea dictumst. 
                </Text>
            </Stack>            
          </Stack>
        </Center>
        <Button colorScheme="blue"><AddHeartIcon />Add to Wishlist</Button>
        <Button colorScheme="blue" aria-label="add to shopping cart"><AddShoppingCartIcon /> Add to cart </Button>        
      </Stack>
      </div>
    </div>
    
  );
}