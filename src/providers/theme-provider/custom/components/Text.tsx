import { defineStyleConfig } from '@chakra-ui/react';

// Define the base styles and variants for the Text component
export const Text = defineStyleConfig({
  baseStyle: {
    color: '#101840',
  },
  variants: {
    grey: {
      color: '#9F9F9F',
    },
    componentHeading: {
      fontSize: '.875rem',
      fontWeight: 'medium',
      color: '#2F2F2F',
      lineHeight: '1rem',
    },
  },
  sizes: {
    sm: {
      fontSize: '.75rem',
    },
    md: {
      fontSize: '.875rem',
    },
    lg: {
      fontSize: '1rem',
    },
  },
});
