import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function ResultsSearch({ changeSearchTerm }) {
  const storedTerm = String(localStorage.getItem('term'));
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();
  const goToResults = () => navigate('/directory');
  const viewAll = (e) => {
    console.log('good');
  };
  useEffect(() => {
    localStorage.setItem('term', String(term));
  }, [term]);
  const changeTerm = (event) => {
    setTerm(event.target.value);

    /*navigate('/results');*/
  };
  return (
    <>
      <Flex direction="row">
        <Wrap spacing="4px" width={'100%'} justify="space-between">
          <WrapItem w={['100%', null, '77%']}>
            <InputGroup size={'lg'} w="100%">
              <Input
                bg="white"
                id="searchBar"
                type="text"
                focusBorderColor="primary"
                placeholder={'Enter Search keywords...'}
                w="100%"
                onChange={changeTerm}
                shadow="lg"
              />
            </InputGroup>
          </WrapItem>

          <WrapItem w={['100%', null, '21%']}>
            <Button
              size={'lg'}
              bgColor={'primary'}
              color={'white'}
              w={'100%'}
              shadow="lg"
              opacity={1}
              onClick={() => changeSearchTerm(term)}
            >
              Search
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>

      {window.location.pathname === '/directory' ? (
        <Center>
          <Button
            bgColor="primary"
            color={'white'}
            mt={'20px'}
            size={'md'}
            onClick={() => changeSearchTerm('')}
          >
            View All
          </Button>
        </Center>
      ) : (
        <Center justifyContent={'right'}>
          <Button
            bgColor="primary"
            mt={'8px'}
            size={'md'}
            width={'200px'}
            onClick={() => changeSearchTerm('')}
          >
            View All
          </Button>
        </Center>
      )}
    </>
  );
}
