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
        {/* Popup for the Princess information, holds more descriptive information about membership perks */}
        
        <Box
          boxShadow="lg"
          p={['4', '8']}
          rounded="lg"
          bg="background"
          mx={'auto'}
        >
          <Heading fontFamily={'subheading'} align={'center'}>
            Princess
          </Heading>
          <Text align={'center'} fontWeight={'bold'}>
            $5.99/mo
          </Text>
          <br></br>

          <RouteLink to="/member-form?member=princess">
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
            w="full"
          >
            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Peronsal Yoni Page </Text>
                <Text fontSize={'sm'}> The Yoni is known as “the source”, making your yoni page your portal into the source. Keep track of your course progress, your favorite small businesses and workshop or events you want to attend. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Complimentary 30 minute consultation </Text>
                <Text fontSize={'sm'}> Schedule a 1:1 consultation with either Mukisa or Irene to jump start your self-care journey and dive into all that entails in a Fem Entity membership! </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Personalized Astrology profile </Text>
                <Text fontSize={'sm'}> View your sun, moon and rising sign at the top of your profile page. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> 2 Fem Entity courses </Text>
                <Text fontSize={'sm'}> Choose 2 from the 8 Fem Entity Introduction courses based on empowering and balancing your masculine and feminine energy. Includes any activity sheets and journaling pages that correspond to the course.  </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Monthly affirmations </Text>
                <Text fontSize={'sm'}> Receive affirmations right to your inbox to align your upcoming month’s goals and purpose. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Access to activity sheets</Text>
                <Text fontSize={'sm'}> Self-awareness and self care activity sheets that help to visualize and track your self discovery journey. These pages can be found in your Yoni Portal. </Text>
              </VStack>
            </HStack>

            <HStack w={'full'} align={'baseline'}>
              <CheckIcon color={'accent2'} />
              <VStack align={'baseline'}>
                <Text> Quizzes </Text>
                <Text fontSize={'sm'}> Quick, fun, and informative quizzes based on exploring your self-awareness  that you can do yourself or with your friends. These can be found in your Yoni Portal.  </Text>
              </VStack>
            </HStack>

          </VStack>
        </Box>


      </div>
    </div>
  ) : "";
}

export default Popup
