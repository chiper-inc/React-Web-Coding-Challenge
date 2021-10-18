import { Loading } from '@/components/Atoms';
import useLoading from '@/contexts/Loading';
import Head from 'next/head';
import React from 'react';
import { Container, GlobalStyle } from './styles';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
}: BaseLayoutProps) => {
  const { loading } = useLoading();
  return (
    <>
      <Head>
        <title>Police Department of Berlin</title>
      </Head>
      {loading && <Loading />}
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};

export { BaseLayout };
