import React, { useState } from 'react';
import { SearchContent, Input, Button } from './styles';
import { ISearchData } from '../../interfaces/Search';

interface ISearch {
    searchAction: (data: ISearchData) => void
}

const Search = ({ searchAction }: ISearch) => {
  const [query, setQuery] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');

  const onChangeQueryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onChangeDateToInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTo(event.target.value);
  };

  const onChangeDateFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateFrom(event.target.value);
  };

  const handlerClickButton = () => {
    searchAction({ query, dateTo, dateFrom });
  };

  return (
    <SearchContent>
      <Input placeholder="Search case descriptions" value={query} onChange={onChangeQueryInput} />
      <Input placeholder="from" type="date" value={dateFrom} onChange={onChangeDateFromInput} />
      <Input placeholder="to" type="date" value={dateTo} onChange={onChangeDateToInput} />
      <Button type="button" onClick={handlerClickButton}>Find cases</Button>
    </SearchContent>
  );
};

export default Search;
