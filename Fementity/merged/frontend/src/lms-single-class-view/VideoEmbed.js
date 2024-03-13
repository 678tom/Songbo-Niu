import React from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '@chakra-ui/react';

const VideoEmbed = ({ videoEmbedLink }) => (
  <Box pl="5" pr="5" mb="10">
    <Box pt="10">
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoEmbedLink}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YT Vid"
        />
      </div>
    </Box>
  </Box>
);

VideoEmbed.propTypes = {
  videoEmbedLink: PropTypes.object.isRequired,
};

export default VideoEmbed;
