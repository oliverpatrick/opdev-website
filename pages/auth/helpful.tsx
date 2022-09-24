import { ReactNode, useState } from 'react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

import Layout from '../../components/layouts/content';

import {
  Box,
  Button,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid
} from '@chakra-ui/react';
import Section from '../../components/Section';

const LinkTag = ({ text, href }: any) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <LinkBox>
        <Box>
          <LinkOverlay href={href} target="_blank">
            <Button color="#f4f4f4" _hover={{ color: 'pink' }}>
              {text}
            </Button>
          </LinkOverlay>
        </Box>
      </LinkBox>
    </NextLink>
  );
};

const Helpful: NextPage = () => {
  const [projectData, setProjectData] = useState<ReactNode | null>(null);
  return (
    <Layout title="Helpful">
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Principles
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
              text="SOLID"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Design
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://en.wikipedia.org/wiki/Domain-driven_design"
              text="Domain Driven Design"
            />

            <LinkTag
              href="https://en.wikipedia.org/wiki/Domain-driven_design"
              text="Domain Driven Design"
            />
            <LinkTag
              href="https://en.wikipedia.org/wiki/Domain-driven_design"
              text="Domain Driven Design"
            />
            <LinkTag
              href="https://en.wikipedia.org/wiki/Domain-driven_design"
              text="Domain Driven Design"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Testing
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <LinkTag
              href="https://en.wikipedia.org/wiki/Test-driven_development"
              text="Test Driven Development"
            />
            <LinkTag
              href="https://en.wikipedia.org/wiki/Behavior-driven_development"
              text="Behaviour Driven Development"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Helpful;
