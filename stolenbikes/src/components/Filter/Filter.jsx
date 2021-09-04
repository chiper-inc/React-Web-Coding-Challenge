import React,{useState} from 'react';
import {useForm} from '../../hooks/useForm';

function Filter({getData,setTotalCasesCount,setReportedBikes}) { //destructuring de funciones que me vienen de BikesList
    const [allButton, setAllButton] = useState(false);
    const [ formValues, handleInputChange, reset ] = useForm({ keyword: '' })
    const { keyword } = formValues;

    const handleSubmit = (e) => {
        if(keyword.length >= 2) {
            getData(1,keyword);
            reset();
            setTotalCasesCount(0);
            setReportedBikes();
            setAllButton(true);
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
                autoComplete="off"/>
                <button type="submit">Search</button>
            </form>
                {allButton && <button onClick={() => getData()}>See all</button>}
        </>
    )
}

export default Filter
