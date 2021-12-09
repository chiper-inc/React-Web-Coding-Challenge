import { useEffect, useState } from 'react';
import { Button, PaginationContainer } from './styles';

interface IPaginator {
  totalPage: number;
  currentPage: number;
  limit?: number;
  changePage: (page: number) => void
}

const Pagination = ({
  totalPage, currentPage, limit, changePage,
}: IPaginator) => {
  const [pages, setPages] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(currentPage);

  const calculatePages = () => {
    if (limit) {
      const from = (current - limit) > 0 ? (current - limit) : 1;
      let to = from + (limit * 2);
      to = to >= totalPage ? totalPage : to;

      const pagesArray = [];
      for (let page = from; page <= to; page += 1) {
        pagesArray.push(page);
      }
      setPages(pagesArray);
    }
  };

  useEffect(() => {
    calculatePages();
  }, [current]);

  const handleClick = (page: number) => {
    setCurrent(page);
    changePage(page);
  };

  const handlerNextClick = () => {
    if (current < totalPage) {
      setCurrent(current + 1);
      changePage(current + 1);
    }
  };

  const handlerPrevClick = () => {
    if (current > 1) {
      setCurrent(current - 1);
      changePage(current - 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={() => handlerPrevClick()}>Prev</Button>
      {pages.map(
        (page) => (
          <Button
            key={page.toString()}
            onClick={() => handleClick(page)}
          >
            {page}
          </Button>
        ),
      )}
      <Button onClick={() => handlerNextClick()}>Next</Button>
    </PaginationContainer>
  );
};

Pagination.defaultProps = {
  limit: 3,
};

export default Pagination;
