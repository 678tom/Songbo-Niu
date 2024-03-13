import {Box, Center, Button, Container, Heading, Text, Wrap, Stack, Image, HStack, Flex, Spacer} from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink} from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import Carousel2 from 'react-elastic-carousel'
import Item from './item';
import ImageGallaryComponent from './image-gallery.component.js';


export default function productPage(){
  
    return(
      
      <Box>
        <Stack
          mb={'10'}
          spacing={'24px'}
          direction={["column", "row"]}
          alignItems={["center", "normal"]}
        >
          <Wrap justify={"center"}>

            <Box
              w={['500px']}
              p={['4', '8']}
              rounded="lg"
              bg="background"
              mx={'auto'}
            >
              
              <div className="Gallery">
                <ImageGallaryComponent />
              </div>

            </Box>

            <Box
              w={['600px']}
              p={['4', '8']}
              rounded="lg"
              bg="background"
              mx={'auto'}
              justifyContent='center'
            >
              <Heading fontFamily={'subheading'} align={'center'} mb={5}>
                Double Wool Blend Coat
              </Heading>
              <spacer />
              <text padding={'8'}>
                Price: $59.99 | Size: Large
              </text>
              <br></br>
              <br></br>
              {/* Sample Text */}
              <text mb={5}>
              Coat made of wool blend fabric. Lapel collar and long sleeves with shoulder pads. Front flap pockets. Back vent. Front double breasted button closure.
              </text>
              <br></br>
              <HStack
                justifyContent={'space-evenly'}
              >
                <RouteLink to="/product-page">
                  <Button marginLeft={8} marginTop={5} bg="background" boxShadow={'lg'} backgroundColor='#B97375'>
                    Add to cart <BsCart3 size="22px" />
                  </Button>
                </RouteLink>
              <RouteLink to="/wishlist-page">
                <Button marginLeft={8} marginTop={5} bg="background" boxShadow={'lg'} backgroundColor='#B97375'>
                  Add to wishlist <BsBookmarkHeart size="22px" />
                </Button>
              </RouteLink>
            </HStack>
            </Box>

            <Flex
              direction={"column"}
              layerStyle="pageLayout"
              alignContent="center"
              justifyContent="center"
              justifyItems="center"
              spacing={15}
            >
              <div>         
                <Center>
                  {/* New Arrivals Items */}
                  <Text
                    fontSize={['4xl', '5xl', '6xl','7xl']}
                    fontWeight={100}
                    paddingBottom={'5'}
                    paddingTop={'5'}
                    color='#B97375'
                  >
                    Recommended for you
                  </Text>
                </Center>
                
                  
                <div style={{height: 425, margin: "0 30px"}}>
                  <Carousel2 itemsToShow={3} itemsToScroll={3} height={100}>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                  </Carousel2>
                </div>
              </div>
            </Flex>

          </Wrap>
        </Stack>
      </Box>

    );
}