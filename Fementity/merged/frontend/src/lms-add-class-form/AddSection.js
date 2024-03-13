import React from 'react';
import { PropTypes } from 'prop-types';
import { Box, Textarea, FormControl, Input, FormLabel } from '@chakra-ui/react';

const AddSection = ({ sectionNumber }) => (
  <Box mt="3">
    <FormControl>
      <FormLabel>Section Title</FormLabel>
      <Input></Input>
      <FormLabel>Section Body</FormLabel>
      <Textarea></Textarea>
    </FormControl>
  </Box>
);

AddSection.propTypes = {
  sectionNumber: PropTypes.object.isRequired,
};

export default AddSection;
