import Head from 'next/head';
import React from 'react';
import { Container, GlobalStyle } from './styles';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
}: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Police Department of Berlin</title>
      </Head>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};

export { BaseLayout };
