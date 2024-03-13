import React from 'react'
import './Popup.css'
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons';
import { Link as RouteLink, Link } from 'react-router-dom';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        { props.children }
        
        <Box
          boxShadow="lg"
          p={['4', '8']}
          rounded="lg"
          bg="background"
          mx={'auto'}
        >
          <Heading fontFamily={'subheading'} align={'center'}>
            Basic
          </Heading>
          <Text align={'center'}>Free</Text>
          <br></br>

          <RouteLink to="/member-form-free?member=basic">
            <Button
              component={Link}
              to="../member-form/MemberForm"
              backgroundColor={'primary'}
              color={'white'}
              w={['full']}
              aria-label="member-form free"
            >
              Get Started
              <ChevronRightIcon />
            </Button>
          </RouteLink>

          <VStack
            spacing={'3'}
            mt={'40px'}
            align={['flex-start', 'left']}
            w="full"
          >
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> View the Directory</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> View the workshops available</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> Regular entry fee for workshops</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <MinusIcon color={'red.600'} />
              <Text> Princess Membership</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <MinusIcon color={'red.600'} />
              <Text> Queen Membership</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <MinusIcon color={'red.600'} />
              <Text> Empress Membership</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <ChevronRightIcon/>
              <Text> More information coming soon! </Text>
            </HStack>
          </VStack>
        </Box>


      </div>
    </div>
  ) : "";
}

export default Popup
