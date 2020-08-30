import React from 'react';
import moment from 'moment';
import styled from '../../theme';

const SearchWrapper = styled.div`
  width: 900px;
  text-align: center;
  margin: 30px auto;

  input {
    margin: 0 10px;
    padding: 10px;
    font-size: 0.73em;
    border: 1px solid #4996a2;
    color: #1d3f72;

    &[type=text] {
      width: 340px;
    }
  }

  button {
    margin: 0 10px;
    padding: 10px;
    font-size: 0.73em;
    border: 1px solid #4996a2;
    color: #1d3f72;
  }
`;

export default class SearchBar extends React.Component {
  state = {
    query: '',
    occurredAfter: '',
    occurredBefore: ''
  };

  dateConv(e) {
    e = e || new Date();
    let value = Date.parse(e.target.value).toString().substr(0, Date.parse(e.target.value).toString().length - 3);
    return value;
  }

  render() {
    const today = moment().format('yyyy-MM-DD');

    return (
      <SearchWrapper>
          <input type="text" name="searchstring" placeholder="Search case descriptions" onChange={(e) => this.setState({ query: e.target.value })}/>
          <label>from</label>
          <input type="date" id="start" name="startdate" max={today} onChange={(e) => {
            this.setState({occurredAfter: this.dateConv(e)});
          }} />
          <label>to</label>
          <input type="date" id="end" name="enddate" max={today} onChange={(e) => {
            this.setState({occurredBefore: this.dateConv(e)});
          }} />
          <button onClick={() => {
            this.props.query({query: this.state.query, occurredAfter: this.state.occurredAfter, occurredBefore: this.state.occurredBefore});
          }}>Find Cases</button>
      </SearchWrapper>
    );
  }
}