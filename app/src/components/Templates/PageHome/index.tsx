import {
  BaseLayout,
  HeaderHome,
  ListBikes,
  Pagination,
} from '@/components/Organisms';
import { IBikes } from '@/Interfaces';
import React from 'react';

interface PageHomeProps {
  onSearch: (params: object) => void;
  bikesStolen: IBikes[];
  countStolen: number;
  currentPage: number;
  totalPage: number;
  handlePaginate: (num: number) => void;
}

const PageHome: React.FC<PageHomeProps> = ({
  onSearch,
  bikesStolen,
  countStolen,
  currentPage,
  totalPage,
  handlePaginate,
}: PageHomeProps) => {
  return (
    <>
      <BaseLayout>
        <HeaderHome onSearch={(params) => onSearch(params as object)} />
        <ListBikes list={bikesStolen} total={countStolen} />
        <Pagination
          current={currentPage}
          total={totalPage}
          handleClick={handlePaginate}
        />
      </BaseLayout>
    </>
  );
};

export { PageHome };
