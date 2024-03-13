import React from 'react';
import {
  Box,
  Button,
  Center,
  Text,
  Wrap,
  WrapItem,
  Image,
  VStack,
  Heading,
  Tag,
  TagLabel,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ResultCard(data) {
  const navigate = useNavigate();
  const goTobusiness = () => {
    navigate('/business/' + data.businessSlug);
  };

  return (
    <Box p={5} width="100%" bg="white" shadow="md" borderWidth="1px" w={'100%'}>
      <Wrap w={'100%'}>
        <WrapItem w={'100%'}>
          <Image
            boxSize="150px"
            src="/images/femLogo.png"
            alt="Fementity logo"
          />
          <VStack align={'start'} pl={2} w={'100%'}>
            <Heading fontSize="xl">{data.businessName}</Heading>
            <Tag size="md" variant='solid' bgColor={'primary'}>
                <TagLabel>{data.location}</TagLabel>
              </Tag>
              <Divider />
            <Text>{data.description}</Text>
          </VStack>
        </WrapItem>
      </Wrap>
      <Center>
        <Button size="sm" bgColor="primary" color={'white'} width="15%" onClick={goTobusiness}>
          View
        </Button>
      </Center>
    </Box>
  );
}
