import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  VStack,
  Select,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ResultFilters({ changeFilters }) {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const storedLocation = String(localStorage.getItem('filterLocation'));
  const storedCategory = String(localStorage.getItem('filterCategory'));
  const storedService = String(localStorage.getItem('filterService'));
  const [filterLocation, setFilterLocation] = useState(
    storedLocation === 'null' ? 'Location' : storedLocation,
  );
  const [filterCategory, setFilterCategory] = useState(
    storedCategory === 'null' ? 'Category' : storedCategory,
  );
  const [filterService, setFilterService] = useState(
    storedService === 'null' ? 'Service' : storedService,
  );
  const navigate = useNavigate();
  const goToResults = () => navigate('/results');
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://api.${window.location.host}/api/business/categories`,
        );
        const all = await response.json();
        setCategories(all);
      } catch (error) {
        console.log(error.stack);
      }
    };

    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `https://api.${window.location.host}/api/business/locations`,
        );
        const all = await response.json();
        setLocations(all);
      } catch (error) {
        console.log(error.stack);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://api.${window.location.host}/api/business/services`,
        );
        const all = await response.json();
        setServices(all);
      } catch (error) {
        console.log(error.stack);
      }
    };
    (async () => await fetchCategories())();
    (async () => await fetchLocations())();
    (async () => await fetchServices())();
  }, []);

  useEffect(() => {
    localStorage.setItem('filterLocation', String(filterLocation));
  }, [filterLocation]);

  useEffect(() => {
    localStorage.setItem('filterCategory', String(filterCategory));
  }, [filterCategory]);

  useEffect(() => {
    localStorage.setItem('filterService', String(filterService));
  }, [filterService]);

  const changeCategoryFilter = (event) => {
    setFilterCategory(event.target.value);
  };
  const changeLocationFilter = (event) => {
    setFilterLocation(event.target.value);
  };
  const changeServiceFilter = (event) => {
    setFilterService(event.target.value);
  };

  const clearFilters = () => {
    setFilterCategory('Category');
    setFilterLocation('Location');
    setFilterService('Service');
    changeFilters(filterCategory, filterLocation, filterService);
  };

  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      w={['100%', '100%', '25%']}
      spacing={2}
      bgColor="primary"
      mr="9px"
      borderColor={'primary'}
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filters
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={3}>
          <VStack width={'100%'} spacing={10} py="5" pr="2" pl="2" bg="white">
            <Select
              placeholder="Category"
              size="sm"
              onChange={changeCategoryFilter}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.business_category}>
                  {category.business_category}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Location"
              size="sm"
              onChange={changeLocationFilter}
            >
              {locations.map((business) => (
                <option key={business.id} value={business.location}>
                  {business.location}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Service"
              size="sm"
              onChange={changeServiceFilter}
            >
              {services.map((business) => (
                <option key={business.id} value={business.service}>
                  {business.service}
                </option>
              ))}
            </Select>
            <Button
              bgColor={"accent4"}
              size={'sm'}
              width="100%"
              onClick={() =>
                changeFilters(filterCategory, filterLocation, filterService)
              }
            >
              Apply
            </Button>
            <Button
              bgColor={"accent4"}
              size={'sm'}
              width="100%"
              onClick={clearFilters}
            >
              Clear
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
