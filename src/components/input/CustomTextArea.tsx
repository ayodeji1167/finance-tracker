import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Textarea,
  Text,
  TextareaProps,
} from '@chakra-ui/react';
import React from 'react';
type StringInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: TextareaProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
};
export default function CustomTextArea(props: StringInputProps) {
  return (
    <FormControl {...props.formControlProps}>
      <FormLabel
        requiredIndicator={<abbr title="required field"></abbr>}
        fontWeight={'500'}
        fontSize={'.875rem'}
        mb={'0.375rem'}
        color={'#474D66'}
        {...props.formLabelProps}
      >
        {props.formControlProps?.label}
      </FormLabel>
      <Textarea
        fontSize={'.875rem'}
        _placeholder={{ color: '#696F8C', fontSize: '.875rem' }}
        errorBorderColor="crimson"
        border="1px solid #EDEFF5"
        rounded={'.25rem'}
        pl={'1rem'}
        h={'3.375rem'}
        _hover={{ borderColor: 'none' }}
        {...props.inputProps}
      />
      {props?.errorMessage && props?.touched && (
        <Text fontSize={'12px'} color={'red'}>
          {props.errorMessage}
        </Text>
      )}
      {props?.warningMessage && (
        <Text fontSize={'12px'} color={'primary.800'}>
          {props.warningMessage}
        </Text>
      )}
    </FormControl>
  );
}
