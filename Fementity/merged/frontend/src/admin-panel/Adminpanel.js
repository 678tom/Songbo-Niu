import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  Stack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';

import { Button, Flex, List } from '@chakra-ui/react';

function adminPanel() {
  return (
    <Flex align-items="center" paddingBottom="50px">
      <ProSidebarProvider>
        <Sidebar backgroundColor={'#e4c5c2'} padding-bottom={'60px'}>
          <Menu>

          <Center>
            <Text
              color={'#B97375'}
              alignSelf={'center'}
              fontFamily={'heading'}
              fontSize={'2xl'}
              fontWeight={500}
              alignContent={'center'}
              justifyContent={'center'}
              padding={'10%'}
              margin={'auto'}
            >
              {' '}
              Admin Panel
            </Text>
            </Center>

            {/* profile pictures and names does not work for online or offiline alerts */}

            <div justifyContent={'center'}>
              <Wrap justify={'center'}>
                <WrapItem>
                  <Center>
                    <Avatar
                      name="Admin Name"
                      src="https://bit.ly/broken-link"
                    />
                  </Center>
                </WrapItem>
              </Wrap>
            </div>

            <Center>
            <Text
              color={'#B97375'}
              alignSelf={'center'}
              fontFamily={'heading'}
              fontSize={'2xl'}
              fontWeight={500}
              alignContent={'center'}
              justifyContent={'center'}
              padding={'10%'}
              margin={'auto'}
            >
              {' '}
              Menu
            </Text>
            </Center>

            <SubMenu label="Overview">
              <MenuItem> Website Activity </MenuItem>
              <MenuItem> Sales </MenuItem>
              <MenuItem> Marketing </MenuItem>
            </SubMenu>

            <SubMenu label="Members">
              <MenuItem> Members Overview </MenuItem>
              <MenuItem> Active Members </MenuItem>
              <MenuItem> New Members Forms </MenuItem>
            </SubMenu>

            <SubMenu label="Directory">
              <MenuItem> Directory Overview </MenuItem>
              <MenuItem> New Directory Forms </MenuItem>
              <MenuItem> New Colab Forms </MenuItem>
            </SubMenu>

            <SubMenu label="Calendar">
              <MenuItem> Events Overview </MenuItem>
              <MenuItem> Add New Event </MenuItem>
              <MenuItem> Attendance Report </MenuItem>
            </SubMenu>

            <SubMenu label="LVLUP BTQ">
              <MenuItem> Shop Overview </MenuItem>
              <MenuItem> Add New Product </MenuItem>
              <MenuItem> Inventory </MenuItem>
            </SubMenu>

            <SubMenu label="LMS">
              <MenuItem> LMS Overview </MenuItem>
              <MenuItem> Add New Course </MenuItem>
              <MenuItem> All Courses </MenuItem>
            </SubMenu>

            {/* launch demo envirnoment button on menu */}
            <Button
              size="sm"
              bgColor="primary"
              color={'black'}
              width="100%"
              padding-bottom={'40px'}
              borderRadius="full"
            >
              LAUNCH DEMO ENVIRONMENT
            </Button>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <Flex
        paddingLeft="125px"
        align-items="center"
        direction={'column'}
        justify={'center'}
        justify-content="center"
        gap={'7'}
        paddingBottom={'2em'}
      >
        {/* 3 boxes on top of webpage */}
        <HStack spacing="120px">
          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'200px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'xl'}
              fontWeight={100}
              align={'center'}
              paddingBottom={'3%'}
            >
              Total Earnings
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'200px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={100}
              align={'center'}
              paddingBottom={'3%'}
            >
              Webpage Activity
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'200px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={100}
              align={'center'}
              paddingBottom={'3%'}
            >
              Member Activity
            </Heading>
          </Box>
        </HStack>

        <Box
          justifyContent={'center'}
          rounded="3xl"
          display={'flex'}
          flexDirection={'column'}
          width={'840px'}
          height={'150px'}
          className={'cta-title-and-text'}
          alignItems={'center'}
          backgroundColor={'#e4c5c2'}
        >
          <Heading
            fontSize={'4xl'}
            fontWeight={500}
            align={'center'}
            paddingBottom={'3%'}
          >
            Sales Overview
          </Heading>
        </Box>

        <HStack spacing="70px">
          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'380px'}
            height={'200px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              High Traction
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'380px'}
            height={'200px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              Sales Breakdown
            </Heading>
          </Box>
        </HStack>

        <Box
          justifyContent={'center'}
          rounded="3xl"
          display={'flex'}
          flexDirection={'column'}
          width={'840px'}
          height={'200px'}
          className={'cta-title-and-text'}
          alignItems={'center'}
          backgroundColor={'#e4c5c2'}
        >
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            align={'center'}
            paddingBottom={'3%'}
          >
            Map of directory members
          </Heading>
        </Box>

        <HStack spacing="30px">
          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'186px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              Instagram
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'186px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              Twitter
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'186px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              Facebook
            </Heading>
          </Box>

          <Box
            justifyContent={'center'}
            rounded="3xl"
            display={'flex'}
            flexDirection={'column'}
            width={'186px'}
            height={'100px'}
            className={'cta-title-and-text'}
            alignItems={'center'}
            backgroundColor={'#e4c5c2'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              align={'center'}
              paddingBottom={'3%'}
            >
              Twitter Activity
            </Heading>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default adminPanel;
