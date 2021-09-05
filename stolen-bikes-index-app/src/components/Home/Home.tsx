import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import DisplayCards from '../DisplayCards/DisplayCards';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector((state:State) => state.stolenBikes);
 
  useEffect(() => {
    if (!allItems.length) { dispatch(getStolenBikes()); }
  }, []);

  return (
    <div className="homeCtn">
      <h1>Stolen bikes</h1>
      <SearchBar />
      <DisplayCards list={allItems} />
    </div>
  );
}
