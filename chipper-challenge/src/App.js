import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
