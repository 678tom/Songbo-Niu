//Ninja: This StepsGuideWithOutButton function is created to use for step 3 and step 4 in the Guide page
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Image, Box, Text, Heading } from '@chakra-ui/react';
import PropTypes from "prop-types";


const StepsGuideWithOutButton = ({ title, text}) => (
        <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'left'}>
            <Text fontSize={'5xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>{title}</Text>
            <Text fontSize={'2xl'} fontWeight={400} align={'left'} fontFamily={'heading'}>{text}</Text>
        </Box>
);

StepsGuideWithOutButton.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
};


export default StepsGuideWithOutButton;