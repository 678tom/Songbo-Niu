import React, { useState } from 'react';
import { Stack, Text, FormControl, FormLabel, Input, HStack, Radio, RadioGroup, Select, Textarea } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

export default function WorkshopProposal() {
	
  const [workshopTitle, setWorkshopTitle] = useState("");
  const [workshopSubtitle, setWorkshopSubtitle] = useState("");
  const [workshopDescription, setWorkshopDescription] = useState("");
  
  const [workshopLocation, setWorkshopLocation] = useState("");
  const [reoccuring, setReoccuring] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [audienceSize, setAudienceSize] = useState("");
  
  const [deliverables, setDeliverables] = useState("");
  const [workshopInstructorProfile, setWorkshopInstructorProfile] = useState("");
	
  const [collabValue, setCollabValue] = useState('0');
  const [collabBusiness, setCollabBusiness] = useState("");
  const [potentialCollab, setPotentialCollab] = useState("");
  
  const [workshopPrice, setWorkshopPrice] = useState("");
  const [workshopCoupons, setWorkshopCoupons] = useState("");

  return (
      <>
		<HStack spacing={10} w="full">
		  <FormControl isRequired w="50%">
			<FormLabel fontSize="20px">WORKSHOP TITLE</FormLabel>
			<Input
			  type={'text'}
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="title"
			  onChange={(e) => setWorkshopTitle(e.target.value)}
			></Input>
			<Text mt={2}>(WHAT STUDENTS WILL LEARN)</Text>
		  </FormControl>

		  <FormControl isRequired w="50%">
			<FormLabel fontSize="20px">WORKSHOP SUBTITLE</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="subtitle"
			  onChange={(e) => setWorkshopSubtitle(e.target.value)}
			></Input>
			<Text mt={2}>(HOW STUDENTS CAN APPLY KNOWLEDGE LEARNED)</Text>
		  </FormControl>
		</HStack>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">LOCATION</FormLabel>
			<RadioGroup onChange={setWorkshopLocation} value={workshopLocation} aria-label="location">
			  <Stack direction='row'>
				<Radio value='1'>IN-PERSON</Radio>
				<Radio value='2'>DIGITAL</Radio>
				<Radio value='3'>BOTH</Radio>
			  </Stack>
			</RadioGroup>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">IS IT A REOCCURING WORKSHOP?></FormLabel>
			<RadioGroup onChange={setReoccuring} value={reoccuring} aria-label="reoccuring">
			  <Stack direction='row'>
				<Radio value='1'>NO</Radio>
				<Radio value='2'>WEEKLY</Radio>
				<Radio value='3'>MONTHLY</Radio>
				<Radio value='4'>QUARTERLY</Radio>
			  </Stack>
			</RadioGroup>
		</FormControl>
		
		<HStack spacing={10} w="full">
			<FormControl isRequired w="50%">
				<FormLabel fontSize="20px">EST. START TIME</FormLabel>
				<Input
				  rounded={2}
				  boxShadow={'md'}
				  outlineColor={'gray'}
				  variant={''}
				  type={'time'}
				  aria-label="start time"
				  onChange={(e) => setStartTime(e.target.value)}
				></Input>
			</FormControl>
			
			<FormControl isRequired w="50%">
				<FormLabel fontSize="20px">DURATION</FormLabel>
				<Input
				  rounded={2}
				  boxShadow={'md'}
				  outlineColor={'gray'}
				  variant={''}
				  type={'text'}
				  aria-label="duration"
				  onChange={(e) => setDuration(e.target.value)}
				></Input>
			</FormControl>
		</HStack>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">IDEAL AUDIENCE SIZE</FormLabel>
				<Select
					bg="white"
					rounded={4}
					variant="outline"
					outlineColor={'gray'}
					boxShadow={'md'}
					aria-label="audience size"
					onChange={(e) => setAudienceSize(e.target.value)}
				>
					<option value='10-20'>10-20</option>
					<option value='20-50'>20-50</option>
					<option value='50-100'>50-100</option>
					<option value='100+'>100+</option>
				</Select>
		  </FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">WORKSHOP DESCRIPTION</FormLabel>
			<Text mb={2}>(WHAT YOUR COURSE IS ABOUT TO POTENTIAL STUDENTS)</Text>
			<Textarea
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="description"
			  onChange={(e) => setWorkshopDescription(e.target.value)}
			></Textarea>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">WORKSHOP DELIVERABLES</FormLabel>
			<Textarea
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="workshop deliverables"
			  onChange={(e) => setDeliverables(e.target.value)}
			></Textarea>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">INSTRUCTOR PROFILE</FormLabel>
			<Text mb={2}>(BRIEF EXPLANATION OF EXPERTISE AND EXPERIENCE)</Text>
			<Textarea
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="instructor profile"
			  onChange={(e) => setWorkshopInstructorProfile(e.target.value)}
			></Textarea>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">ARE YOU COLLABORATING WITH ANOTHER BUSINESS FOR THE WORKSHOP?</FormLabel>
			<RadioGroup onChange={setCollabValue} value={collabValue} aria-label="collaboration confirmation">
			  <Stack direction='row'>
				<Radio value='1'>YES</Radio>
				<Radio value='2'>NO</Radio>
			  </Stack>
			</RadioGroup>
		</FormControl>
		
		{collabValue === '1' ?
			<FormControl>
				<FormLabel>IF YES, WHICH BUSINESS?</FormLabel>
				<Input
				  rounded={2}
				  boxShadow={'md'}
				  outlineColor={'gray'}
				  variant={''}
				  type={'text'}
				  aria-label="collaboration partner"
				  onChange={(e) => setCollabBusiness(e.target.value)}
				></Input>
			</FormControl>
			: null
		}
		
		{collabValue === '2' ?
			<FormControl>
				<FormLabel>IF NO, ARE YOU OPEN TO COLLABORATING, IF IT'S A FIT?</FormLabel>
				<RadioGroup onChange={setPotentialCollab} value={potentialCollab} aria-label="open to collaboration">
				  <Stack direction='row'>
					<Radio value='1'>YES</Radio>
					<Radio value='2'>NO</Radio>
				  </Stack>
				</RadioGroup>
			</FormControl>
			: null
		}
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">WORKSHOP PRICE</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="price"
			  onChange={(e) => setWorkshopPrice(e.target.value)}
			></Input>
		</FormControl>
		
		<FormControl>
			<FormLabel fontSize="20px">WORKSHOP COUPONS</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="coupons"
			  placeholder="Optional"
			  onChange={(e) => setWorkshopCoupons(e.target.value)}
			></Input>
		</FormControl>
      </>
  );
}