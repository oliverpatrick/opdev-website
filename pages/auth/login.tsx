import { useState } from 'react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Layout from '../../components/layouts/content';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import Section from '../../components/Section';
import { useAuth } from '../../context/AuthContext';
import { GoogleIcon } from '../../components/SVG';
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup
} from '../../config/firebase';

const Login: NextPage = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(user);
    try {
      await login(data.email, data.password, rememberMe);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title="login">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Section delay={0.1}></Section>
        <Heading as="h1" mb="5">
          Sign in
        </Heading>
        <Divider my={6} />
        <Box my={6} alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            py={5}
            justifyContent="center"
          >
            <Button onClick={signInWithGoogle}>
              <GoogleIcon height="20px" width="20px" />
            </Button>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} w={280}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  {...register('email', {
                    required: true
                  })}
                  variant="outline"
                  placeholder="Email"
                />
                <FormErrorMessage>
                  {errors.email && (
                    <Text fontSize={12}>This field is required!</Text>
                  )}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  {...register('password', {
                    required: true
                  })}
                  variant="outline"
                  placeholder="Password"
                />
                <FormErrorMessage>
                  {errors.password && (
                    <Text fontSize={12}>This field is required!</Text>
                  )}
                </FormErrorMessage>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox
                    onChange={() => setRememberMe(!rememberMe)}
                    checked={rememberMe}
                  >
                    Remember me
                  </Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  color="#f4f4f4"
                  _hover={{
                    bgGradient: 'none',
                    bgColor: 'purple'
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Text>
                  Don&apos;t have an account?{' '}
                  <NextLink href="register">
                    <Link color={'blue.400'}>Register here</Link>
                  </NextLink>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
