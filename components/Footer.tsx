import { Box } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" as="footer">
      &copy; 2022 Copyright -{' '}
      <a className="text-gray-800" href="https://opdev.co.uk/">
        Oliver Patrick.{' '}
      </a>
      All Rights Reserved.
    </Box>
  );
}

export default Footer;
