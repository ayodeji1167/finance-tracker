import { addComma } from '@/utils/number-helper';
import {
  Box,
  SimpleGrid,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
  Flex,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import AddExpenseModal from './AddExpenseModal';
import { getLocalStorageArray } from '@/utils/storage';

function Item({ color, name, value }) {
  return (
    <Box>
      <Flex alignItems={'center'} mb={'.15rem'} gap={'.375rem'}>
        <Box bg={color} h=".75rem" w=".25rem" rounded={'.25rem'}></Box>
        <Text textStyle={'p-200'} color={'neutral.700'} fontWeight={500}>
          {name}
        </Text>
      </Flex>
      <Text fontWeight={500} fontSize={'.9rem'}>
        {value}AED
      </Text>
    </Box>
  );
}
export function Home() {
  const [transactions, setTransactions] = useState(
    getLocalStorageArray('transactions')
  );
  const incomeSum = transactions.reduce((sum, transaction) => {
    return transaction.category.category === 'INCOME'
      ? sum + transaction.amount
      : sum;
  }, 0);

  // Calculate sum of expenses
  const expenseSum = transactions.reduce((sum, transaction) => {
    return transaction.category.category === 'EXPENSE'
      ? sum + transaction.amount
      : sum;
  }, 0);
  const balance = Number(incomeSum) - Number(expenseSum);

  const expenseCategories = [incomeSum, expenseSum, balance];
  const expenseChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Income', 'Expense', 'Balance'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: false,
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ['#FFC90A', '#1DBF73', '#5654D4'],
    stroke: {
      show: false,
    },
  };

  return (
    <Box p={6}>
      <Flex justifyContent={'space-between'}>
        <Heading as="h2" size="lg" mb={6}>
          Dashboard
        </Heading>

        <AddExpenseModal setTransactions={setTransactions} />
      </Flex>

      {/* Statistics Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <StatCard
          label="Total Income"
          value={addComma(incomeSum)}
          color="green.500"
        />
        <StatCard
          label="Total Expenses"
          value={addComma(expenseSum)}
          color="red.500"
        />
        <StatCard label="Balance" value={addComma(balance)} color="blue.500" />
      </SimpleGrid>

      {/* Chart */}
      <Box bg="white" p={6} borderRadius="md" shadow="md">
        <Heading as="h3" size="md" mb={4}>
          Income vs Expenses
        </Heading>
        <Flex
          // justifyContent={'space-between'}
          direction={{ base: 'column', md: 'row' }}
          mt={'1.75rem'}
          alignItems={'center'}
        >
          <Box flexBasis={'50%'} position="relative" w={'20rem'}>
            <ReactApexChart
              options={expenseChartOptions}
              series={expenseCategories}
              type="donut"
              width="100%"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Text
                textAlign={'center'}
                mb={'.2rem'}
                textStyle={'p-200'}
                color={'neutral.800'}
                fontWeight={500}
              >
                Payroll Total Cost
              </Text>
              <Text textAlign={'center'} textStyle={'h-600'}>
                {addComma(balance)}
              </Text>
            </Box>
          </Box>
          <Stack spacing={'1rem'}>
            <Item
              name={'Total Income'}
              value={addComma(incomeSum)}
              color={'#FFC90A'}
            />
            <Item
              name={'Total Expenses'}
              value={addComma(expenseSum)}
              color={'#1DBF73'}
            />
            <Item
              name={'Balance'}
              value={addComma(balance)}
              color={'#5654D4'}
            />
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => (
  <Box bg="white" p={6} borderRadius="md" shadow="md">
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber color={color}>{value}</StatNumber>
    </Stat>
  </Box>
);
