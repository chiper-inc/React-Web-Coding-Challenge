import React from 'react';
import IncidentsList from './incidents_list/incidents_list';
import styled from '../theme';

const Header = styled.header`
  background: #1d3f72;
  color: #fff;
  padding: 20px;
  margin: 0;
  text-align: center;
  border-bottom: 3px solid #71c2cc;

  h1, h2 {
    padding: 0;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  h1 {
    background: url('logo.png') no-repeat;
    background-size: cover;
    width: 267px;
    height: 100px;
    overflow: hidden;
    text-indent: -999px;
    margin-right: 40px;
  }
`;

function App() {
  return (
    <div className="app">
      <Header>
        <h1>Berlin Polizei</h1>
        <h2>Stolen bykes</h2>
      </Header>
      <IncidentsList></IncidentsList>
    </div>
  );
}

export default App;
