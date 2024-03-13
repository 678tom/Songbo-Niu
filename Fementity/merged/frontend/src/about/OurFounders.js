import React from "react";
import { useState } from "react";
import { Flex,Stack, Text, Box, Image} from '@chakra-ui/react';


const OurFounders = ({ irene, mukisa}) => {

    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    //Event handler for mouse enter
    const handleMouseEnter1 = () => {
        setIsHovering1(true);
    }

    //Event handler for mouse leaving
    const handleMouseLeave1 = () => {
        setIsHovering1(false);
    }

    //Event handler for mouse enter
    const handleMouseEnter2 = () => {
        setIsHovering2(true);
    }

    //Event handler for mouse leaving
    const handleMouseLeave2 = () => {
        setIsHovering2(false);
    }

    //React component for the founders photo's with hover text
    return (
        <Stack layerStyle="pageLayout" alignItems="center"  spacing={15} >
            <Text
                fontSize={['4xl', '5xl', '5xl','7xl']}
                fontWeight={100}
                textAlign={"center"}
                marginTop="70px"
                color='#B97375'
                >
                    OUR FOUNDERS
            </Text>

            <Flex
                direction={['column','column','row','row']}
                paddingBottom={[0,0,3,5,5]}
                marginTop={0}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                {/* Irene Bio */}
                <Box
                    maxH='xlg'
                    width={['95%',360,'40%','40%','40%']}
                    borderRadius='md'
                    overflow='hidden'
                    align={'left'}
                    marginLeft={"auto"}
                    marginRight={"auto"}
                >

                    <Text 
                        align={'center'}
                        fontWeight={50}
                        paddingBottom="10px"
                        color='#B97375'
                        fontSize={['2xl','3xl','3xl','4xl','4xl']}
                    >
                        IRENE
                    </Text>


                    <Box
                        position={'relative'}
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                    >
                        <Image 
                        src={irene}
                        objectFit="cover"
                        alt="irene_pic"
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        />


                        <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: isHovering1 ? 'block' : 'none',
                            color: 'white',
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                        }}>
                            <Text
                                fontSize={[17,18,16,18,20]}
                                textAlign={'center'}
                                fontWeight={'light'}
                            >
                                Hey Friends! My name is Irene Saliendra, I’m a Taurus and Aries cusp with a lot of love to give! Raised in Atlantic Canada with a filipino soul. I’ve always had a passion for building communities, working with start-ups and women empowerment. I’m an advocate for finding self-love through self care and am slowly finding my own passions in creativity. Through the study of energy work and balance, I have found a love for myself in a new light. My goal is to share what I’ve learned about the ancient techniques of energy work and mindfulness to help other people find their own inner power for success and happiness.  
                            </Text>
                        </div>
                    </Box> 
                </Box>

                {/* Mukisa Bio */}
                <Box
                    maxH='xlg'
                    width={['95%',360,'40%','40%','40%']}
                    borderRadius='md'
                    overflow='hidden'
                    align={'left'}
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    marginTop={[10,10,0,0,0]}
                >
                    <Text 
                        align={'center'} 
                        fontSize={['2xl','3xl','3xl','4xl','4xl']}
                        fontWeight={50} 
                        paddingBottom="10px"
                        color='#B97375'
                        >
                        MUKISA
                    </Text>
                    <Box
                        position={'relative'}
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                    >
                        
                        <Image
                        src={mukisa}
                        objectFit="cover"
                        alt="mukisa_pic"/>
                        
                        <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: isHovering2 ? 'block' : 'none',
                            color: 'white',
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                        }}>

                            <Text
                                fontSize={[16,17,14,18,20]}
                                textAlign={'center'}
                                fontWeight={'light'}
                            >
                                Hello world, my name is Mukisa! I am a Pisces born and raised in Nova Scotia with roots in Uganda. I’m a lawyer in training passionate about human rights, women’s empowerment, and self-care. My goal is to create a supportive space, especially for those with layered identities, to embrace their feminine energy and build self-esteem. I grew up around ambitious, high achieving friends and family who often sacrifice their own health for “success”. I believe that to have a healthy mind, body and spirit, we have to find balance in our lives. Although I am career driven and academic, I also find joy in self care, yoga, fashion, makeup, and quality time with loved ones. I hope that through Fem Entity, we will help those from all backgrounds, gender identity, body shape, sexuality and culture people find the healthiest version of themselves.
                            </Text>
                        </div>
                    </Box>
                </Box>
                 
            </Flex>
            <Text
                fontSize={'md'}
                textAlign={"center"}
                width={['90%',365,400,1000,1000]}
            >
                Hover over each photo for a brief statement from our two founders
            </Text>
        </Stack>
    )

};

export default OurFounders;