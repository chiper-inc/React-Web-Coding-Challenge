import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePagination from '../../hooks/usePagination';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import Card from '../Card/Card';
import HandlePag from '../HandlePag/HandlePag';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector((state:State) => state.stolenBikes);

  const { page } = usePagination(allItems);
 
  useEffect(() => {
    dispatch(getStolenBikes());
  }, []);

  return (
    <div className="homeCtn">
      <HandlePag />
      <h1>Stolen bikes</h1>
      {page.map((element) => (<Card bike={element} />))}
    </div>
  );
}
