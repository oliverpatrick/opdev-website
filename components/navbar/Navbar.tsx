import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import Logo from '../Logo';
import ThemeToggleSwitch from '../ThemeToggleSwitch';
import NavItem from './NavItem';

import { useAuth } from '../../context/AuthContext';

function Navbar({ path }: any) {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      flex={0}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Flex align="center" flex={'flex'} flexDirection="row" mr={5}>
          <NextLink href="/" passHref>
            <Logo />
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row-reverse' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {user ? (
            <Button
              variant="ghost"
              _hover={{
                bgGradient: 'none',
                bgColor: 'purple'
              }}
              onClick={() => {
                logout();
                router.push('/');
              }}
            >
              <Avatar size="xs" name={user.displayName || 'U'} />
            </Button>
          ) : (
            <NextLink href="/auth/login">
              <Button
                variant="ghost"
                _hover={{
                  bgGradient: 'none',
                  bgColor: 'purple'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: '24px', width: '24px' }}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Button>
            </NextLink>
          )}
          <NavItem href="https://services.opdev.co.uk/" path="#">
            CIODev
          </NavItem>
          <NavItem href="/projects" path={path}>
            Projects
          </NavItem>
          <NavItem href="/posts" path={path}>
            Posts
          </NavItem>
          <NavItem
            target="_blank"
            href="https://github.com/oliverpatrick/opdev-website"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={useColorModeValue('#000000', '#f4f4f4')}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source
          </NavItem>
        </Stack>

        <Box flex={0} alignContent="right" display="flex" flexDirection="row">
          <ThemeToggleSwitch />

          <Box ml={2} display={{ base: 'flex', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={
                  <svg
                    style={{ width: '20px', height: '20px' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
                variant="outline"
                aria-label="Options"
              />

              <MenuList>
                {user ? (
                  <MenuItem
                    onClick={() => {
                      logout();
                      router.push('/');
                    }}
                  >
                    <Avatar
                      size="xs"
                      name={user.displayName || 'U'}
                      style={{ marginRight: 5 }}
                    />
                    Logout
                  </MenuItem>
                ) : (
                  <NextLink href="/auth/login">
                    <MenuItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: '24px',
                          width: '24px',
                          paddingRight: '5px'
                        }}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Login
                    </MenuItem>
                  </NextLink>
                )}
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="https://www.services.opdev.co.uk" passHref>
                  <MenuItem as={Link}>CIODev</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/oliverpatrick/opdev-website"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
