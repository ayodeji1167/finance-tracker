import { createColumnHelper } from '@tanstack/react-table';
import { Box } from '@chakra-ui/react';

import { ITransaction } from '@/shared/interface/transaction';
import { addComma } from '@/utils/number-helper';
import moment from 'moment';

const columnHelper = createColumnHelper<ITransaction>();

export const createColumnDef = () => {
  return [
    columnHelper.accessor('amount', {
      cell: (props) => (
        <Box cursor={'pointer'}>{addComma(props.getValue() || 0)}</Box>
      ),
      header: 'Amount',
      id: 'amount',
      sortingFn: 'basic',
    }),
    columnHelper.display({
      cell: (props) => (
        <Box cursor={'pointer'}>
          {moment(props.row.original?.date)?.format('D, MMM YYYY')}
        </Box>
      ),
      header: 'Date',
      id: 'date',
    }),
    columnHelper.display({
      cell: (props) => (
        <Box cursor={'pointer'}>{props.row.original.category?.name}</Box>
      ),
      header: 'Category',
      id: 'category',
    }),
    columnHelper.display({
      cell: (props) => <Box cursor={'pointer'}>{props.row.original.notes}</Box>,
      header: 'Note',
      id: 'note',
    }),
  ];
};
