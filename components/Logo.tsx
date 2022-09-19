import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const GradientText = styled.span`
  font-size: 20px;
  background-image: linear-gradient(to right, #e834eb, #8730ff);
  background: -webkit-linear-gradient(to right, #e834eb, #8730ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  font-weight: 600;
`;

function Logo() {
  return (
    <Link href="/" scroll={false}>
      <a>
        <Text flex="flex" align="center" cursor="pointer">
          OLIVER
          <GradientText>PATRICK</GradientText>
          Dev
        </Text>
      </a>
    </Link>
  );
}

export default Logo;
