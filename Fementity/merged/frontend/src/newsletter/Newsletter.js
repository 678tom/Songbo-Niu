import {
  Center,
  CircularProgress,
  Container,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import SubscribeInput from './SubscribeInput';
import { ArticleCard } from './ArticleCard';

export default function Newsletter() {
  //Commented out, this is not done development. Used a temperary "Coming Soon!" message until development can be finished
  return (
    // <Container maxW="container.md" centerContent>
    //   <img
    //     src="https://via.placeholder.com/300.png/09f/fff"
    //     alt="Placeholder"
    //   />
    //   <Heading as={'h1'} size="4xl" py={6} textAlign={'center'}>
    //     Welcome to our Newsletter!
    //   </Heading>
    //   <SubscribeInput />
    //   <Text>No spam ever! We pinky promise.</Text>
    //   <Heading as="h2" size="md" py={6}>
    //     Our newsletter is a weekly newsletter which discusses _____________
    //   </Heading>
    //   <Heading as="h3" size="md" py={6}>
    //     Wearing Pants? Let's go!
    //   </Heading>
    //   <Center>
    //     <CircularProgress isIndeterminate color="primary" size="50px" />
    //   </Center>
    //   <Wrap spacing="30px" marginTop="5" justify="center">
    //     <ArticleCard />
    //     <ArticleCard />
    //     <ArticleCard />
    //     <ArticleCard />
    //   </Wrap>
    // </Container>


    //Temporary coming soon message
    <Text
      color={'#B97375'}
      // alignSelf={'center'}
      fontFamily={'heading'}
      fontSize={'5xl'}
      fontWeight={500}
      // justifyContent={'center'}
      padding={'10%'}
      margin={'auto'}
      >
        Coming Soon!
    </Text>
  );
}
