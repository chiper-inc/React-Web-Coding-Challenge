import React, { useState } from 'react';

export default function SearchBar() {

  const [input, setInput] = useState('');

  const handleInputChange = (event:any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
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
