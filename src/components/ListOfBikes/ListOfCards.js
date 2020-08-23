import React, { useState, useEffect } from 'react';
import BikeCard from '../BikeCard/BikeCard';
import useGetData from '../../hooks/useGetData';
import Loading from '../Loading/Loading';
import useConvertUnix from '../../hooks/useConvertUnix';

import {
  Section,
  P,
  Container,
  Button,
  Pages,
  FilterTitle,
  Li,
  InputContainer,
  DateInput,
  Label,
} from './styles';

const ListOfCards = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [toggle, setToggle] = useState(false);
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [unixStart, unixEnd] = useConvertUnix(date1, date2);
  const URL = `https://bikewise.org:443/api/v2/incidents?page=${toggle ? '' : page}&per_page=${toggle ? '' : 10}&incident_type=theft&proximity=Berlin&query=${query}`;
  const [data, loading, error, fetchData] = useGetData(URL);

  const handleChange = (e) => {
    const { value } = e.target;
    const regex = /\s/g;
    const newValue = value.replace(regex, '%20');
    setQuery(newValue);
    value === '' ? setToggle(false) : setToggle(true);
  };

  const handleDateStartChange = (e) => setDate1(e.target.value);

  const handleDateEndChange = (e) => setDate2(e.target.value);

  const handleClickNext = () => {
    page === 7 ? setPage(page) : setPage(page + 1);
  };

  const handleClickLast = () => {
    page === 1 ? setPage(page) : setPage(page - 1);
  };

  useEffect(() => {
    fetchData(URL);
  }, [page, query]);

  return (
    <Section>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <>
          <P>
            Total cases:
            {' '}
            {data.incidents.length}
          </P>
          <InputContainer>
            <FilterTitle
              type='text'
              onChange={handleChange}
              placeholder='search bike description'
            />
            <div>
              <Label>From</Label>
              <DateInput type='date' onChange={handleDateStartChange} />
              <Label>To</Label>
              <DateInput type='date' onChange={handleDateEndChange} />
            </div>
          </InputContainer>
          {data.incidents.length === 0 || error ? (
            <h1>No cases</h1>
          ) : (
            <ul>
              {data.incidents.map((bike) => (
                <BikeCard key={bike.id} {...bike} />
              ))}
            </ul>
          )}
          <Container>
            <div>
              <Button type='button' onClick={() => setPage(1)}>
                First Page
              </Button>
              <Button type='button' onClick={handleClickLast}>
                Previus Page
              </Button>
            </div>
            <Pages>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Li key={id} onClick={() => setPage(id)} color={page === id ? 'red' : 'black'}>
                  <a>{id}</a>
                </Li>
              ))}
            </Pages>
            <div>
              <Button type='button' onClick={handleClickNext}>
                Next Page
              </Button>
              <Button type='button' onClick={() => setPage(6)}>
                Last Page
              </Button>
            </div>
          </Container>
        </>
      )}
    </Section>
  );
};

export default ListOfCards;
