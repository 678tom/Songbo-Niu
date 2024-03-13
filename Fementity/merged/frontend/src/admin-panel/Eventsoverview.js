import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, Text, Heading } from '@chakra-ui/react';

import {
  Button,
  Flex,
} from '@chakra-ui/react';


function eventsOverview(){
    return(

  <Flex align-items="center" paddingBottom="50px">
    <ProSidebarProvider>
      <Sidebar 
        backgroundColor={'#e4c5c2'}
        padding-bottom={'60px'}
      >


    <Menu>
      <Text color={'#B97375'}
      alignSelf={'center'}
      fontFamily={'heading'}
      fontSize={'4xl'}
      fontWeight={500}
      alignContent={'center'}
      justifyContent={'center'}
      padding={'10%'}
      margin={'auto'} > Admin Panel 
      </Text>
      



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

    <Button size="sm" bgColor="primary" color={'white'} width="100%" padding-bottom={'60px'}
>
          LAUNCH DEMO ENVIRONMENT
        </Button> 
  </Menu>
</Sidebar>
</ProSidebarProvider>


<Flex paddingLeft="250px" align-items="center" direction={'column'} justify={'center'} justify-content="center" gap={'20'} paddingBottom={'2em'}>


        <Box rounded="md" display={'flex'} flexDirection={'column'} width={'600px'} height={'300px'} className={'cta-title-and-text'} alignItems={'center'} backgroundColor={"#e4c5c2"}>
            <Heading fontSize={'4xl'} fontWeight={500} align={'center'} paddingBottom={'3%'}>Events Overview</Heading>
            <Text fontSize={'2xl'} fontWeight={400} align={'center'}>●	Popular Events</Text>
            <Text fontSize={'2xl'} fontWeight={400} align={'center'}>●	Most recent purchases</Text>
            <Text fontSize={'2xl'} fontWeight={400} align={'center'}>●	Conversion Rates</Text>
        </Box>

        <Box rounded="md" display={'flex'} flexDirection={'column'} width={'600px'} height={'300px'} className={'cta-title-and-text'} alignItems={'center'} backgroundColor={"#e4c5c2"}>
            <Heading fontSize={'4xl'} fontWeight={500} align={'center'} paddingBottom={'3%'}>Add New Events</Heading>

        </Box>

        <Box rounded="md" display={'flex'} flexDirection={'column'} width={'600px'} height={'400px'} className={'cta-title-and-text'} alignItems={'center'} backgroundColor={"#e4c5c2"}>
            <Heading fontSize={'4xl'} fontWeight={500} align={'center'} paddingBottom={'3%'}>Attendance Reports</Heading>

        </Box>
    </Flex>

</Flex>


    );
}

export default eventsOverview;