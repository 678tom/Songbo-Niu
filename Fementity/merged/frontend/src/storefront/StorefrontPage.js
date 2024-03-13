import React from 'react';
import { Divider, HStack, Link, SimpleGrid } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import {Box, Center, useColorModeValue, Heading, Text, Stack, Image, Flex, Spacer, extendTheme, Button} from '@chakra-ui/react';
import pic1 from '../storefront/LVLUP_firstSection.jpg';
import CallToAction from '../home/CallToAction';
import { InstagramEmbed } from 'react-social-media-embed';
import ContactForm from '../about/ContactForm'
import Page from '../app/Page';
import { LoadingMessage } from '../app/LoadingMessage';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';
import StepsGuideWithButton from '../guide/StepsGuideWithButton';
import StepsGuideWithOutButton from '../guide/StepsGuideWithOutButton';
import { lazy, Suspense } from 'react';
import Carousel2 from 'react-elastic-carousel';
import Item from "./Item";
//Inlink pages



const Section1Text1 = "LVLUP IS AN UPCYCLING & CONSIGNMENT BOUTIQUE WITH THE MISSION OF REDUCING CLOTHING WASTE BY FINDING NEW HOMES FOR CLOTHES FOR RECYCLING THEM INTO UNIQUE PIECES";
const StepsGuide1 = "DECLUTTER YOUR CLOSET!";
const StepsGuide2 = "REACH OUT TO US TO HAVE IT PICKED UP";
const StepsGuide3 = "WE SORT & PUT YOUR CLOSETINTO INVENTORY WE WORK TO SELL IT WITIN 3 MONTHS";
const StepsGuide4 = "RAFTER 3 MONTHS YOU RECEIVE 40% OF ALLPROFITS MADE FROM YOUR CLOSET. ANY THING THAT IS'T SOLD IS DONATED TO LOCAL HOMELESS SHELTERS. REFUGEES OR NEW IMMIGRANTS";






