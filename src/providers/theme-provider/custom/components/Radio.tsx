import { ComponentDefaultProps } from '@chakra-ui/react';
export const Radio: ComponentDefaultProps = {
  baseStyle: {
    control: {
      // Customize the size of the radio circle
      w: '1.5rem', // width
      h: '1.5rem', // height
      borderWidth: '2px', // border width
      borderRadius: 'full', // make it round
      boxShadow: 'none',

      // Customize the border color
      borderColor: 'neutral.700',

      // Customize the checked state (when the radio is selected)
      _checked: {
        bg: 'white', // background color when checked
        borderColor: 'primary.500', // border color when checked
        color: 'white', // checkmark color when checked

        _before: {
          // Customize the inner circle when checked
          content: '""',
          display: 'block',
          w: '0.5rem',
          h: '0.5rem',
          bg: 'primary.500',
          borderRadius: '50%',
        },
      },

      // Customize hover state
      _hover: {
        borderColor: 'primary.500',
      },

      // Customize focus state (when the radio is focused)
      _focus: {
        boxShadow: 'none', // Example: blue focus ring
      },
    },
  },
};
