import React from 'react';
import { Link, Button,Box } from '@chakra-ui/react';
import PropTypes from "prop-types";



const ActionBtn = ({linkAddress, btnTitle}) => (
    <Box w={[]}>
    <Link 
    href={linkAddress} 
    target={'_blank'} 
    marginTop={'2em'} 

    marginLeft={['4em','2em','auto','auto']}
    color={ '#B97375 ' } 
    _hover={'#B97375 '} 
    width={'90%'}
    >
        <Button  
        className='cta-btn' 
        minHeight={'70px'} 
        width={['60%', '80%', '100%','100%']} 
        bg={'#B97375 '} 
        color={'white'} 
        _hover={'#B97375 '} 
        height={'min-content'} 
        fontSize={['2xl', '2xl', '3xl','3xl']} 
        fontWeight={400} 
        fontFamily={'heading'} 
        whiteSpace={'normal'}>
        {btnTitle}
        </Button>
    </Link>
    </Box>
);

/* 
linkAddress - navigation address for button
btnTitle - text on the button
*/

ActionBtn.prototype = {
    linkAddress: PropTypes.string,
    btnTitle: PropTypes.string
};

export default ActionBtn;
