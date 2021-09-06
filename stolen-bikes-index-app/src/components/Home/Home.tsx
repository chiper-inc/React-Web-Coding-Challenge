import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import DisplayCards from '../DisplayCards/DisplayCards';
import Search from '../Search/Search';
import Spinner from '../Spinner/Spinner';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const allItems = useSelector(({ stolenBikes }:State) => stolenBikes);
  const serverError = useSelector(({ error }:State) => error);
 
  const [results, setResults] = useState<SimpleStolenBikes[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (!allItems.length) { dispatch(getStolenBikes()); }
  }, []);

  if (serverError) return <h3 className="homeCtn error">Server Error. Please try later</h3>;
  return (
    <div className="homeCtn fadeIn">
      <h1>Stolen bikes</h1>

      <Search onSearch={setResults} isSearch={setIsSearch} />
      
      {!allItems.length 
        ? <Spinner />
        : <DisplayCards list={isSearch ? results : allItems} />}
    </div>
  );
}
