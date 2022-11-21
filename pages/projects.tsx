import { ReactNode, useState } from 'react';
import type { NextPage } from 'next';

import Layout from '../components/layouts/content';

import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/Section';
import { WorkGridItem } from '../components/Grid';
import { projects, tableData } from '../utils/projectData';
import Table, { ITableRow } from '../components/Table';

const Projects: NextPage = () => {
  const [rows, selectedRows] = useState<{
    [key: string]: any;
  }>();

  return (
    <Layout title="Projects">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2]} gap={6}>
            {projects.map((project) => (
              <WorkGridItem
                key={'ID ' + project.title}
                title={project.title}
                thumbnail={project.thumbnail}
                href={project.href}
              >
                {project.exerpt}
              </WorkGridItem>
            ))}
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Github Contributions
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <WorkGridItem
              title="RuneLite/Enhanced-Discord-Notifications"
              thumbnail="/images/runelite.webp"
              href="https://github.com/oliverpatrick/Enhanced-Discord-Notifications"
            >
              An extension I build on top of a pre-existing plugin for Old
              School Runescape.
            </WorkGridItem>
          </SimpleGrid>
        </Section>

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
                onCheckboxSelected={(row: ITableRow[]) => selectedRows(row)}
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

export default Projects;
