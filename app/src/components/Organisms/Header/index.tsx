import { Forms, TitlePage } from '@/components/Molecules';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <TitlePage title="Police Department of Berlin" subtitle="Stolen Bykes" />
      <Forms />
    </>
  );
};

export { Header };
