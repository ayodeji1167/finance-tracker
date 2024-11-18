import CustomTable from '@/components/table/CustomTable';
import { getLocalStorageArray } from '@/utils/storage';
import { Box, Heading } from '@chakra-ui/react';
import { createColumnDef } from './column-def';
import { useState } from 'react';

export function Transactions() {
  const transactions = getLocalStorageArray('transactions');
  const [sorting, setSorting] = useState([]);

  return (
    <Box>
      <Heading>All Transactions</Heading>

      <Box my={'2rem'}>
        <CustomTable
          data={transactions || []}
          columnDef={createColumnDef()}
          tableOptions={{
            state: {
              sorting,
            },
          }}
          setSorting={setSorting as any}
        />
      </Box>
    </Box>
  );
}
