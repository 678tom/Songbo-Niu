import {
    Flex,
    Text,
    Heading,
    Divider,
    Image,
    Box, Link, Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultsSearch from './ResultsSearch';

export default function Directory() {
    const [term, setTerm] = useState('');

    const navigate = useNavigate();
    const goToResults = () => navigate('/results');

    const changeSearchTerm = (searchTerm) => {
        setTerm(searchTerm);
        goToResults();
    };
    return (
        <Flex
            direction="column"
            width={'90%'}
            margin={'0em auto'}
        >

            <Heading as="h1" size="4xl"  opacity={1}>
                Directory
            </Heading>
            <Text fontFamily={'subheading'} mb={'3%'} mt={'1%'} opacity={1}>
                Search and find consultants and business's in our Diverse Directory.
            </Text>

            <ResultsSearch changeSearchTerm={changeSearchTerm} />

            <Box width={'95%'} margin='auto' padding={'1em 0em'}>

                <Image
                    src='/images/DSC_3770.jpg'
                />
            </Box>

        </Flex>

    );
}