import {
  Box,
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { GoEyeClosed, GoEye } from 'react-icons/go';

type PasswordInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  touched?: boolean | undefined;
};
export default function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl {...props.formControlProps}>
      <FormLabel
        requiredIndicator={<abbr title="required field"></abbr>}
        fontFamily={'body'}
        fontWeight={'semibold'}
        fontSize={'15px'}
        {...props.formLabelProps}
      >
        {props.formControlProps?.label}
      </FormLabel>
      <InputGroup>
        <Input
          {...props.inputProps}
          errorBorderColor="crimson"
          pr=".5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement h={'100%'} width={{ base: '3rem', md: '4.5rem' }}>
          <Box cursor={'pointer'} onClick={handleClick}>
            {!show ? <GoEye /> : <GoEyeClosed />}
          </Box>
        </InputRightElement>
      </InputGroup>
      {props?.errorMessage && props?.touched && (
        <Text fontSize={'12px'} color={'red'}>
          {props.errorMessage}
        </Text>
      )}
    </FormControl>
  );
}
