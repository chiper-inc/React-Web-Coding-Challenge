import React,{useState} from 'react';
import {useForm} from '../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Filter({
    getData,
    setTotalCasesCount,
    setReportedBikes,
    startDate,
    endDate,
    setStartDate,
    setEndDate }) {

    const [ formValues, handleInputChange, reset ] = useForm({ keyword: '' })
    const [allButton, setAllButton] = useState(false);
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
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="From"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="To"
                />
            </form>
                {allButton && <button onClick={() => getData()}>See all</button>}
        </>
    )
}

export default Filter
