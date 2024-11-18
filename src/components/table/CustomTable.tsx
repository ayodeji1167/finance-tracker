import {
  Box,
  HTMLChakraProps,
  InputProps,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react';
import {
  TableOptions,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  PaginationState,
} from '@tanstack/react-table';
import React, { ReactNode } from 'react';
import { FaSortDown, FaSortUp } from 'react-icons/fa';

// Define ThProps and TdProps
type ThProps = HTMLChakraProps<'th'>;
type TdProps = HTMLChakraProps<'td'>;

// Define types for optional sorting, pagination, and meta
interface CustomTableProps<TData extends object> {
  sorting?: SortingState;
  pagination?: PaginationState;
  setSorting?: (
    updater: SortingState | ((prev: SortingState) => SortingState)
  ) => void;
  setPagination?: (
    updater: PaginationState | ((prev: PaginationState) => PaginationState)
  ) => void;
  columnDef: ColumnDef<TData>[];
  data: TData[];
  filter?: {
    tableName: string;
    inputProps?: InputProps;
  };
  total?: number;
  tableOptions?: Partial<TableOptions<TData>>;
  tableHeader?: ReactNode;
  tableFooter?: ReactNode;
  thProps?: ThProps;
  tdProps?: TdProps;
}

export default function CustomTable<TData extends object>({
  sorting,
  pagination,
  setSorting,
  setPagination,
  columnDef,
  data = [],
  tableOptions,
  tableHeader,
  tableFooter,
  thProps,
  tdProps,
}: CustomTableProps<TData>) {
  const table = useReactTable({
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    ...tableOptions,
  });

  return (
    <Box>
      {tableHeader}
      <Box py="1rem" pt="0rem" bg={'white'} rounded={'.5rem'}>
        <Table variant="unstyled">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <Th
                    key={header.id}
                    color="#101840"
                    fontSize=".8rem"
                    fontWeight="500"
                    textTransform="capitalize"
                    px={0}
                    pt={'1rem'}
                    borderBottom="1px solid #F7F7FF"
                    pb="1rem"
                    letterSpacing={'0'}
                    pl={index === 0 ? '1rem' : ''}
                    {...thProps}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <FaSortDown aria-label="sorted descending" />
                        ) : (
                          <FaSortUp aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr
                key={row.id}
                color="neutral.800"
                fontWeight={500}
                mb={4}
                borderBottom="1px solid #F7F7FF"
                fontSize=".8rem"
              >
                {row.getVisibleCells().map((cell, index) => {
                  const meta = cell.column.columnDef.meta as
                    | { isNumeric?: boolean }
                    | undefined;
                  return (
                    <Td
                      pl={index === 0 ? '1rem' : '0'}
                      key={cell.id}
                      isNumeric={meta?.isNumeric}
                      {...tdProps}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
        {tableFooter}
      </Box>
    </Box>
  );
}
