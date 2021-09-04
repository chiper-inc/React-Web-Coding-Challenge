import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, IconoCalendar, PickerStart, SearchForm } from "./syles";
import axios from "axios";

const Search = ({ setBikes, setCase, setLoading }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");

  const handleInputChange = ({ target }) => {
    setSearchText(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Debe llenar el campo");
    } else {
      const fetchBikes = async () => {
        setLoading(true);
        const { data } = await axios.get(
          `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&query=${searchText}&location=Berlin&distance=10&stolenness=proximity`
        );
        setBikes(data.bikes);
        setCase(data.bikes.length);
        setLoading(false);
        setSearchText("");
      };
      fetchBikes();
    }
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
Search.propTypes = {
  setBikes: PropTypes.func,
  setCase: PropTypes.func,
  setLoading: PropTypes.boolean,
};

export default Search;
