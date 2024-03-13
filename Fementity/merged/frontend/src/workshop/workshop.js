import { Stack, Text } from '@chakra-ui/react';

import React from 'react';

export default function Workshop() {
  return (
      //We have commented out the storefront content because it is not completed and the website is going live. Needs to be redone/restyled
    <>
      {/* <Stack layerStyle="pageLayout" alignItems="center" flexWrap="wrap" px={4}>
        <Text fontSize={'5xl'} paddingBottom="10px" fontWeight={700}>
          Events & Workshop
        </Text>

        <Text fontSize={'2xl'} paddingTop="10px" fontWeight={700}>
          Calendar
        </Text>
        <Text fontSize={'2xl'} paddingTop="10px" fontWeight={700}>
          Contact Form
        </Text>
      </Stack> */}


    {/*Temporary coming soon message*/}
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
    </>
  );
}
