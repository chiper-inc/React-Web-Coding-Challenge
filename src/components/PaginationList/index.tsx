import React, { ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

interface IPaginationList {
    count: number;
    onChangePage: (page: number) => void;
    page: number
}

const PaginationList = ({ count, onChangePage, page }: IPaginationList) => {
  const changePage = (event: ChangeEvent<any>, page: number) => {
    onChangePage(page);
  };
  return (
        <Stack spacing={1}>
            <Pagination page={page} onChange={(event, page) => changePage(event, page)} count={count}/>
        </Stack>
  );
};

export { PaginationList };
