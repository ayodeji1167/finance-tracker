const fonts = {
  heading: `'Geist',sans-serif`,
  body: `'Geist',sans-serif`,
};

const fontSizes = {
  xs: '11px',
  sm: '13px',
  md: '15px',
  lg: '17px',
  xl: '22px',
  '2xl': '26px',
  '3xl': '30px',
  '4xl': '34px',
  '5xl': '38px',
  '6xl': '50px',
  '7xl': '70px',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const textStyles = {
  h1: {
    fontSize: ['4xl', '5xl'],
    fontWeight: 'bold',
    lineHeight: 'auto',
    fontFamily: 'heading',
  },
  h2: {
    fontSize: ['3xl', '4xl'],
    fontWeight: 'bold',
    fontFamily: 'heading',
    lineHeight: 'auto',
  },
  h3: {
    fontSize: ['2xl', '3xl'],
    fontWeight: 'semibold',
    lineHeight: 'auto',
    fontFamily: 'heading',
  },
  h4: {
    fontSize: ['xl', '2xl'],
    fontWeight: 'semibold',
    fontFamily: 'heading',
    lineHeight: 'auto',
  },
  h5: {
    fontSize: ['lg', 'xl'],
    fontWeight: 'semibold',
    lineHeight: 'auto',
    fontFamily: 'heading',
  },
  p: {
    fontSize: { base: '14px', md: '16px' },
    fontWeight: 'regular',
    lineHeight: '165%',
    fontFamily: 'body',
  },
  subHeading: {
    fontSize: { base: '20px', md: '26px' },
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'heading',
  },
  small: {
    fontSize: { base: '10px', md: '12px' },
    fontFamily: 'body',
  },
  'h-900': {
    fontSize: '2rem',
    lineHeight: '2.5rem',
    fontWeight: 500,
  },
  'h-800': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 500,
  },
  'h-700': {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  'h-600': {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  'h-500': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  'h-400': {
    fontSize: '.875rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  'h-300': {
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
  },
  'h-200': {
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
  },
  'h-100': {
    fontSize: '.625rem',
    lineHeight: '1rem',
  },
  'p-400': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'p-300': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'p-200': {
    fontSize: '.875rem',
    lineHeight: '1.25rem',
  },
  'p-100': {
    fontSize: '.75rem',
    lineHeight: '1rem',
  },
  'p-50': {
    fontSize: '.9375rem',
    lineHeight: '1.25rem',
  },
};

export const fontConfig = {
  fonts,
  fontSizes,
  fontWeights,
  textStyles,
};
