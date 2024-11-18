import { ComponentDefaultProps } from '@chakra-ui/react';
export const Button: ComponentDefaultProps = {
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
  baseStyle: {
    variant: 'solid',
    borderRadius: '.5rem',
    fontFamily: 'body',
    h: '3rem',
    fontSize: '.875rem',
    fontWeight: 500,
  },
  variants: {
    primary: {
      color: 'white',
      bgColor: 'primary.500',
      width: '8.1rem',
      _focus: {
        boxShadow: 'none',
        bgColor: 'brand.primary.500',
        borderRadius: '.5rem',
        outline: 'none !important',
        border: 'none',
      },
    },
    secondary: {
      color: 'neutral.900',
      bgColor: 'white',
      width: '8.1rem',
      border: '1px solid',
      borderColor: 'neutral.200',
    },
    outline: {
      color: 'primary.500',
      bgColor: 'white',
      border: '1px solid',
      borderColor: 'primary.500',
      width: { md: '130px' },
      _focus: {
        bgColor: 'white',
      },
      _hover: {
        borderColor: 'primary.500',
        bgColor: 'white',
      },
    },

    solid: {
      color: 'white',
      bgColor: 'primary.500',
      width: '8.1rem',
      _focus: {
        bgColor: 'primary.700',
        outline: 'none !important',
        border: 'none',
      },
      _hover: {
        color: 'white',
        bgColor: 'primary.600',
      },
    },
  },
};
