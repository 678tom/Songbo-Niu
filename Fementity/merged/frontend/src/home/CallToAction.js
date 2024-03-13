import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import { Image, Box, Text, Heading } from '@chakra-ui/react';
import PropTypes from "prop-types";
import ActionBtn from './ActionBtn';


const CallToAction = ({ imgSource, title, text, direction, alt, linkAddress, btnTitle }) => (

    <Flex 
    alignItems={'center'}
    direction={direction} 
    justify={'space-around'} 
    gap={'20'} 
    paddingBottom={'2em'}
    >
        <Box 
        className={'cta-photo'}>
            <Image 
            src={imgSource} 
            objectFit='cover' 
            height={['250','350','400px','400px']} 
            alt={alt}
            />
        </Box>
        <Box 
        display={'flex'} 
        flexDirection={'column'} 
        width={['250','350','400px','400px']} 
        className={'cta-title-and-text'} 
        alignItems={'center'}


                >
            <Heading
            fontSize={['4xl', '4xl', '5xl','5xl']} 
            fontWeight={500} 
            align='center'
            paddingBottom={'3%'}>
            {title}
            </Heading>
            <Text 
            fontSize={['2xl', '2xl', '3xl','3xl']}
            fontWeight={400} 
            align={'center'}
            >{text}
            </Text>
            <ActionBtn 
            // align={'center'}
            linkAddress={linkAddress} 
            btnTitle={btnTitle} 
            />
        </Box>
    </Flex>
);


CallToAction.propTypes = {
    imgSource: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
    alt: PropTypes.string

};

/* 
img source - route pathing to photo file
title - Title of the CTA
text - content of the CTA
direction - determine the flex direction of the CTA (row vs. row-reverse)
alt - alt text for photo
linkAddress - navigation address for button
btnTitle - text on the button
*/


export default CallToAction;