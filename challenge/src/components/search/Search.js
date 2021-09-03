import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, IconoCalendar, PickerStart, SearchForm } from "./syles";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");

  const handleInputChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    console.log(searchText);
    setSearchText("");
  };

  return (
    <Container>
      <span>From</span>
      <PickerStart>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="picker"
          name={endDate}
          value={endDate}
          maxDate={new Date()}
        />
      </PickerStart>

      <IconoCalendar></IconoCalendar>
      <span>To</span>
      <PickerStart>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          maxDate={new Date()}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
          name={endDate}
          value={endDate}
        />
      </PickerStart>
      <IconoCalendar></IconoCalendar>

      <SearchForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchText"
            placeholder="Search case description..."
            autoComplete="off"
            onChange={handleInputChange}
            value={searchText}
          />
          <input type="submit" name="submit" value="Search" />
        </form>
      </SearchForm>
    </Container>
  );
};
export default Search;
