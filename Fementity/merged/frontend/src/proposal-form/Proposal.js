import React, { useState } from 'react';
import { Stack, Text, Button, FormControl, FormLabel, Input, VStack, HStack, Select } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import CourseProposal from './CourseProposal';
import WorkshopProposal from './WorkshopProposal';

export default function Proposal() {

  const [serviceType, setServiceType] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");

  return (
      <>
          <Stack layerStyle="pageLayout" alignItems="center" flexWrap="wrap" px={4} w={['100%']}>
		  
			<Text fontSize={'6xl'} color={'#B97375'} fontWeight={400} fontFamily={'heading'} mb={4} textDecoration={'underline'}>FORM FOR COLLABORATION</Text>
			
			<form style={{minWidth: 100 + '%'}}>
				<VStack spacing={8} align="center" w="full">
				  <HStack spacing={10} w="full">
					  <FormControl isRequired w="50%">
						<FormLabel fontSize="20px">BUSINESS NAME</FormLabel>
						<Input
						  type={'text'}
						  rounded={2}
						  boxShadow={'md'}
						  outlineColor={'gray'}
						  variant={''}
						  aria-label="business name"
						  onChange={(e) => setBusinessName(e.target.value)}
						></Input>
					  </FormControl>

					  <FormControl isRequired w="50%">
						<FormLabel fontSize="20px">CONTACT NAME</FormLabel>
						<Input
						  rounded={2}
						  boxShadow={'md'}
						  outlineColor={'gray'}
						  variant={''}
						  type={'text'}
						  aria-label="contact name"
						  onChange={(e) => setContactName(e.target.value)}
						></Input>
					  </FormControl>
				  </HStack>
				  
				  <FormControl isRequired>
					<FormLabel fontSize="20px">TYPE OF COLLABORATION</FormLabel>
						<Select bg="white" rounded={4} variant="outline" outlineColor={'gray'} boxShadow={'md'} aria-label="type of proposal">
							<option value='course' onClick={() => setServiceType(true)}>SUBMIT A COURSE</option>
							<option value='workshop' onClick={() => setServiceType(false)}>WORKSHOP SERIES</option>
						</Select>
				  </FormControl>
				  
				  {/* Dynamic display based on choice from above menu */}
				  
				  {serviceType ? <CourseProposal/> : <WorkshopProposal/>}

				  <VStack pt={4} pb={8} w="100%" justify={'space-between'}>
					<Button
					  type="submit"
					  backgroundColor={'primary'}
					  color={'white'}
					  w={['50%']}
					  aria-label="submit"
					>
					  Submit Proposal
					</Button>
				  </VStack>
				  
				</VStack>
			</form>
			
		  </Stack>
      </>
  );
}
