import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: '#B97375',
    accent: '#8F9DB7',
    accent2: '#91CAA4',
    accent3: '#FBE689',
    background: '#FDF8F1',
    fontColor: '#2D2D34',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  layerStyles: {
    pageLayout: {
      maxW: { sm: 540, md: 768, lg: 960, xl: 1200 },
      mx: 'auto',
      w: '100%',
    },
  },
  fonts: {
    heading: `'Versailles', sans-serif`,
    subheading: `'Quiche', sans-serif`,
    body: `'Quiche', sans-serif`,
    altBody: `'Montserrat', sans-serif`,
  },
});
