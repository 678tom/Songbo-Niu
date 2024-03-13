import React, { Component } from 'react';
import {
  Textarea,
  Spacer,
  Flex,
  Heading,
  RadioGroup,
  Box,
  Text,
  Popover,
  PopoverHeader,
  Center,
  Input,
  Radio,
  Button,
  Portal,
  PopoverTrigger,
  Stack,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from '@chakra-ui/react';
import AddSection from './AddSection';

export default function Form() {
  const classContent = {
    classTitle: 'Enter Class Name Here',
    classDescription: 'This explains what the class is about',
    classDatePublished: 'February 1st, 2022',
    classPublisher: 'Fem Entity',
    classBodyText: 'Lorem ipsum dolor sit amet',
  };

  return (
    <Flex width="100%">
      <Box
        fontColor="fontColor"
        flex="1"
        align="left"
        pr="5"
        pl="5"
        pb="10"
        bg="white"
      >
        <Box rounded="lg" bg="white" p="5">
          <Box mb="5">
            <Heading>Add A New Class</Heading>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel mb="4" fontFamily="body">
                Class Title
              </FormLabel>
              <Input id="title" type="text"></Input>
            </FormControl>
          </Box>
          <Box mt="3">
            <FormControl isRequired>
              <FormLabel mb="4" fontFamily="body">
                Description
              </FormLabel>
              <Input
                id="descripton"
                type="text"
                placeholder="Describe the class"
              ></Input>
            </FormControl>
          </Box>
          <Box mt="3">
            <FormControl isRequired>
              <FormLabel mb="4" fontFamily="body">
                Youtube Embed
              </FormLabel>
              <Input
                id="youtube"
                type="text"
                placeholder="https://youtu.be/XXXXXXXXXXX"
              ></Input>
            </FormControl>
          </Box>
          <Spacer></Spacer>
          <Box mt="10">
            <Text fontFamily="heading">Add class content:</Text>
            <Box>
              <AddSection />
              <Button flex="1" mt="3" p="5">
                Add Section
              </Button>
            </Box>

            <Box mt="5">
              <FormControl>
                <FormLabel>References</FormLabel>
                <Textarea id="references"></Textarea>
              </FormControl>
            </Box>
          </Box>

          <Box mt="10">
            <Text fontFamily="heading">Add worksheets:</Text>
            <Button flex="1" mt="3" p="5">
              Upload
            </Button>
          </Box>

          <Box mt="10">
            <Text fontFamily="heading">Add related vendors:</Text>
            <Button flex="1" mt="3" p="5">
              Find Vendors
            </Button>
          </Box>

          <Box mt="10">
            <Text fontFamily="heading">Link related classes:</Text>
            <Button flex="1" mt="3" p="5">
              Find Classes
            </Button>
          </Box>
        </Box>

        <Box pl="5" pr="5" mb="10" flex="1" align="center">
          <Box w="100%" mt="5" mb="5">
            <Heading as="h2" size="l" bg="accent3">
              Practice Quiz
            </Heading>
          </Box>
          <Box mb="5">
            <Input
              placeholder="Question text here(True/False)"
              size="xs"
              mb="5"
            />
            <RadioGroup>
              <Stack spacing={5}>
                <Radio size="md" value="1" colorScheme="green">
                  True
                </Radio>
                <Radio size="md" value="2" colorScheme="green">
                  False
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Input
              placeholder="Question text here(True/False)"
              size="xs"
              mb="5"
            />
            <RadioGroup>
              <Stack spacing={5}>
                <Radio size="md" value="1" colorScheme="green">
                  True
                </Radio>
                <Radio size="md" value="2" colorScheme="green">
                  False
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Center>
              <Button bg="accent3" mt="10">
                Add Question
              </Button>
            </Center>
          </Box>
        </Box>

        <Box>
          <Center>
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="green" mt="10">
                  Save and Publish
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Class Published Successfully</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="green">Return to Home Page</Button>
                  </PopoverBody>
                  <PopoverBody>
                    <Button colorScheme="green">Add another Class</Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
}
