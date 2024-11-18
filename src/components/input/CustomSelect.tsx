import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import { Text, useBreakpointValue } from '@chakra-ui/react';

interface CustomSelectProps extends SelectProps {
  options: Array<any>;
  value?: any;
  onChange: (value: any) => void;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  selectedOption?: any;
  setSelectedOption?: any;
  defaultValue?: any;
  controlStyle?: any;
}

export default function CustomSelect({
  options,
  onChange,
  placeholder,
  isDisabled,
  label,
  selectedOption,
  defaultValue,
  controlStyle,
  ...rest
}: CustomSelectProps) {
  // const [selectedValue, setSelectedValue] = useState(value);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleSelectChange = (selectedOption: any) => {
    // setSelectedValue(selectedOption);
    onChange(selectedOption); // Pass value to parent component
  };

  return (
    <div>
      {label && (
        <Text
          fontWeight={'500'}
          fontSize={'.875rem'}
          mb={'0.375rem'}
          color={'#474D66'}
        >
          {label}
        </Text>
      )}
      <Select
        id="select-custom"
        value={selectedOption}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder || 'Select an option'}
        isDisabled={isDisabled || false}
        styles={{
          control: (base) => ({
            ...base,
            width: '100%',
            height: `3.375rem`,
            borderRadius: `.25rem`,
            fontSize: `.875rem`,
            border: '1px solid #EDEFF5',
            ...controlStyle,
          }),
          option: (provided) => ({
            ...provided,
            fontSize: `${isDesktop ? '.8rem' : '.8rem'}`, // Adjust font size of options
          }),
          singleValue: (provided) => ({
            ...provided,
            fontSize: `.875rem`,
          }),
          placeholder: (provided) => ({
            ...provided,
            fontSize: `.875rem`,
            color: '#696F8C',
          }),
          multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: data.color,
            ...rest.styles?.multiValueLabel,
          }),
        }}
        {...rest}
      />
    </div>
  );
}
