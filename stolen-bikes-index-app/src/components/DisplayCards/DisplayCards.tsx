import React, { useEffect } from 'react';
import usePagination from '../../hooks/usePagination';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import Card from '../Card/Card';

interface Props {
  list: SimpleStolenBikes[]
}
export default function DisplayCards({ list }: Props) {

  const {
    page, getPage, index, prevPage, nextPage, goLast, goFirst, 
  } = usePagination(list);

  useEffect(() => {
    getPage();
  }, [list]);

  return (
    <div>
      <span>{index}</span>
      <button type="button" onClick={prevPage}>back</button>
      <button type="button" onClick={nextPage}>next</button>
      <button type="button" onClick={goFirst}>first</button>
      <button type="button" onClick={goLast}>last</button>
      
      {page.map((element, i) => (<Card bike={element} key={i.toString()} />))}
    </div>
  );
}
