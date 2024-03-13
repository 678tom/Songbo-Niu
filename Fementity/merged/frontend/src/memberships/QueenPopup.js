import React from 'react'
import './Popup.css'
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon, CheckIcon,} from '@chakra-ui/icons';
import { Link as RouteLink, Link } from 'react-router-dom';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        { props.children }
        {/* Popup for the Queen information, holds more descriptive information about membership perks */}

        <Box
          boxShadow="lg"
          p={['4', '8']}
          rounded="lg"
          bg="background"
          mx={'auto'}
        >
          <Heading fontFamily={'subheading'} align={'center'}>
            Queen
          </Heading>
          <Text align={'center'} fontWeight={'bold'}>
            $10.99/mo
          </Text>
          <br></br>

          <RouteLink to="/member-form?member=queen">
            <Button
              component={Link}
              to="../member-form/MemberForm"
              backgroundColor={'primary'}
              color={'white'}
              w={['full']}
              aria-label="member-form paid"
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
            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Princess Membership</Text>
                <Text fontSize={'sm'}></Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> FREE "Find your Movement" class</Text>
                <Text fontSize={'sm'}>A free pass to any Fitness Studio from our ‘Find Your Movement’ workshop series. 4 Fem Entity Courses</Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> 4 Fem Entity courses</Text>
                <Text fontSize={'sm'}> Choose 4 from the 8 Fem Entity Introduction courses based on empowering and balancing your masculine and feminine energy. Includes any activity sheets and journaling pages that correspond to the course. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Exclusive promo codes for fitness studios</Text>
                <Text fontSize={'sm'}>As a ‘Thank You’ for choosing to invest in yourself and joining such an empowering community, our Directory members have offered a variety of discount codes that you are welcome to use on their products or services.</Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Access to workshops and events</Text>
                <Text fontSize={'sm'}>Receive notifications of events and workshops coming up before the public. Check out our events calendar for details.</Text>
              </VStack>
            </HStack>

          </VStack>
        </Box>
        
      </div>
    </div>
  ) : "";
}

export default Popup
