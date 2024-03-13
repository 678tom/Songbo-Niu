import React, { lazy} from 'react';             /*define prop from reat for linking */
import about from './img/mukisa_irene.jpg';
import irene from './img/irene.jpg';
import mukisa from './img/mukisa.jpg'; 
import ins from './img/ins.jpg';
import facebook from './img/facebook.png';
import youtube from './img/youtube.jpg';
import twitter from './img/twitter.png';
import spotify from './img/spotify.png';
import RighTop from './img/RighTop.png';
import {Link, Stack, Text, Image, Button, Flex, Spacer, Center} from '@chakra-ui/react';
import ContactForm from './ContactForm'
import { Link as RouteLink} from 'react-router-dom';
import OurFounders from './OurFounders';

const Memberships = lazy(() => import('../memberships/Memberships'));  /*Creating route to membership page */

export default function About() {
  return (
      <>
          <Flex
              direction={"column"}
              layerStyle="pageLayout"
              alignContent="center"
              justifyContent="center"
              justifyItems="center"
              spacing={15}
          >
              <Flex
                  direction={['column','column','row','row']}
                  layerStyle="pageLayout"
                  alignItems="center"
                  justifyContent="center"
                  spacing={15}
                  marginBottom={[30,30,0,0,0]}
              >

                  {/* About page header section */}
                  <Text
                      fontSize={['4xl', '5xl', '6xl','7xl']}
                      fontWeight={100}
                      paddingBottom={'10'}
                      paddingTop={'5'}
                      color='#B97375'
                  >
                      About Us
                  </Text>

                  <Spacer/>

                  <a href='https://business.halifaxchamber.com/members/member/fem-entity-180230'
                     target={'_blank'}
                  >
                      <Image
                          src={RighTop}
                          alt="RighTop_pic"
                          width={[150,150,150,200,200]}
                          height={"auto"}
                          marginLeft={"auto"}
                      />
                  </a>
                  {/*The end of Logo*/}

              </Flex>

              <Flex
                  direction={['column','column','row','row','row']}
                  layerStyle="pageLayout"
                  justifyContent={'center'}
                  alignContent={"center"}
                  spacing={20}
                  // marginBottom={30}
              >
                  <Image
                      src={about}
                      objectFit="cover"
                      width={['95%',475,300,'50%','50%']}
                      alt="about_us_pic"
                      marginLeft={"auto"}
                      marginRight={["auto","auto",8,50,50]}
                      marginBottom={"20px"}
                  />
                  {/* End About page header section */}

                  <Spacer/>

                  {/* Company bio */}
                  <Text
                      fontSize={{base: '20px', md: '22px', lg: '27px'}}
                      fontWeight={300}
                      textAlign={'center'}
                      fontFamily={'heading'}
                      paddingTop={'3'}
                      marginLeft={"auto"}
                      marginRight={"auto"}
                      marginBottom={"20px"}
                      width={['95%',475,'60%','80%','40%']}
                  >
                      Fem Entity is the source for self care, empowerment and community.
                      Through our Diverse Directory Community, we collaborate
                      to bring you a range of creative events, experiences, workshops and
                      course around embracing yourself.
                      We’ve created the yoni portal to be the source for divine thinking and self actualization,
                      allowing clients to keep track of their progress,understanding themselves
                      and their journey.
                  </Text>
              </Flex>
              {/* End Company bio section */}

              {/*Mission section*/}

              <Text
                  fontSize={['3xl', '4xl', '5xl','6xl']}
                  fontWeight={100}
                  color='#B97375'
                  marginTop={[0,5,10,10,10]}
                  textAlign="center"
              >
                  MISSION
              </Text>

              <Text
                  fontSize={{base: '27px', md: '27px', lg: '36px'}}
                  fontWeight={200}
                  textAlign={'center'}
                  fontFamily={'heading'}
                  width={['95%',475,"auto","auto","auto"]}
                  paddingBottom={[5,5,5,10,10]}
                  marginLeft={"auto"}
                  marginRight={"auto"}
              >
                  Fem Entity is devoted to providing reputable knowledge and impactful experiences in understanding and appreciating the inner self
              </Text>

              <Center>
                  {/*Creating Route link to memberships page*/}
                  <RouteLink
                      to="/memberships"
                  >
                      <Button style={{width:"100px"}}>
                          <Text
                              padding={3}
                              fontSize={['1xl','2xl','3xl','5xl','5xl']}
                              fontWeight={300}
                              textAlign={'center'}
                              fontFamily={'heading'}
                              color={'white'}
                              backgroundColor={'#B97375'}
                              borderRadius={'10'}
                          >
                              CHECK OUT OUR MEMBERSHIPS
                          </Text>
                      </Button>
                  </RouteLink>
              </Center>

              {/*End Misson section*/}

              {/*section for member pics and bios */}
              <OurFounders irene={irene} mukisa={mukisa}/>
              {/*end section for member pics and bios */}

              {/* Social media sections*/}
              <Text
                  margin={"auto"}
                  fontSize={['4xl', '5xl', '5xl','7xl']}
                  fontWeight={100}
                  textAlign={"center"}
                  paddingTop="50px"
                  paddingBottom={15}
                  color='#B97375'>
                  FOLLOW OUR SOCIALS
              </Text>

                    {/*ins*/}
                  <Stack
                    direction="row"
                    spacing={6}
                    justifyContent="center"
                    paddingBottom={50}
                  >

                      {/*facebook*/}
                  <Link href='https://www.facebook.com/watch/Fem.Entity/' target={'_blank'} width={'100px'} padding={'5px 10px'} >
                    <Image
                      src={facebook}
                      height="100%"
                      width={'100%'}
                      alt="facebook_log"
                    />
                  </Link>
                    {/*ins*/}
                  <Link href='https://www.instagram.com/fem.entity/' target={'_blank'} width={'100px'} padding={'5px 10px'}>
                    <Image
                      src={ins}
                      width="100%"
                      height="100%"
                      alt="instgram_log"
                    />
                  </Link>

                    {/*youtube*/}
                  <Link href='https://www.youtube.com/channel/UClZRJbfWGUfWc3D-cLGPmyw/featured' target={'_blank'} width={'100px'} padding={'5px 10px'}>
                    <Image
                      src={youtube} width="100%" height="100%"  alt="youtube_log"
                    />
                  </Link>

                  {/*  /!*twitter*!/*/}
                  {/*<Link href='https://www.google.com/?hl=zh_CN' target={'_blank'} width={'100px'} padding={'5px 10px'}>*/}
                  {/*  <Image*/}
                  {/*    src={twitter} width="100%" height="100%"  alt="twitter_log"*/}
                  {/*  />*/}
                  {/*</Link>*/}

                    {/*spotify*/}
                  <Link href='https://open.spotify.com/show/0NmgwwvVQLiEkMJsyZojz9?si=c0b3843d9dec4e41' target={'_blank'} width={'100px'} padding={'5px 10px'}>
                    <Image
                      src={spotify} width="100%" height="100%" alt="spotify_log"
                    />
                  </Link>
              </Stack>

              {/*Contact Us Form*/}
               <Text
                   fontSize={['4xl', '5xl', '5xl','7xl']}
                   fontWeight={100}
                   textAlign={"center"}
                   color='#B97375'
                   paddingBottom={5}
               >
                   CONTACT US
               </Text>
               <ContactForm />
              {/* end about page content  */}

            </Flex>
      </>
  );
}
