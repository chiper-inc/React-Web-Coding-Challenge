import { BaseLayout, Header } from '@/components/Organisms';
import React from 'react';

const PageHome: React.FC = () => {
  return (
    <>
      <BaseLayout>
        <Header onSearch={(params) => console.log(params)} />
      </BaseLayout>
    </>
  );
};

export { PageHome };
