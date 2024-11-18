import AmountInput from '@/components/input/AmountInput';
import CustomInput from '@/components/input/CustomInput';
import CustomSelect from '@/components/input/CustomSelect';
import CustomTextArea from '@/components/input/CustomTextArea';
import { categories } from '@/data';
import { ITransaction } from '@/shared/interface/transaction';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  chakra,
  Button,
  useDisclosure,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';

const initialData = {
  amount: 0,
  date: '',
  notes: '',
};
export default function AddExpenseModal() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState<ITransaction>(initialData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // onSubmit(formData);

    setFormData(initialData);
  };
  return (
    <Box>
      <Button onClick={onOpen}>Add Expense</Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={{ base: '90%', md: '40rem' }}>
          <ModalCloseButton />
          <ModalBody pt={'3.25rem'}>
            <Center>
              <Heading fontSize={'1.3rem'}>Add Expense</Heading>
            </Center>
            <chakra.form onSubmit={handleSubmit}>
              <Stack my={'1rem'}>
                <AmountInput
                  formControlProps={{ label: 'Amount', isRequired: true }}
                  inputProps={{ placeholder: 'Amount', value: formData.amount }}
                  onValueChange={(e) =>
                    setFormData({ ...formData, amount: Number(e.floatValue) })
                  }
                />

                <CustomInput
                  formControlProps={{ label: 'Date', isRequired: true }}
                  inputProps={{
                    name: 'date',
                    placeholder: 'Date',
                    type: 'date',
                    onChange: handleChange,
                    value: formData.date,
                  }}
                />
                <CustomSelect
                  label="Category"
                  placeholder="Select Category"
                  options={categories.map((item) => ({
                    label: item.name,
                    value: item,
                  }))}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.value })
                  }
                  required
                />
                <CustomTextArea
                  formControlProps={{ label: 'Note' }}
                  inputProps={{
                    placeholder: 'Note',
                    onChange: handleChange,
                    value: formData.notes,
                    name: 'notes',
                  }}
                />

                <Button type="submit" my={'1rem'} w={'100%'}>
                  Proceed
                </Button>
              </Stack>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
