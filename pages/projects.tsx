import { ReactNode, useState } from 'react';
import type { NextPage } from 'next';

import Layout from '../components/layouts/content';

import { Container, SimpleGrid, Text } from '@chakra-ui/react';
import Section from '../components/Section';
// import { WorkGridItem } from '../components/Grid';

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
      </Container>
    </Layout>
  );
};

export default Projects;
