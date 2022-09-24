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
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import Section from '../../components/Section';
import { useAuth } from '../../context/AuthContext';
import { ViewIcon, ViewOffIcon } from '../../components/SVG';

const Register: NextPage = () => {
  const router = useRouter();
  const { user, signup } = useAuth();
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
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(user);

    console.log(data.email, JSON.stringify(data.password));
    console.log(typeof data.email, typeof JSON.stringify(data.password));

    try {
      await signup(data.email, data.password);
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
          Register
        </Heading>
        <Divider my={6} />
        <Box my={6} alignItems="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} w={280}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  {...register('email', {
                    required: true
                  })}
                />
                <FormErrorMessage>
                  {errors.email && <Text fontSize={12}></Text>}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={errors.password ? true : false}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: true,
                      min: 8,
                      pattern: /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g
                    })}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                      style={{ padding: 0 }}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && (
                    <Text maxW={250}>
                      Passwords must contain 1 special and upper case character
                    </Text>
                  )}
                </FormErrorMessage>
              </FormControl>

              <Stack spacing={10}>
                <Button
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  color="#f4f4f4"
                  _hover={{
                    bgGradient: 'none',
                    bgColor: 'purple'
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default Register;
