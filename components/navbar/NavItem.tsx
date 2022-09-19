import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import NextLink from 'next/link';

import { Link, useColorModeValue } from '@chakra-ui/react';

interface NavItemProps {
  href: string;
  path: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  children: ReactNode;
  [x: string]: any;
}

const NavItem = ({
  href,
  path,
  target,
  children,
  display,
  ...props
}: NavItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        color={active ? '#cf00c5' : inactiveColor}
        target={target}
        display={display}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavItem;
