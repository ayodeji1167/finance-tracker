/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Icon,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import { FaAsterisk } from 'react-icons/fa';
import { NumberFormatValues, NumericFormat } from 'react-number-format';

export type NumericInputProps = {
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  inputProps?: InputProps;
  errorMessage?: string | undefined;
  warningMessage?: string | undefined;
  touched?: boolean | undefined;
  onValueChange: (val: NumberFormatValues) => void;
};
export default function AmountInput(props: NumericInputProps) {
  return (
    <FormControl {...props.formControlProps}>
      {props.formControlProps?.label && (
        <FormLabel
          requiredIndicator={
            <Icon
              ml={'.3rem'}
              mb={'.1rem'}
              boxSize={'.4rem'}
              color={'red.400'}
              as={FaAsterisk}
            />
          }
          fontWeight={'500'}
          fontSize={'.875rem'}
          mb={'0.375rem'}
          color={'#474D66'}
          {...props.formLabelProps}
        >
          {props.formControlProps?.label}
        </FormLabel>
      )}

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
        h={'3rem'}
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
