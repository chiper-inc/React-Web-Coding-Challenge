import React, { useContext, useState } from "react";
import { Bike } from "../context/bike";

const BikeForm = () => {
  const { dispatch } = useContext(Bike);

  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
    dispatch({ key: ['search', 'title'], payload: e.target.value });
    dispatch({ type: 'FILTER' });
  }

  function handleFromChange(e) {
    setFrom(e.target.value);
    dispatch({ key: ['search', 'from'], payload: new Date(e.target.value).getTime() });
    dispatch({ type: 'FILTER' });
  }

  function handleToChange(e) {
    setTo(e.target.value);
    dispatch({ key: ['search', 'to'], payload: new Date(e.target.value).getTime() });
    dispatch({ type: 'FILTER' });
  }

  function handleClear(e) {
    setTitle('');
    setFrom('');
    setTo('');
    dispatch({ type: 'CLEAR' });
    dispatch({ type: 'FILTER' });
  }


  return (<>
    <Form
      title={title}
      from={from}
      to={to}
      handleTitleChange={handleTitleChange}
      handleFromChange={handleFromChange}
      handleToChange={handleToChange}
      handleClear={handleClear}
    />
  </>);
};


const Form = ({ title, from, to, handleTitleChange, handleFromChange, handleToChange, handleClear }) =>
  <div className="row">
    <div className="col-md-12">
      <br />
      <div className="input-group">
        <input
          data-testid="input-data-title"
          className="form-control"
          value={title}
          autoFocus={true}
          placeholder="Title"
          onChange={handleTitleChange}
        />

        <input
          data-testid="input-data-from"
          type="date"
          className="form-control"
          value={from}
          autoFocus={true}
          placeholder="From"
          onChange={handleFromChange}
        />
        <input
          data-testid="input-data-to"
          type="date"
          className="form-control"
          value={to}
          autoFocus={true}
          placeholder="From"
          onChange={handleToChange}
        />
        <div className="input-group-append">
          <button data-testid="btn-clear" className="btn btn-primary" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>;

export default BikeForm;
