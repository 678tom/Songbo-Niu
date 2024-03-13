import React from 'react';
import { Divider, HStack, SimpleGrid } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Spacer,
  extendTheme,
} from '@chakra-ui/react';
import pic1 from '../storefront/LVLUP_firstSection.jpg';
import CallToAction from '../home/CallToAction';
import { InstagramEmbed } from 'react-social-media-embed';
import ContactForm from '../about/ContactForm'
import Page from '../app/Page';
import { LoadingMessage } from '../app/LoadingMessage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link as RouteLink, Routes, Route } from 'react-router-dom';
import StepsGuideWithButton from '../guide/StepsGuideWithButton';
import StepsGuideWithOutButton from '../guide/StepsGuideWithOutButton';
import { lazy, Suspense } from 'react';

//1st section step guide
const StepsGuide1 = "DECLUTTER YOUR CLOSET!";
const StepsGuide2 = "REACH OUT TO US TO HAVE IT PICKED UP";
const StepsGuide3 = "WE SORT & PUT YOUR CLOSET INTO INVENTORY WE WORK TO SELL IT WITHIN 3 MONTHS";
const StepsGuide4 = "AFTER 3 MONTHS YOU RECEIVE 40% OF ALL PROFITS MADE FROM YOUR CLOSET. ANY THING THAT ISN'T SOLD IS DONATED TO LOCAL HOMELESS SHELTERS. REFUGEES OR NEW IMMIGRANTS";

//3th section prepare for donations
const stepPrepare1 = "DECLUTTER YOUR CLOSET OF ANYTHING YOU DON'T WANT OR NEED"


