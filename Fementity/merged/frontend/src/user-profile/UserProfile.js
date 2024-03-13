import React, { useState } from 'react';
import {Button, Icon, Text, IconButton, VStack, Progress} from '@chakra-ui/react'
import {HStack} from '@chakra-ui/react';
import Carousel2 from 'react-elastic-carousel'

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
import {
    ArrowUpIcon,
    DownloadIcon,
    ExternalLinkIcon,
    LinkIcon,
    MoonIcon,
    SettingsIcon,
    StarIcon,
    SunIcon
} from "@chakra-ui/icons";
import Item from "../storefront/Item";
import {BsBook, BsBookHalf, BsBookmarkHeart, BsBookshelf, BsCart3} from "react-icons/bs";


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
                <Center borderColor={'primary'}
                        borderWidth="2px">
                    <Image

                        src="/images/femLogo.png"
                        boxSize="200px"
                        align={'center'}
                    ></Image>
                </Center>


                <HStack justify={'space-around'} padding={'20px'}>
                    <VStack backgroundColor={'background'}
                            shadow="xl"
                            borderColor={'primary'}
                            borderWidth="2px"
                            padding={'20px'}
                            width={'40%'}
                            pb={'0px'}>

                        <Text color={"primary"} fontSize={'4xl'} >Profile Name</Text>

                        <Stack
                            w={'250px'}
                            pt={'2vh'}
                            pb={'1vh'}
                            backgroundColor={"primary"}
                            color={"Background"}
                        >
                            <Center>
                                <h2><StarIcon /> Membership Type</h2>
                            </Center>
                        </Stack>

                    <Center
                        width={'100%'}
                    >

                        <Avatar bg='primary' padding={'10px'}  size={'2xl'}  src='' />{' '}


                        <VStack padding={'10px'}>

                                {/* Sun Sign */}
                                <IconButton as={Link} aria-label='Sun Sign' backgroundColor={'primary'} color={'background'} icon={<SunIcon />} />

                                {/* MoonSign */}
                                <IconButton as={Link} aria-label='Moon Sign' backgroundColor={'primary'} color={'background'} icon={<MoonIcon />}  />


                                {/* RisingSun */}
                                <IconButton as={Link} aria-label='Rising Sun' backgroundColor={'primary'} color={'background'} icon={<ArrowUpIcon />}  />

                        </VStack>
                    </Center>
                        <VStack padding={'20px'} alignContent={'left'}>

                            <Button as={Link} backgroundColor={'background'} color={'primary'}  href={''}> <BsBookmarkHeart />  Wishlist  </Button>

                            <Button as={Link} backgroundColor={'background'} color={'primary'} href={''} ><BsCart3 />  Cart  </Button>

                            <Button as={Link} backgroundColor={'background'} color={'primary'} href={''}><BsBookHalf />  Saved Digital Docs  </Button>

                            <Button as={Link} backgroundColor={'background'} color={'primary'} href={''}> <SettingsIcon />  Settings  </Button>

                        </VStack>
                    </VStack>


                    <Stack backgroundColor={'background'}
                            shadow="xl"
                            borderColor={'primary'}
                            borderWidth="2px"
                            padding={'20px'}
                           width={'40%'}
                            pb={'0px'}>


                        <Center fontSize={'l'} backgroundColor={"primary"}
                                color={"Background"} padding={'20px'}><h1>
                            Courses in progress
                        </h1></Center>
                        <Center fontSize={'l'}><h1>
                            Course Name
                        </h1></Center>
                        <Progress size={'sm'} colorScheme={'pink'} value={60} />
                        <Center fontSize={'l'}><h1>
                            Course Name
                        </h1></Center>
                        <Progress size={'sm'} colorScheme={'pink'} value={80} />


                            <div style={{height: 430}}>
                                <Center fontSize={'l'} backgroundColor={"primary"}
                                        color={"Background"} padding={'20px'}><h1>
                                    Diverse Directory Favorites
                                </h1></Center>
                                <Carousel2 itemsToShow={2} itemsToScroll={2}>
                                    <Item>1
                                        { <img
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


                            <Stack

                                pt={'2vh'}
                                pb={'1vh'}
                                backgroundColor={"primary"} color={"Background"}
                            >
                                <Center>
                                    <h2>Upcoming Events & News</h2>
                                </Center>
                            </Stack>
                            <Box
                                w={'100%'}
                                borderWidth="1px"
                                shadow="xl"
                                padding={'20px'}
                            >
                                <Center fontSize={"xl"} fontWeight={"extrabold"}>
                                    <h2>EVENTS AND NEWS</h2>
                                </Center>
                            </Box>

                    </Stack>
                </HStack>



            </Flex>

        </>
    );
}


