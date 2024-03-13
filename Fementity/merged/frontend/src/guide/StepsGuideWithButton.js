//Ninja: This StepsGuideWithButton funstion is created to use for step 1 and strp 2 in the Guide page
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Image, Box, Text, Heading } from '@chakra-ui/react';
import PropTypes from "prop-types";
import ActionBtn from '../home/ActionBtn';

const StepsGuideWithButton = ({ title, text, linkAddress, btnTitle }) => (
        <Box display={'flex'} flexDirection={'column'} width={'400px'} className={'cta-title-and-text'} alignItems={'left'}>
            <Text fontSize={'4xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'}>{title}</Text>
            <Text fontSize={'2xl'} fontWeight={400} align={'left'} fontFamily={'heading'}>{text}</Text>
            <ActionBtn linkAddress={linkAddress} btnTitle={btnTitle} />
        </Box>
);

StepsGuideWithButton.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
};


export default StepsGuideWithButton;
