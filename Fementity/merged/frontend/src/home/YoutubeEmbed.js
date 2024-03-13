import React from "react";
import PropTypes from "prop-types";
import { Image, Box, Text, Heading } from '@chakra-ui/react';

const YoutubeEmbed = ({ embedId }) => ( 
  <flex margin="auto"> 
  <div 
  className="video-responsive"
  position="relative"
  overflow="hidden"
  padding-top="56.25%"
  padding-bottom="3em"
  >
    <Box w={['300px','500px','750px','950px']}
    h={['150px','300px','350px','400px']}>
    <iframe
      overflow={"hidden"}
      src={`https://www.youtube.com/embed/${embedId}`} 
      width="100%"
      height="100%"
      /* Link to fementity YT for when the trailer gets made: https://www.youtube.com/channel/UClZRJbfWGUfWc3D-cLGPmyw/featured */
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      align-self="center"
      title="Embedded youtube"
      position="absolute"
    />
    </Box>
  </div>
   </flex>
   
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;