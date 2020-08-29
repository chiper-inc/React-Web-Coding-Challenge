import React from 'react';
import IncidentsList from './incidents_list/incidents_list';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Police Department of Berlin</h1>
        <h2>Stolen bykes</h2>
      </header>
      <IncidentsList></IncidentsList>
    </div>
  );
}

export default App;
