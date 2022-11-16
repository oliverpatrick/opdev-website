import type { NextPage } from 'next';

import Layout from '../components/layouts/content';

import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/Section';
import Table from '../components/Table';
import React, { useState } from 'react';

const tableData = [
  {
    id: 1,
    name: 'Joe Bloggs',
    age: 18,
    country: 'United Kingdom',
    address: '23 Dane Street'
  },
  {
    id: 2,
    name: 'Jan Bloggs',
    age: 18,
    country: 'United Kingdom',
    address: '23 Dane Street'
  },
  {
    id: 3,
    name: 'John Doe',
    age: 40,
    country: 'United Kingdom',
    address: '15 James Lane'
  },
  {
    id: 4,
    name: 'Jane Doe',
    age: 38,
    country: 'United Kingdom',
    address: '15 James Lane'
  }
];

const Ui: NextPage = () => {
  const [rows, selectedRows] = useState<any>();

  console.log(rows);

  return (
    <Layout title="UI">
      <Container>
        <Section delay={0.1}>
          <SimpleGrid columns={[1]} gap={6}>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Text w="100$%" textAlign="center" as="cite">
                Components and UI Designs I&apos;m proud of.
              </Text>
            </Box>
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <SimpleGrid columns={[1]} gap={6}>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Text w="100$%" textAlign="center" m="2">
                Table Component
              </Text>
              <Table
                checkboxSelection
                columns={['ID', 'Name', 'Age', 'Country', 'Address']}
                rows={tableData}
                onCheckboxSelected={(row) => selectedRows(row)}
              />
              <Text w="100$%" textAlign="center" m="2">
                Selected:
              </Text>
              <Box w="100$%" textAlign="center" m="2">
                {rows?.map((row: any) => (
                  <ol
                    key={row.id}
                  >{`${row.name}, ${row.age}, ${row.country}, ${row.address}`}</ol>
                ))}
              </Box>
              <Button>Source</Button>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Ui;
