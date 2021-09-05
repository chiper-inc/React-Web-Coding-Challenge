import React, { Dispatch, SetStateAction, useState } from 'react';
import useFilter from '../../hooks/useFilter';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';

interface Props {
  onChange: Dispatch<SetStateAction<SimpleStolenBikes[]>>
}
export default function SearchBar({ onChange }:Props) {

  const [input, setInput] = useState('');
  const { filterByTitle } = useFilter();

  const handleInputChange = (event:any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    onChange(filterByTitle(input));
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" onChange={handleInputChange} placeholder="Search..." required />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
