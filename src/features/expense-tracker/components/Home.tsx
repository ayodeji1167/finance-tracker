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
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import AddExpenseModal from './AddExpenseModal';

const expenseCategories = [800, 1200, 500, 400, 600];
const expenseChartOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: ['Food', 'Business', 'Transport', 'Entertainment', 'Others'],
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
  colors: ['#FFC90A', '#1DBF73', '#5654D4', '#FD8ADC', '#11428C'],
  stroke: {
    show: false, // Removes the border between slices
  },
};

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
  // Dummy data for statistics and chart
  const stats = {
    income: 5000,
    expenses: 3500,
    balance: 1500,
  };

  return (
    <Box p={6}>
      <Flex justifyContent={'space-between'}>
        <Heading as="h2" size="lg" mb={6}>
          Dashboard
        </Heading>

        <AddExpenseModal />
      </Flex>

      {/* Statistics Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <StatCard
          label="Total Income"
          value={`$${stats.income}`}
          color="green.500"
        />
        <StatCard
          label="Total Expenses"
          value={`$${stats.expenses}`}
          color="red.500"
        />
        <StatCard
          label="Balance"
          value={`$${stats.balance}`}
          color="blue.500"
        />
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
                {addComma(1223)} AED
              </Text>
            </Box>
          </Box>
          <Stack spacing={'1rem'}>
            <Item
              name={'Net Salary'}
              value={addComma(2343)}
              color={'#FFC90A'}
            />
            <Item name={'Taxes(IR)'} value={addComma(2343)} color={'#1DBF73'} />
            <Item
              name={'CNSS(Employee)'}
              value={addComma(2343)}
              color={'#5654D4'}
            />
            <Item
              name={'AMO(Employer)'}
              value={addComma(2343)}
              color={'#FD8ADC'}
            />
            <Item
              name={'CNSS(Employer)'}
              value={addComma(2343)}
              color={'#11428C'}
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
