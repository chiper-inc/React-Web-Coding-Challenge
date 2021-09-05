import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { SimpleStolenBikes } from '../interfaces/SimpleStolenBikesInterface';

export const usePagination = (allItems:SimpleStolenBikes[], perPage: number = 10) => {
  
  const index = useLocation().search.substr(5) || 1;
  const [page, setPage] = useState<SimpleStolenBikes[]>([]);
  const history = useHistory();

  const top = Math.ceil(allItems.length / perPage);

  const nextPage = () => {
    if (index < top) { 
      history.push(`?pag=${Number(index) + 1}`);
      getPage();
    }
  };

  const prevPage = () => {
    if (index > 1) {
      history.push(`?pag=${Number(index) - 1}`);
      getPage(); 
    }
  };

  const goFirst = () => {
    history.push('?pag=1');
    getPage();
  };

  const goLast = () => {
    history.push(`?pag=${top}`);
    getPage();
  };

  useEffect(() => {
    setPage(allItems.slice(perPage * (Number(index) - 1), perPage * Number(index)));
  }, [index]);

  const getPage = () => {
    setPage(allItems.slice(perPage * (Number(index) - 1), perPage * Number(index)));

  };

  return {
    totalItems: allItems.length,
    page,
    goFirst,
    goLast,
    prevPage,
    nextPage,
    index,
    getPage,
    perPage,
  };
};

export default usePagination;
