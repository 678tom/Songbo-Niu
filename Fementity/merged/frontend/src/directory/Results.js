import {
  Heading,
  VStack,
  Flex,
  Text,
  Tag,
  HStack,
  TagLabel,
  Center,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import ResultFilters from './ResultFilters';
import ResultsSearch from './ResultsSearch';
import ResultCard from './ResultCard';
import { useNavigate } from 'react-router-dom';
import { LoadingMessage } from '../app/LoadingMessage';

export default function Directory() {
  const [businesses, setBusinesses] = useState([]);
  const storedTerm = String(localStorage.getItem('term'));
  const [term, setTerm] = useState(storedTerm);
  const storedLocation = String(localStorage.getItem('filterLocation'));
  const storedCategory = String(localStorage.getItem('filterCategory'));
  const storedService = String(localStorage.getItem('filterService'));
  const [filterLocation, setFilterLocation] = useState(storedLocation);
  const [filterCategory, setFilterCategory] = useState(storedCategory);
  const [filterService, setFilterService] = useState(storedService);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const goToResults = () => navigate('/results');

  const changeSearchTerm = (searchTerm) => {
    setTerm(searchTerm);
  };

  const changeFilters = (category, location, service) => {
    setFilterCategory(category);
    setFilterLocation(location);
    setFilterService(service);
    window.location.reload(false);
  };

  useEffect(() => {
    localStorage.setItem('term', String(term));
  }, [term]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(
          `https://api.${window.location.host}/api/business/search?term=${term}`,
        );
        const all = await response.json();
        setBusinesses(all);
        setLoading(false);
      } catch (error) {
        console.log(error.stack);
      }
    };

    (async () => await fetchBusinesses())();
  }, [term]);

  return (
    <Flex direction={['column', null, 'row']} width="100%" pb={'200px'}>
      <ResultFilters changeFilters={changeFilters} />
      <Flex direction="column" pt={['15px', null, '0']} width="100%">
      <Heading as="h1" size="2xl">
            Directory
          </Heading>
        <ResultsSearch changeSearchTerm={changeSearchTerm} />
        <VStack mt={5} align={'start'} pl={'10px'}>
          <HStack spacing={4}>
            <Text>Filters: </Text>
            {storedCategory !== 'Category' ? (
              <Tag size="lg" variant="solid" bgColor="#e2e8f0" color={'black'}>
                <TagLabel>{storedCategory}</TagLabel>
              </Tag>
            ) : (
              <></>
            )}
            {storedLocation !== 'Location' ? (
              <Tag size="lg" variant="solid" bgColor="#e2e8f0" color={'black'}>
                {storedLocation}
              </Tag>
            ) : (
              <></>
            )}
            {storedService !== 'Service' ? (
              <Tag size="lg" variant="solid" bgColor="#e2e8f0" color={'black'}>
                <TagLabel>{storedService}</TagLabel>
              </Tag>
            ) : (
              <></>
            )}
          </HStack>
          {term !== '' ? (
            <Text align={'left'}>
              Results for <Text as="i">{term}</Text>:
            </Text>
          ) : (
            <></>
          )}
          {
            loading ?
              <Center w='100%'><LoadingMessage children={'results'}></LoadingMessage></Center>
            : <></>
          }
          {
            businesses.length==0 && !loading? 
            <Center width={'100%'} h='100%'>
              <Text width={'100%'} h='100%'  align='center' pt={'10vh'}>No Results</Text>
            </Center>
            :
            <></>
          }

          {businesses
            .filter(
              storedLocation !== 'Location'
                ? (business) => business.location === storedLocation
                : (business) => business.location !== 'Location',
            )
            .filter(
              storedCategory !== 'Category'
                ? (business) => business.business_category === storedCategory
                : (business) => business.business_category !== 'Category',
            )
            .filter(
              storedService !== 'Service'
                ? (business) => business.service === storedService
                : (business) => business.service !== 'Service',
            )
            .map((business) => (
              <ResultCard
                key={business.id}
                businessName={business.business_name}
                businessSlug={business.business_slug}
                location={business.location}
                description={business.description}
              />
            ))}
        </VStack>
      </Flex>
    </Flex>
  );
}
