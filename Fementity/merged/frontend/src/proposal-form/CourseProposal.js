import React, { useState } from 'react';
import { Stack, Text, FormControl, FormLabel, Input, HStack, Radio, RadioGroup, Checkbox, CheckboxGroup, Wrap, Textarea } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

export default function CourseProposal() {
	
  const [courseTitle, setCourseTitle] = useState("");
  const [courseSubtitle, setCourseSubtitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  
  const themes = ["FEMININITY", "SELF CARE", "DARK FEMININE", "MANIFESTATION", "CRYSTALS", "CHAKRA", "EMPOWERMENT", "COMMUNITY", "AFFIRMATIONS", "MINDFULNESS", "MEDITATION", "SELF-DISCOVERY", "ENERGY WORK", "BALANCE", "EMOTIONS", "MENTAL HEALTH", "ASTROLOGY", "DIVINE FEMININE", "DIVINE MASCULINE", "GRATITUDE", "YONI", "LIMITING BELIEFS", "SHADOW WORK", "SEXUALITY"];
  const [primaryTopics, setPrimaryTopics] = useState(new Array(themes.length).fill(false));
  const [disabled, setDisabled] = useState(new Array(themes.length).fill(false));
  
  const [learningLevel, setLearningLevel] = useState("");
  const [courseInstructorProfile, setCourseInstructorProfile] = useState("");
  
  const [mediaValue, setMediaValue] = useState("");
  const [otherMedia, setOtherMedia] = useState("");
  
  const [coursePrice, setCoursePrice] = useState("");
  const [coursePayFrequency, setCoursePayFrequency] = useState("");
  const [courseCoupons, setCourseCoupons] = useState("");
  
  const updateTopics = (topic) => {
    const newSelection = primaryTopics.map((state, key) =>
      key === topic ? !state : state
    );
	setPrimaryTopics(newSelection);
	howManyBoxesSelected(newSelection);
  };
  
  const howManyBoxesSelected = (selected) => {
	let count = 0;
	for (let i = 0; i < selected.length; i++) {
		if (selected[i] === true) {
			count++;
		}
	}
	disableBoxes(count, selected);
  };
  
  const disableBoxes = (count, selected) => {
	  const disabledBoxes = new Array(themes.length).fill(false);
	  if (count < 5) {
		  setDisabled(disabledBoxes);
	  } else {
		  for (let i = 0; i < selected.length; i++) {
			if (selected[i] === false) {
				disabledBoxes[i] = true;
			}
		  }
	  }
	  setDisabled(disabledBoxes);
  }
  
  console.log(primaryTopics);
  console.log(disabled);

  return (
      <>
		<HStack spacing={10} w="full">
		  <FormControl isRequired w="50%"> 
			<FormLabel fontSize="20px">COURSE TITLE</FormLabel>
			<Input
			  type={'text'}
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="title"
			  onChange={(e) => setCourseTitle(e.target.value)}
			></Input>
			<Text mt={2}>(WHAT STUDENTS WILL LEARN)</Text>
		  </FormControl>

		  <FormControl isRequired w="50%">
			<FormLabel fontSize="20px">COURSE SUBTITLE</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="subtitle"
			  onChange={(e) => setCourseSubtitle(e.target.value)}
			></Input>
			<Text mt={2}>(HOW STUDENTS CAN APPLY KNOWLEDGE LEARNED)</Text>
		  </FormControl>
		</HStack>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">COURSE DESCRIPTION</FormLabel>
			<Text mb={2}>(WHAT YOUR COURSE IS ABOUT TO POTENTIAL STUDENTS)</Text>
			<Textarea
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  aria-label="description"
			  onChange={(e) => setCourseDescription(e.target.value)}
			></Textarea>
		</FormControl>
		
		<FormControl>
			<FormLabel fontSize="20px">PRIMARY TOPICS</FormLabel>
			<Text mb={2}>(SELECT MAX 5)</Text>
			<CheckboxGroup colorScheme="pink" aria-label="topic select">
				<Wrap spacing={4}>
					{themes.map((item, key) => {
						return (
							<Checkbox
								bg="white"
								p={2}
								rounded={4}
								boxShadow={'md'}
								outlineColor={'gray'}
								aria-label='topic'
								onChange={() => updateTopics(key)}
								isDisabled={disabled[key]}
							>
								{themes[key]}
							</Checkbox>
						);
					})}
				</Wrap>
			</CheckboxGroup>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">LEARNING LEVEL</FormLabel>
			<RadioGroup onChange={setLearningLevel} value={learningLevel} aria-label="learning level">
			  <Stack direction='row'>
				<Radio value='1'>BEGINNER</Radio>
				<Radio value='2'>INTERMEDIATE</Radio>
				<Radio value='3'>EXPERT</Radio>
				<Radio value='4'>ALL</Radio>
			  </Stack>
			</RadioGroup>
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
			  onChange={(e) => setCourseInstructorProfile(e.target.value)}
			></Textarea>
		</FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">MEDIA REQUIREMENTS</FormLabel>
			<RadioGroup onChange={setMediaValue} value={mediaValue} aria-label="media requirements">
			  <Stack direction='row'>
				<Radio value='1'>MP4</Radio>
				<Radio value='2'>YOUTUBE</Radio>
				<Radio value='3'>ZOOM</Radio>
				<Radio value='4'>M365 TEAMS</Radio>
				<Radio value='5'>OTHER</Radio>
			  </Stack>
			</RadioGroup>
		</FormControl>
		
		{mediaValue === '5' ?
			<FormControl>
				<FormLabel>IF OTHERS, EXPLAIN</FormLabel>
				<Input
				  rounded={2}
				  boxShadow={'md'}
				  outlineColor={'gray'}
				  variant={''}
				  type={'text'}
				  aria-label="media explanation"
				  onChange={(e) => setOtherMedia(e.target.value)}
				></Input>
			</FormControl>
			: null
		}
		
		<FormControl>
            <FormLabel fontSize="20px">COURSE CURRICULUM OVERVIEW</FormLabel>
            <input
              type="file"
              accept=".doc,.docx,.pdf"
              color={'white'}
              w={['full', 'auto']}
              name="curriculum"
			  aria-label="course curriculum"
            ></input>
        </FormControl>
		
		<FormControl>
            <FormLabel fontSize="20px">COURSE PROFILE IMAGE</FormLabel>
            <input
              type="file"
              accept="image/*"
              color={'white'}
              w={['full', 'auto']}
              name="images"
			  aria-label="profile image"
            ></input>
        </FormControl>
		
		<FormControl isRequired>
			<FormLabel fontSize="20px">COURSE PRICE</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="price"
			  onChange={(e) => setCoursePrice(e.target.value)}
			></Input>
		</FormControl>
		
		<FormControl isRequired>
			<RadioGroup onChange={(e) => setCoursePayFrequency(e.target.value)} aria-label="payment frequency">
			  <Stack direction='row'>
				<Radio value='1'>WEEKLY</Radio>
				<Radio value='2'>BI-WEEKLY</Radio>
				<Radio value='3'>MONTHLY</Radio>
				<Radio value='4'>YEARLY</Radio>
			  </Stack>
			</RadioGroup>
		</FormControl>
		
		<FormControl>
			<FormLabel fontSize="20px">COURSE COUPONS</FormLabel>
			<Input
			  rounded={2}
			  boxShadow={'md'}
			  outlineColor={'gray'}
			  variant={''}
			  type={'text'}
			  aria-label="coupons"
			  placeholder="Optional"
			  onChange={(e) => setCourseCoupons(e.target.value)}
			></Input>
		</FormControl>
      </>
  );
}