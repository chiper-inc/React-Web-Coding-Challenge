import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Scroll from './components/Scroll/Scroll';

function App() {
    return (
        <>
            <Route path='/' component={NavBar} />
            <Route path='/' component={Home} />
            <Route path='/' component={Scroll} />
        </>
    );
}

export default App;
