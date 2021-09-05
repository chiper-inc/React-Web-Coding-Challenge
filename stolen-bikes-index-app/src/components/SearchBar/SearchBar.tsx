/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../../interfaces/SimpleStolenBikesInterface';
import { State } from '../../redux/reducer';

interface Props {
  onChange: Dispatch<SetStateAction<SimpleStolenBikes[]>>
}

 interface Inputs {
  title:string,
  from:Date,
  to:Date 
}

export default function SearchBar({ onChange }:Props) {
  
  const [inputs, setInputs] = useState<Inputs>({ title: '', from: new Date(0), to: new Date() });
  const allItems = useSelector(({ stolenBikes }:State) => stolenBikes);

  const handleInputChange = (event:any) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
     
    const result = allItems.filter(
      ({ title, dateOfTheft }) => (title.toLowerCase().includes(inputs.title)
                && dateOfTheft > new Date(inputs.from)
                && dateOfTheft < new Date(inputs.to)),
    );

    onChange(result);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>

        <input name="title" type="text" onChange={handleInputChange} placeholder="Search..." />

        <label> from </label>
        <input type="date" name="from" onChange={handleInputChange} />

        <label>to </label>
        <input type="date" name="to" onChange={handleInputChange} />

        <button type="submit">search</button>
      </form>
    </div>

  );
}
