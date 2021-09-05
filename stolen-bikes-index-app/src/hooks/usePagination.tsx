import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../interfaces/SimpleStolenBikesInterface';
import { State } from '../redux/reducer';

export const usePagination = (perPage: number = 10) => {
  
  const index = useSelector((state:State) => state.actualPage);
  const allItems = useSelector((state:State) => state.stolenBikes);

  const [page, setPage] = useState<SimpleStolenBikes[]>([]);

  useEffect(() => {
    setPage(allItems.slice(perPage * (index - 1), perPage * index));
  }, []);

  return {
    totalItems: allItems.length,
    page,
    perPage,
  };
};

export default usePagination;
