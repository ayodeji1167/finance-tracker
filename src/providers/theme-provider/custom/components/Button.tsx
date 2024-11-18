import { ComponentDefaultProps } from '@chakra-ui/react';
export const Button: ComponentDefaultProps = {
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
  baseStyle: {
    variant: 'solid',
    borderRadius: '10px',
    fontFamily: 'body',
    minHeight: '45px',
    fontSize: { base: '14px', md: '16px' },
  },

  variants: {
    primary: {
      color: 'white',
      bgColor: 'primary.500',
      width: { md: '130px' },
      _focus: {
        boxShadow:
          '28px 40px 20px rgba(24, 19, 162, 0.03), 16px 23px 17px rgba(24, 19, 162, 0.1), 7px 10px 12px rgba(24, 19, 162, 0.17), 2px 3px 7px rgba(24, 19, 162, 0.2), 0px 0px 0px rgba(24, 19, 162, 0.2)',
        bgColor: 'brand.primary.500',
        borderRadius: '10px',
      },
      _hover: {
        border: '8px solid',
        borderColor: 'primary.100',
        boxShadow: ' 0px 0px 27px rgba(24, 19, 162, 0.2)',
        bgColor: 'brand.primary.500',
        borderRadius: '10px',
      },
    },
    outline: {
      color: 'primary.500',
      bgColor: 'white',
      border: '2px solid',
      borderColor: 'primary.500',
      width: { md: '130px' },
      _focus: {
        bgColor: 'white',
        borderRadius: '10px',
      },
      _hover: {
        borderColor: 'primary.500',
        bgColor: 'white',
      },
    },
    profileHeader: {
      color: 'white',
      fontSize: { base: '12px', md: '16px' },
      _focus: {
        bg: 'secondary.500',
      },
      bg: '#2F313F',
      borderRadius: '3rem',
      px: '2rem',
      minH: '0.2rem',
      h: '2.4rem',
    },
    solid: {
      color: 'white',
      bgColor: 'primary.500',
      width: { md: '130px' },
      _focus: {
        bgColor: 'brand.primary.500',
      },
      _hover: {
        color: 'white',
        bgColor: 'primary.500',
      },
    },

    roundSolid: {
      color: 'white',
      bgColor: 'primary.500',
      minW: '130px',
      minH: '20px',
      borderRadius: '30px',
      fontSize: { base: '12px', md: '16px' },
      _focus: {
        bgColor: 'brand.primary.500',
      },
      _hover: {
        color: 'white',
        bgColor: 'primary.500',
      },
    },
    roundSolidWhite: {
      bgColor: 'white',
      color: 'primary.500',
      minW: '130px',
      minH: '20px',
      borderRadius: '30px',
      fontSize: { base: '12px', md: '16px' },
      _focus: {
        bgColor: 'white',
      },
      _hover: {
        bgColor: 'white',
        color: 'primary.500',
      },
    },
    dashboardBlue: {
      color: 'white',
      bgColor: 'secondary.500',
      padding: '0',
      lineHeight: '1px',
      minW: { base: '70px', md: '130px' },
      minH: { base: '20px', md: '20px' },
      height: { base: '30px', md: '30px' },
      borderRadius: '30px',
      fontSize: { base: '12px', md: '16px' },
      _focus: {
        bgColor: '#2F313F',
      },
      _hover: {
        bgColor: '#2F313F',
      },
    },
    subHead: {
      color: 'white',
      bg: 'secondary.500',
      minH: '10px',
      fontSize: { base: '12px', md: '16px' },
      _focus: {
        bg: 'secondary.500',
      },
      _hover: {
        color: 'white',
        bg: 'secondary.500',
      },
    },
  },
  sizes: {
    sm: {
      minHeight: '40px',
      borderRadius: '4px',
      fontSize: 'sm',
    },
    md: {
      minHeight: '48px',
      fontSize: 'md',
    },
    lg: {
      minHeight: '56px',
      fontSize: 'lg',
    },
  },
};