export default function storefrontPage() {
  return(
      <Flex 
      layerStyle="pageLayout" 
      alignItems="center" 
      flexWrap="wrap" 
      direction="column"  
      alignContent="center"
      justyfyContent="center"
      justyfyItems="center"
      px={4}
      >
        {/* Start of heading */}
        <Text 
        textAlign={'center'} 
        fontSize={['4xl','5xl','6xl', '6xl']} 
        color={'#B97375'} 
        fontWeight={400} 
        fontFamily={'heading'}>
          LVLUP BOUTIQUE
        </Text>
        <Text 
        textAlign={'center'} 
        color={'#B97375'} 
        paddingBottom={'50px'} 
        fontSize={['1xl','1xl','2xl','2xl']}>
          REPURPOSING, RECYCLING, AND REHOMING FASHION</Text>
        {/* End of heading */}

        {/*Photo & CTA 1 and 2*/}
        <CallToAction
            imgSource={pic1}
            title={''} /**Section 1 of Level up Boutique */
            text={Section1Text1}
            direction={['column','column','column','row']}
            justifyContent="space-between"
            alignItems="stretch"
            alt={'five people laughing'}
            linkAddress= {'guide-page'} /**Now link to nothing. Have to create leanr more page later. When create page later. Create a new constant at the top of the page and link it to the new page */
            btnTitle={'Learn More'}/>
        <>
          <Flex
              direction={["column"]}
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
                  New Arrivals
                </Text>
              </Center>


              <div style={{height: 425, margin: "0 30px"}}>
                <Carousel2 itemsToShow={3} itemsToScroll={3} height={200} isRTL={false}>
                  <Item>1</Item>
                  <Item>2</Item>
                  <Item>3</Item>
                  <Item>4</Item>
                  <Item>5</Item>
                  <Item>6</Item>
                </Carousel2>
              </div>

              
            </div>

        
              <Flex
                  alignItems='center' gap='2'
                  direction={['column','column','column','row','row']}
                  layerStyle="pageLayout"
                  justifyContent={'center'}
                  alignContent={"center"}
                  spacing={50}

              >
                {/* <div style={{ width: [200,300,400,600], height: 'auto', margin: "0 30px 10px" }}> */}
                <Box w={['100%','100%','70%','50%']}>
                  <Carousel2 
                  itemsToShow={1} 
                  isRTL={false}
                  >
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                  </Carousel2>
                {/* </div> */}
                <Spacer/>
                </Box>

                <SimpleGrid columns={[2, null, 1]} spacing='10px'>
                  <Center>
                    {/* Consigned Closet Section */}
                    <Text
                        marginLeft={'45px'}
                        marginRight={'45px'}
                        fontSize={['2xl', '3xl', '4xl','4xl']}
                        textAlign={'center'}
                        fontWeight={40}
                        paddingTop={'5'}
                        color='#B97375'
                    >
                      Consigned Closet
                    </Text>
                  </Center>


                  {/*Creating Route link to shop page*/}
                  <Center>
                    {/* Link to be added */}
                    <RouteLink
                        to="/"
                    >
                      <Button
                      className='cta-btn' 
                      // minHeight={'70px'} 
                      width={['70%', '70%', '100%','100%']} 
                      bg={'#B97375 '} 
                      color={'white'} 
                      _hover={'#B97375 '} 
                      height={'min-content'} 
                      fontSize={['1xl', '2xl', '2xl','3xl']} 
                      fontWeight={400} 
                      fontFamily={'heading'} 
                      whiteSpace={'normal'}
                      marginBottom={'20px'}>
                      
                        <Text
                            padding={3}
                            fontSize={['1xl','2xl','3xl','4xl','5xl']}
                            fontWeight={300}
                            textAlign={'center'}
                            fontFamily={'heading'}
                            color={'white'}
                            backgroundColor={'#B97375'}
                        >
                          Shop Now
                        </Text>
                      </Button>
                    </RouteLink>
                  </Center>
                </SimpleGrid>
              </Flex>
              {/* End Consigned Closet Section */}

            <div>
              <Flex
                  alignItems='center' gap='2'
                  direction={['column','column','column','row','row']}
                  layerStyle="pageLayout"
                  justifyContent={'center'}
                  alignContent={"center"}
                  spacing={50}
              >
                <SimpleGrid columns={[2, null, 1]} spacing='10px'>
                  <Center>
                    {/* Upcycled Pieces Section */}
                    <Text
                        marginRight={'45px'}
                        marginLeft={'45px'}
                        textAlign={'center'}
                        fontSize={['2xl', '3xl', '4xl','4xl']}
                        fontWeight={40}
                        paddingTop={'5'}
                        color='#B97375'
                    >
                      Upcycled Pieces
                    </Text>
                  </Center>

                  {/*Creating Route link to shop page*/}

                  <Center>
                    <RouteLink
                        // Link to be added
                        to="/"
                    >
                      <Button
                      className='cta-btn' 
                      // minHeight={'70px'} 
                      width={['70%', '70%', '100%','100%']} 
                      bg={'#B97375 '} 
                      color={'white'} 
                      _hover={'#B97375 '} 
                      height={'min-content'} 
                      fontSize={['1xl', '2xl', '2xl','3xl']} 
                      fontWeight={400} 
                      fontFamily={'heading'} 
                      whiteSpace={'normal'}>
                        <Text
                            padding={3}
                            fontSize={['1xl','2xl','3xl','4xl','5xl']}
                            fontWeight={300}
                            textAlign={'center'}
                            fontFamily={'heading'}
                            color={'white'}
                            backgroundColor={'#B97375'}
                        >
                          Shop Now
                        </Text>
                      </Button>
                    </RouteLink>
                  </Center>
                </SimpleGrid>
                {/* <div style={{ width: 600, height: 400, margin: "0 30px 10px" }}> */}
                <Box w={['100%','100%','70%','50%']}>
                <Carousel2 
                  style={{width: ['500px','600px','700px','700px']}}
                  itemsToShow={1} 
                  isRTL={false}
                  >
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                  </Carousel2>
                {/* </div> */}
                <Spacer/>
                </Box>
              </Flex>
            </div>
            <div>
              <Center>
                {/* On Sale Items Section */}
                <Text
                    fontSize={['4xl', '5xl', '6xl','7xl']}
                    fontWeight={50}
                    paddingTop={'5'}
                    color='#B97375'
                    >
                  On Sale
                </Text>
              </Center>


              <div style={{height: 425}}>
                <Carousel2 itemsToShow={3} isRTL={false}>
                  <Item>1
                    {/* <img
                        src={"https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?s=612x612"}
                      /> */}
                  </Item>
                  <Item>2</Item>
                  <Item>3</Item>
                  <Item>4</Item>
                  <Item>5</Item>
                  <Item>6</Item>
                </Carousel2>
              </div>
              <Spacer/>
            </div>
          </Flex>
        </>
        <Text
            textAlign={'center'}
            fontSize={'4xl'}
            color={'#B97375'}
            fontWeight={400}
            fontFamily={'heading'}
            paddingTop={'1em'}
        >FOLLOW LVLUP ON INSTAGRAM
        </Text>
        <InstagramEmbed url="https://www.instagram.com/p/CUkXcA7rrfU/?hl=en" width={328}/>
      </Flex>
  )
}

