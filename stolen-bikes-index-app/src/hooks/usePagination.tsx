import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../interfaces/SimpleStolenBikesInterface';
import { State } from '../redux/reducer';

export const usePagination = (allItems:SimpleStolenBikes[], perPage: number = 10) => {
  
  const index = useSelector((state:State) => state.actualPage);

  const [page, setPage] = useState<SimpleStolenBikes[]>([]);

  useEffect(() => {
    setPage(allItems.slice(perPage * (index - 1), perPage * index));
  }, [index]);

  return {
    totalItems: allItems.length,
    page,
    perPage,
  };
};

export default usePagination;
