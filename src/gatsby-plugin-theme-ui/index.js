import 'typeface-roboto';
import 'typeface-noto-serif';

import styles from './styles';

export default {
  colors: {
    text: `#A8A8B3`,
    background: `#0D111A`,
    primary: `#E1E1E6`,
    secondary: `#737780`,
    accent: `#24B36B`,
  },
  fonts: {
    body: `Roboto`,
    heading: `Roboto`,
    monospace: `SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
    text: `Noto Serif`,
  },
  fontSizes: [12, 14, 16, 18, 22, 24, 36, 54],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    text: 300,
  },
  lineHeights: {
    body: 2,
    heading: 1.6,
  },
  space: [0, 4, 8, 16, 20, 24, 32, 36, 64, 96, 128, 256, 512],
  sizes: {
    container: 1120,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
    },
  },
  styles,
};
