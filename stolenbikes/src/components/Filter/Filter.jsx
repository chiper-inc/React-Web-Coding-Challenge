import React,{useState} from 'react';
import {useForm} from '../../hooks/useForm';

function Filter({getData}) { //destructuring de funciones que me vienen de BikesList
    const [allButton, setAllButton] = useState(false);
    const [ formValues, handleInputChange, reset ] = useForm({ keyword: '' })
    const { keyword } = formValues;

    const handleSubmit = (e) => {
        if(keyword.length >= 2) {
          e.preventDefault();
          getData(1,keyword)
          reset()
          setAllButton(true)
        }
        e.preventDefault();
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name="keyword"
                value={keyword}
                placeholder="Search case descriptions"
                onChange={handleInputChange}
                autocomplete="off"/>
                <button type="submit">Search</button>
                {allButton && <button onClick={reset()}>See all</button>}
            </form>
        </>
    )
}

export default Filter
