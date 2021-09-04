import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import './Home.css';

export default function Home() {
  const a = useSelector((state:State) => state);
  const d = useDispatch();

  useEffect(() => {
    d(getStolenBikes());
  }, []);

  return (
    <div className="homeCtn">
      <h1>Stolen bikes</h1>
    </div>
  );
}
