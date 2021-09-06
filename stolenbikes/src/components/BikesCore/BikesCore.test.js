import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import BikesCore from './BikesCore';

test('render content BikesCore', () => {
    const note = {
        content: 'Check Component Render',
        important: true
    }

    const component = render(<BikesCore/>)

})