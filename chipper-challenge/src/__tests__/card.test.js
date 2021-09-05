/* eslint-disable react/display-name */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Card from '../components/Card/Card';
import { datos } from '../utils/';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
    let wrapper;

    const stolenBikes = [
        {
            id: 1,
            title: 'Stolen Bike',
            description: 'Stolen Bike',
            large_img:
                'https://www.bike-inspector.com/wp-content/uploads/2017/10/stolen-bike.jpg',
            stolen_location: 'Berlin',
            date_stolen: 1629989555,
        },
        {
            id: 1,
            title: 'Stolen Bike',
            description: 'Stolen Bike',
            stolen_location: 'Berlin',
            date_stolen: 1629989555,
        },
    ];

    const image =
        'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1';

    beforeEach(
        () => (wrapper = (index) => shallow(<Card {...stolenBikes[index]} />))
    );

    it("should render stolen bike's title", () => {
        expect(wrapper(0).find('h1').at(0).text()).toBe('Stolen Bike');
    });

    it("should render stolen bike's description", () => {
        expect(wrapper(0).find('h3').at(0).text()).toBe('Stolen Bike');
    });

    it("should render stolen bike's image", () => {
        expect(wrapper(0).find('img').at(0).prop('src')).toBe(
            stolenBikes[0].large_img
        );
    });

    it("should render stolen bike's location", () => {
        expect(wrapper(0).find('h3').at(4).text()).toBe('Berlin');
    });

    it("should render stolen bike's date", () => {
        expect(wrapper(0).find('h3').at(2).text()).toBe(datos(1629989555));
    });

    it("should render a default image when api's response doesn't have one", () => {
        expect(wrapper(1).find('img').at(0).prop('src')).toBe(image);
    });
});
