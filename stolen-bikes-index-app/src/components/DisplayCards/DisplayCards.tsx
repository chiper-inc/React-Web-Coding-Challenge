import React, { useEffect } from 'react';
import usePagination from '../../hooks/usePagination';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import Card from '../Card/Card';
import './DisplayCard.css';

interface Props {
  list: SimpleStolenBikes[]
}
export default function DisplayCards({ list }: Props) {

  const {
    page, getPage, index, prevPage, nextPage, goLast, goFirst, totalItems,
  } = usePagination(list);

  useEffect(() => {
    getPage();
  }, [list]);

  return (
    <div className="displayCtn">
      <p>{`Total: ${totalItems}`}</p>
      {page.map((element, i) => (<Card bike={element} key={i.toString()} />))}
      <div className="buttonsCtn fadeIn">
        <button type="button" onClick={goFirst}>first</button>
        <button type="button" onClick={prevPage}>back</button>
        <span>{index}</span>
        <button type="button" onClick={nextPage}>next</button>
        <button type="button" onClick={goLast}>last</button>
      </div>
      
    </div>
  );
}
