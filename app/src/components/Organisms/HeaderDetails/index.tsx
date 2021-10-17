import { Back, TitlePage } from '@/components/Molecules';
import { useRouter } from 'next/router';
import React from 'react';

const HeaderDetails: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <TitlePage title="Police Department of Berlin" subtitle="Stolen Bykes" />
      <Back onBack={() => router.back()} />
    </>
  );
};

export { HeaderDetails };
