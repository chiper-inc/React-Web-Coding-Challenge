import { BaseLayout, HeaderHome, ListBikes } from '@/components/Organisms';
import { IBikes } from '@/Interfaces';
import React from 'react';

interface PageHomeProps {
  onSearch: (params: object) => void;
  bikesStolen: IBikes[];
  countStolen: number;
}

const PageHome: React.FC<PageHomeProps> = ({
  onSearch,
  bikesStolen,
  countStolen,
}: PageHomeProps) => {
  return (
    <>
      <BaseLayout>
        <HeaderHome onSearch={(params) => onSearch(params as object)} />
        <ListBikes list={bikesStolen} />
      </BaseLayout>
    </>
  );
};

export { PageHome };
