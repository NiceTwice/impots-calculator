import { fromPairs, map, mapValues } from 'lodash';
import breakpoints from './src/style/mui/constants/breakpoints';
import colors from './src/style/mui/constants/colors';
import typographies from './src/style/mui/constants/typography';

const listToUndefinedValuesObject = <T extends string>(keys: readonly T[]) => {
  return fromPairs(map(keys, key => [key, undefined])) as Record<T, undefined>;
};

const colorsToIgnore = [
  'white',
  'black',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

const fontWeightToIgnore = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];

const fontFamilyToIgnore = ['sans', 'serif', 'mono'];

// console.log(listToUndefinedValuesObject(colorsToIgnore));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: '#__next',
  corePlugins: {
    preflight: false, // prevent tailwind from overriding MUI https://mui.com/material-ui/guides/interoperability/#tailwind-css
  },
  theme: {
    extend: {
      screens: {
        '2xl': `${breakpoints.xl}px`, // set same to xl, should not be used but cannot be deleted from intellisense
        ...mapValues(breakpoints, breakpoint => `${breakpoint}px`),
      },
      fontFamily: {
        ...listToUndefinedValuesObject(fontFamilyToIgnore),
        ...typographies.fontFamilies,
        DEFAULT: typographies.fontFamilies.default,
      },
      fontWeight: {
        ...listToUndefinedValuesObject(fontWeightToIgnore),
        // thin: 100,
        // extralight: 200,
        // light: 300,
        normal: 400,
        // medium: 500,
        // semibold: 600,
        bold: 700,
        // extrabold: 800,
        // black: 900,
      },
      colors: {
        // remove default tailwind colors from intellisense suggestions
        ...listToUndefinedValuesObject(colorsToIgnore),
        ...colors,
      },
    },
  },
  plugins: [],
};
