/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import { NumericFormat } from 'react-number-format';

type NumericInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
  onValueChange: any;
};
export default function NumericInput(props: NumericInputProps) {
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

      <NumericFormat
        thousandSeparator=","
        prefix=""
        onValueChange={props.onValueChange}
        // @ts-ignore
        value={props.inputProps?.value as number}
        customInput={Input}
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
