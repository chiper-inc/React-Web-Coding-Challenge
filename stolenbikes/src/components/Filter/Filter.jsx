import React,{useState} from 'react';
import {useForm} from '../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Filters, FiltersContainer, FormContainer} from './Filter.styles';


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
        <FiltersContainer>
            <Filters>
                <FormContainer onSubmit={handleSubmit}>
                    <input
                    search
                    type='text'
                    name="keyword"
                    value={keyword}
                    placeholder="Search case descriptions"
                    onChange={handleInputChange}
                    autoComplete="off"/>
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
                    <button type="submit">Search</button>
                </FormContainer>
                <FormContainer all>
                    {allButton && <button onClick={() => getData()}>See all</button>}
                </FormContainer>
            </Filters>
        </FiltersContainer>
    )
}

export default Filter
