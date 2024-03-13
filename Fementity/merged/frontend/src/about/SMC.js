import React from 'react';
import { Link, Image} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ins from './ins.jpg';
import facebook from './facebook.png';
import youtube from './youtube.jpg';
import twitter from './twitter.png';
import spotify from './spotify.png';

const imageClick = () => {
    console.log('click');
}
    return (
        <div>
            <Image 
                src={facebook} 
                onClick = {()=>imageClick()}  
                alt="facebook_log"
            />
        </div>
    )