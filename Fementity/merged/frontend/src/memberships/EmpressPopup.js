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
        {/* Popup for the Empress information, holds more descriptive information about membership perks */}
        
        <Box
          boxShadow="lg"
          p={['4', '8']}
          rounded="lg"
          bg="background"
          mx="auto"
          /*outline={"2px solid lightgreen"}*/
        >
          <Heading fontFamily={'subheading'} align={'center'}>
            Empress
          </Heading>
          <Text align={'center'}>$15.99/mo</Text>
          <br></br>

          <RouteLink to="/member-form?member=empress">
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
            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Queen Membership</Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Unlimited Access to Fem Entity Intro Courses</Text>
                <Text fontSize={'sm'}>Complete access to all 8 Fem Entity Introduction courses based on empowering and balancing your masculine and feminine energy. Complete access to all activity sheets and journaling pages that correspond to the course.</Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> 50% off selected Fem Entity events</Text>
                <Text fontSize={'sm'}> As a ‘Thank You’ for choosing to invest in your inner self and joining this empowering community, you’ll receive 50% off entrance ticket prices for large scale events. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Early registration to workshops and events</Text>
                <Text fontSize={'sm'}> Save your spot in advance for upcoming Fem Entity workshops and events. </Text>
              </VStack>
            </HStack>
            
            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Monthly LIVE Group calls</Text>
                <Text fontSize={'sm'}> You are automatically invited to monthly LIVE group calls with the Fem Entity founders and other empress members! Build connections and networks with other like-minded individuals looking to find their own inner peace and self discovery. </Text>
              </VStack>
            </HStack>
            
          </VStack>
        </Box>

      </div>
    </div>
  ) : "";
}

export default Popup
