import { useRef, useState, useEffect } from 'react';
import { SimpleStolenBikes } from '../interfaces/SimpleStolenBikesInterface';

export const usePagination = (total: SimpleStolenBikes[], perPage: number = 10) => {
  const index = useRef(1);
  const top = Math.ceil(total.length / perPage);

  const [page, setPage] = useState<SimpleStolenBikes[]>([]);

  const getPage = (number: number) => {
    setPage(total.slice(perPage * (number - 1), perPage * number));
  };

  const nextPage = () => {
    if (index.current < top) {
      index.current += 1;
      getPage(index.current);
    }
  };

  const prevPage = () => {
    if (index.current > 1) {
      index.current -= 1;
      getPage(index.current);
    }
  };

  const goFirst = () => {
    index.current = 1;
    getPage(index.current);
  };

  const goLast = () => {
    index.current = top;
    getPage(index.current);
  };

  useEffect(() => {
    getPage(index.current);
  }, []);

  return {
    index,
    page,
    getPage,
    nextPage,
    prevPage,
    goFirst,
    goLast,
  };
};

export default usePagination;
