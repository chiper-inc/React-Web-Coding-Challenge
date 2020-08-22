import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../pages/Home';

test('renders IncidentsList', () => {
    const root = document.createElement('div')
    ReactDOM.render(<Home/>, root)
    expect(root.querySelector('h3').textContent).toBe('Filters')
});

 


        
        