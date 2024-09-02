import Header from '@/components/navbar/header';
import SectionContainer from '@/components/SectionContainer';
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
}: PageLayoutProps) => {
  return (
    <SectionContainer>
      <Header />
      {children}
    </SectionContainer>
  );
};

export default PageLayout;
