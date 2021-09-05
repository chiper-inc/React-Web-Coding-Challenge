import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import DisplayCards from '../DisplayCards/DisplayCards';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector((state:State) => state.stolenBikes);
 
  const [filteredResults, setFilteredResults] = useState<SimpleStolenBikes[]>([]);

  useEffect(() => {
    if (!allItems.length) { dispatch(getStolenBikes()); }
    setFilteredResults([]);
  }, []);

  return (
    <div className="homeCtn">
      <h1>Stolen bikes</h1>
      <SearchBar />
      <DisplayCards list={filteredResults.length ? filteredResults : allItems} />
    </div>
  );
}
