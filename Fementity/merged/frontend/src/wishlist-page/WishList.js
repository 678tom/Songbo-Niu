import {
  Box, Center,
  Flex,
  Heading,
  HStack,
  Link,
  Stack, Text,
  useColorModeValue as mode, VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { CartItem, WishListItem } from './WishListItem'
import { wishListData } from './_wishListData'
import Carousel from 'react-elastic-carousel'
import Item from "./item";




export default function wishList() {
  return(
  <Box
        
      maxW={{
          base: '6xl',
          lg: '100%',
      }}
      mx="auto"
      px={{
          base: '4',
          md: '8',
          lg: '12',
      }}
      py={{
          base: '6',
          md: '8',
          lg: '12',
      }}

  >
      <Stack
          direction={{
              base: 'column',
              lg: 'row',
          }}
          align={{
              lg: 'flex-start',
          }}
          spacing={{
              base: '8',
              md: '16',
          }}
      >
          <Stack
              spacing={{
                  base: '8',
                  md: '10',
              }}
              flex="2"
          >
              <Heading fontSize="4xl" fontWeight="200" color={'#b97375'} fontStyle={'Versailles'} borderBottom="2px solid" borderBottomColor="primary">
                  Wish List (3 items)
              </Heading>

              <Stack spacing="6" borderBottom="2px solid" borderBottomColor="primary" paddingBottom={'20px'}>
                  {wishListData.map((item) => (
                      <WishListItem key={item.id} {...item} />
                  ))}
              </Stack>
          </Stack>
      </Stack>
      <Stack
        width={'100%'}
          padding = '20px'
          spacing={{
              base: '10',
              md: '20',
          }}
          flex="2"
      >

      <Stack
          direction={{
              base: 'column',
              lg: 'row',
          }}
          align={{
              lg: 'flex-start',
          }}
          spacing={{
              base: '8',
              md: '16',
          }}
          
      >     
      </Stack>
      <div style={{height: 500, margin: "0 50px"}}>
                <Carousel itemsToShow={4} itemsToScroll={1} height={200} width={'100%'}>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                  </Carousel>
              </div> 
      </Stack>
  </Box>
  );
}