export default function LVLUPGuidePage() {
    return(
        <Stack layerStyle="pageLayout" alignItems="center" flexWrap="wrap" px={4}>  
          <Text fontSize={'6xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>LVLUP BOUTIQUE</Text>
          <p><br></br></p>
          <Flex minWidth='max-content' alignItems='center' gap='0'>
              <Box flex='1'  style={{alignSelf: "stretch"}}>
              <StepsGuideWithButton
              title={'Step 1:'} 
              text={StepsGuide1} 
              linkAddress= {"/"} /**Now link to nothing. Have to create learn more page later. When create page later. Create a new constant at the top of the page and link it to the new page */
              btnTitle={'CLOTHING CONSIGNMENT & DONATION GUIDE'}
              />
              </Box>
              <Box flex='1'  style={{alignSelf: "stretch"}}>
              <StepsGuideWithButton
                  title={'Step 2:'} 
                  text={StepsGuide2} 
                  linkAddress= {"/"} /**Now link to nothing. Have to create learn more page later. When create page later. Create a new constant at the top of the page and link it to the new page */
                  btnTitle={'CONTACT US'}
                  />
              </Box>
          </Flex>
          <Flex minWidth='max-content' alignItems='center' gap='0'>
              <Box flex='1'  style={{alignSelf: "stretch"}}>
              <StepsGuideWithOutButton
              title={'Step 3:'} 
              text={StepsGuide3} 
              linkAddress= {"/"} /**Now link to nothing. Have to create learn more page later. When create page later. Create a new constant at the top of the page and link it to the new page */
              btnTitle={'COLOTHING CONSIGNMENT & DONATION GUIDE'}
              />
              </Box>
              <Box flex='1'  style={{alignSelf: "stretch"}}>
              <StepsGuideWithOutButton
                  title={'Step 4:'} 
                  text={StepsGuide4} 
                  linkAddress= {"/"} /**Now link to nothing. Have to create learn more page later. When create page later. Create a new constant at the top of the page and link it to the new page */
                  btnTitle={'CONTACT US'}
                  />
              </Box>
          </Flex>
          <p><br></br><br></br></p> 
          <Text fontSize={'4xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>CLOTHING <u>CONSIGNMENT & DONATION</u> GUIDE</Text>
          <p><br></br></p>
          <Flex minWidth='max-content' alignItems='center' gap='0'>
            
            <Box flex='1'  style={{alignSelf: "stretch"}} textAlign='center'  fontFamily={'heading'}>
              <Text fontSize={'2xl'} color={'#B97375'} fontWeight={400}  textDecoration={'underline'}>WHAT WE ACCEPT</Text>
              <Text fontSize={'2xl'} fontWeight={400} >CLOTHES WITH TAGS OR ARE GENTLY USED</Text>
              <Text fontSize={'2xl'} fontWeight={400} >WEDDDING DRESSES</Text>
              <Text fontSize={'2xl'} fontWeight={400} >BUSSINESS ATTIRE</Text>
              <Text fontSize={'2xl'} fontWeight={400} >HANDBAGS</Text>
              <Text fontSize={'2xl'} fontWeight={400} >JACKETS & COATS</Text>
            </Box>
              <Divider orientation='vertical' borderWidth= 'px' borderStyle= "dashed" borderRadius= '0' borderColor= 'black'/>  
            <Box flex='1'  style={{alignSelf: "stretch"}}  textAlign='center'  fontFamily={'heading'}>
            <Text fontSize={'2xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'} textDecoration={'underline'}>WHAT WE DON'T ACCEPT</Text>
              <Text fontSize={'2xl'} fontWeight={400} >DAMAGED OR STAINED CLOTHING</Text>
              <Text fontSize={'2xl'} fontWeight={400} >UNDERGARMENTS: BAR'S UNDERWEAR, SHAPEWEAR</Text>
              <Text fontSize={'2xl'} fontWeight={400} >CONSTRUCTION CLOTHING, GEAR</Text>
              <Text fontSize={'2xl'} fontWeight={400} >BABY, CHILDREN OR PET CLOTHES</Text>
              <Text fontSize={'2xl'} fontWeight={400} >SKI PANTS, SCARFS, GLOVES, HATS</Text>
            </Box>
          </Flex>
          <p><br></br><br></br></p>
          <Text fontSize={'4xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>HOW TO PREPARE FOR YOUR DONATION</Text>
          <p><br></br></p>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box flex='1' style={{alignSelf: "stretch"}}>
                <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'center'}>
                    <Text fontSize={'5xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>STEP 1:</Text>
                    <Text fontSize={'2xl'} fontWeight={400} align={'center'} fontFamily={'heading'}>DECLUTTER YOUR CLOSET OF ANYTHING YOU DON'T WANT OR NEED</Text>
                </Box>
              </Box>
              <Box flex='1'  style={{alignSelf: "stretch"}}>
                <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'center'}>
                      <Text fontSize={'5xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>STEP 2:</Text>
                      <Text fontSize={'2xl'} fontWeight={400} align={'center'} fontFamily={'heading'}>WASH ALL GERMENTS ACCORDING TO THE CARE INSTRUCTIONS</Text>
                </Box>
              </Box>
            </Flex>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box flex='1' style={{alignSelf: "stretch"}}>
                  <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'center'}>
                      <Text fontSize={'5xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>STEP 3:</Text>
                      <Text fontSize={'2xl'} fontWeight={400} align={'center'} fontFamily={'heading'}>REMOVE ANY ITEMS WITH STAINS, TEARS. OR PET DANDER & EMPTY POCKETS</Text>
                  </Box>
                </Box>
                <Box flex='1'  style={{alignSelf: "stretch"}}>
                  <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'center'}>
                        <Text fontSize={'5xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>STEP 4:</Text>
                        <Text fontSize={'2xl'} fontWeight={400} align={'center'} fontFamily={'heading'}>MESSAGE LVL UP TO ARRANGE FOR A PICK UP TIME.</Text>
                  </Box>
                </Box>
            </Flex>
          {/* <Text fontSize={'4xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>CLOTHING CONSIGNMENT & DONATION GUIDE</Text> */}
          <HStack direction='row'  spacing='50px'>
              <Box alignItems="center">
              <Text fontSize={'5xl'} color={'#B97375'} fontWeight={300} fontFamily={'heading'} paddingTop={'1em'}  textAlign={'center'}>@LVL.UP.NS</Text>
              <InstagramEmbed url="https://www.instagram.com/p/CjimeWVJ8bJ/?igshid=NDc0ODY0MjQ=" width={328}/>
              </Box>
              <Box alignItems="center">
              <Text fontSize={'5xl'} fontWeight={100} fontFamily={'heading'} color='#B97375' textAlign={'center'}>CONTACT US</Text>
              <ContactForm />  
              </Box>
          </HStack>   
        </Stack>
      )
  }