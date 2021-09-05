import React from 'react';
import { shallow, config } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Card from '../components/Card/Card';

config({ adapter: new Adapter() });

describe('<Card />', () => {
    let wrapper;

    beforeEach(() => {});

    it('should', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.find('.card').length).toBe(1);
    });
});
