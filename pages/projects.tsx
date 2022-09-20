import { ReactNode, useState } from 'react';
import type { NextPage } from 'next';

import Layout from '../components/layouts/content';

import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Section from '../components/Section';
import { WorkGridItem } from '../components/Grid';

const Projects: NextPage = () => {
  const [projectData, setProjectData] = useState<ReactNode | null>(null);
  return (
    <Layout title="Projects">
      <Container>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {projectData === null && (
              <Text w="100$%" textAlign="center">
                No current projects to show
              </Text>
            )}
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
      </Container>
    </Layout>
  );
};

export default Projects;
