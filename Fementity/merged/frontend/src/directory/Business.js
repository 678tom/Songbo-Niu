import React, { useState } from 'react';
import {Button, Icon, Text, IconButton, VStack} from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiInstagram, SiInternetexplorer, SiYoutube, SiSpotify, SiTwitter } from 'react-icons/si';
import {AvatarBadge, AvatarGroup, HStack} from '@chakra-ui/react';
import Carousel2 from 'react-elastic-carousel'



import FullCalendar from '@fullcalendar/react'; // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import 'react-calendar/dist/Calendar.css';

import {
  Heading,
  Box,
  Flex,
  Avatar,
  Link,
  WrapItem,
  Image,
  Wrap,
  Stack,
  Center,
} from '@chakra-ui/react';
import Carousel from "bootstrap/js/src/carousel";
import {LinkIcon} from "@chakra-ui/icons";
import Item from "../storefront/Item";


export default function Home() {
  const myWidth = useState(window.innerWidth);
  const [value, onChange] = useState(new Date());

  return (
      <>

        <Flex
            direction="column"
            minHeight="100vh"
            minWidth="-webkit-fill-available"
            bgColor={'background'}
        >
          <Center>
            <Image

                src="/images/femLogo.png"
                boxSize="200px"
                align={'center'}
            ></Image>
          </Center>


          <Stack

              backgroundColor={'background'}
              shadow="xl"
              borderColor={'primary'}
              borderWidth="2px"
              pb={'0px'}
          >
            <Center

                padding={'20px'}
            >
              <Text color={"primary"} fontSize={'4xl'} >Fem Entity</Text>
            </Center>

            <Flex
                width={'100%'}
            >

              <Avatar bg='background' padding={'10px'}  size={'2xl'}  src='/images/femLogo.png' />{' '}



              <Center>
                <Flex direction={'column'} padding={'10px'} width={'60%'}>
                  <Stack
                      w={'100%'}
                      pt={'2vh'}
                      pb={'1vh'}
                      backgroundColor={"primary"} color={"Background"}

                  >
                    <Center>
                      <h2>About Us <Icon> </Icon></h2>
                    </Center>
                  </Stack>
                  <Box
                      w={'100%'}
                      borderWidth="1px"
                      shadow="xl"
                      padding={'10px'}
                  >
                    <Center>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </Center>
                  </Box>
                </Flex>
              </Center>





              <Wrap padding={'10px'}>
                <WrapItem>
                  {/* Website */}
                  <IconButton as={Link} colorScheme={'blue'} icon={<LinkIcon />} href={"https://www.google.com/"} />
                </WrapItem>
                <WrapItem>
                  {/* Instagram */}
                  <IconButton as={Link} colorScheme={'pink'} icon={<SiInstagram />} href={"https://www.Instagram.com/"} />
                </WrapItem>
                <WrapItem>
                  {/* Facebook */}
                  <IconButton as={Link} colorScheme={'blue'} icon={<FaFacebook />} href={"https://www.facebook.com/"} />
                </WrapItem>
                <WrapItem>
                  {/* Youtube */}
                  <IconButton as={Link} colorScheme={'red'}  icon={<SiYoutube />} href={"https://www.youtube.com/"} />
                </WrapItem>
                <WrapItem>
                  {/* LinkedIn */}
                  <IconButton as={Link} colorScheme={'blue'}  icon={<SiLinkedin />} href={"https://www.linkedin.com/"} />
                </WrapItem>
                <WrapItem>
                  {/* Spotify */}
                  <IconButton as={Link} colorScheme={'green'} icon={<SiSpotify />} href={"https://www.spotify.com/"} />
                </WrapItem>
              </Wrap>
            </Flex>




            <HStack justifyContent={'space-between'} >

              <Flex direction={'column'}>
                <Stack
                    w={'250px'}
                    pt={'2vh'}
                    pb={'1vh'}
                    backgroundColor={"primary"}
                    color={"Background"}
                >
                  <Center>
                    <h2>Location</h2>
                  </Center>
                </Stack>
                <Box
                    w={'100%'}
                    pl={'1vh'}
                    pr={'1vh'}
                    borderWidth="1px"
                    shadow="xl"
                    height={'150px'}
                    padding={'10px'}

                >
                  <Center fontWeight={'extrabold'} >
                    <Link href={'https://www.google.com/maps'} color={'primary'}>

                      <br /><br />1234 Robin Hood Road

                    </Link>
                  </Center>

                </Box>
              </Flex>



              <Flex direction={'column'}>
                <Stack
                    w={'250px'}
                    pt={'2vh'}
                    pb={'1vh'}
                    backgroundColor={"primary"}
                    color={"Background"}
                >
                  <Center>
                    <h2>Contact Us</h2>
                  </Center>
                </Stack>
                <Box
                    w={'100%'}
                    pl={'1vh'}
                    pr={'1vh'}
                    borderWidth="1px"
                    shadow="xl"
                    height={'150px'}
                    padding={'10px'}
                >
                  <Center fontSize={"l"} fontWeight={"bold"}>
                    <h2>Phone Number</h2>
                  </Center>

                  <center>
                    <p>902-422-2222</p>
                  </center>

                  <Center fontSize={"l"} fontWeight={"bold"}>
                    <h2>Email</h2>
                  </Center>
                  <center>
                    <p>Fementity@gmail.com</p>
                  </center>
                </Box>
              </Flex>

            </HStack>
          </Stack>

          <div style={{height: 425}}>
            <Center fontSize={'3xl'} color={'primary'} ><h1>
              Products and Services
            </h1></Center>
            <Carousel2 itemsToShow={3} itemsToScroll={3}>
              <Item>1
                { <img alt={''}
                    src={''}
                /> }
              </Item>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item>
            </Carousel2>
          </div>

          <HStack direction="row">

            <Wrap spacing="4px" width={'100%'} justify="space-evenly" pb={'15%'}>
              <WrapItem
                  w={['100%', null, '35%']}
                  h={'100%'}
                  pt={'2vh'}
                  pb={'1vh'}
              >
                <Flex direction={'column'}>
                  <VStack
                      w={'100%'}
                      pt={'2vh'}
                      pb={'1vh'}

                  >
                    <Stack
                        w={'100%'}
                        pt={'2vh'}
                        pb={'1vh'}

                    >
                      <Button backgroundColor={"primary"} color={"Background"} >
                        Book a Meeting
                      </Button>
                    </Stack>
                    <Box
                        w={'100%'}
                        pl={'1vh'}
                        pr={'1vh'}
                        borderWidth="1px"
                        shadow="xl"
                    >

                      <div class="center">
                        <h1>Calendar </h1>

                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={[
                              { title: 'Event', date: '2022-11-09' },

                              { title: 'Event', date: '2022-11-17' },
                            ]}
                        />
                      </div>

                    </Box>

                  </VStack>

                  <br/><br/>
                  <Button as={Link} href={'/proposal-form'} backgroundColor={"primary"} color={"Background"} >
                    Create Course or Workshop
                  </Button>


                </Flex>

              </WrapItem>




              <WrapItem w={['100%', null, '23%']} pt={'4vh'} pb={'15%'}>
                <Flex direction={'column'}>
                  <Stack
                      w={'400px'}
                      pt={'2vh'}
                      pb={'1vh'}
                      backgroundColor={"primary"} color={"Background"}
                  >
                    <Center>
                      <h2>Fem Entity Collabs</h2>
                    </Center>
                  </Stack>
                  <Box
                      w={'100%'}
                      borderWidth="1px"

                      shadow="xl"
                      height={'400px'}
                      padding={'10px'}
                  >
                    <Center fontSize={"xl"} fontWeight={"extrabold"}>
                      <h2>List of Fem Entity Involvement</h2>
                    </Center>
                    <Center fontSize={'lg'}>
                      <Text>
                        <br />
                        - Workshops <br /><br />
                        - Events <br /><br />
                        - Courses <br /><br />
                        - Blog Posts <br /><br />


                      </Text>
                    </Center>
                  </Box>
                </Flex>
              </WrapItem>
            </Wrap>
          </HStack>

        </Flex>

      </>
  );
}


