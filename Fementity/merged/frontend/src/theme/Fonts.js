import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/Montserrat/Montserrat.woff) format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Quiche';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/Quiche/Quiche.woff) format('woff');
      }
      @font-face {
        font-family: 'Versailles';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/Versailles/Versailles.woff2) format('woff2'), url(./fonts/Versailles/Versailles.woff) format('woff');
      }
      `}
  />
);

export default Fonts;
