import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Heading as="h1" mb="5">
        Uh oh!
      </Heading>
      <Text>The page you&apos;re looking for was not found. 😔</Text>
      <Divider my={6} />
      <Box my={6} alignItems="center">
        <NextLink href="/" passHref>
          <Button
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            color="#f4f4f4"
            _hover={{
              bgGradient: 'none',
              bgColor: 'purple'
            }}
          >
            Return 🏠 for 🍪
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
