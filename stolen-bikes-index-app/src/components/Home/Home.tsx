import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePagination from '../../hooks/usePagination';
import { getStolenBikes } from '../../redux/actions';
import { State } from '../../redux/reducer';
import Card from '../Card/Card';
import './Home.css';

export default function Home() {
  const bikes = useSelector((state:State) => state.stolenBikes);
  const dispatch = useDispatch();

  const { page } = usePagination(bikes);

  useEffect(() => {
    dispatch(getStolenBikes());
  }, []);

  return (
    <div className="homeCtn">
      <h1>Stolen bikes</h1>
      {page.map((element) => (
        <Card
          id={element.id}
          title={element.title}
          dateOfTheft={element.dateOfTheft}
          description={element.description}
          locationOfTheft={element.locationOfTheft}
        />
      ))}
    </div>
  );
}
